import {Schema, model, models} from "mongoose";

const PostSchema = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',

    },
    post: {
        type: String,
        required: [true, "Post is Required!"],
    },
    tag: {
        type: String,
        required: [true, "Tags are required!"]
    }
});

const Post = models.Post || model('Post',PostSchema);

export default Post;