import PostsWithSearch from '@/components/postsWithSearch'
import { getPosts } from '@/lib/posts'
import React from 'react'

export default async function PostsPage() {
  const posts = await getPosts()
  return (
    <section className='card-shadow secondary-bg p-8 pb-24'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Posts</h1>
        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}
