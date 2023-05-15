
import { connectToDB } from "@utils/database";
import Post from "@models/post";
//GET 

export const GET = async (request, {params}) => {
    try {
        await connectToDB();

        const post = await Post.findById(params.id).populate('creator');

        if(!post) return new Response("Prompt not found", {status: 404});



        return new Response(JSON.stringify(post), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch post",{status: 500})
    }
}
//PATCH

export const PATCH = async (request, {params}) => {
    const {post, tag} = await request.json();

    try {
        await connectToDB();

        const existingPost = await Post.findById(params.id);
        if(!post) return new Response("Prompt not found", {status: 404});

        existingPost.post = post;
        existingPost.tag = tag;

        await existingPost.save();

        return new Response(JSON.stringify(existingPost), {status:200})
        
    } catch (error) {
        return new Response("Failed to update post",{status: 500})

    }

}
//DELETE

export const DELETE = async (request, {params}) => {
    try {
        await connectToDB();
        await Post.findByIdAndRemove(params.id);
        return new Response("Post Deleted Successfully",{status: 200})


    } catch (error) {
        return new Response("Failed to delete post",{status: 500})

    }
}