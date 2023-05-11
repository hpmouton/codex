import Link from 'next/link'
import React from 'react'

const Form = ({type,post,setPost,submitting,handleSubmit}) => {
  return (
    <section
    className='w-full max-w-full flex-start flex-col'
    >
      <h1
      className='head_text text-left'
      ><span className='blue_gradient'>{type} Post</span></h1>
      <p
      className='desc text-left max-w-md'
      >Welcome to Codex's story submission form! We would love to hear about your experiences with our AI products. Whether it's a success story, a feature request, or a use case, we want to know how Codex has helped you. Please share your story with us and help us improve our products to better serve your needs.</p>

      <form
      onSubmit={handleSubmit}
      className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Your Post</span>
          <textarea
          value={post.post}
          onChange={(e) =>setPost({ ...post,post: e.target.value})}
          placeholder='Write your post here'
          required
          className='form_textarea'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Tag{' '}<span className='font-normal'></span>(#webdev, #ideas, #products)</span>
          <input
          value={post.tag}
          onChange={(e) =>setPost({ ...post,tag: e.target.value})}
          placeholder='#tag'
          required
          className='form_input'
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className='text-gray-500 text-sm'>Cancel</Link>
          <button
          type='submit'
          disabled={submitting}
          className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'

          >
            {submitting ? `${type}...` : type}
          </button>

        </div>

      </form>
    </section>
  )
}

export default Form