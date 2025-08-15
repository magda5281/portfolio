import { getPosts } from '@/lib/posts'
import React from 'react'
import Link from 'next/link'
import Posts from '@/components/posts'

export default async function RecentPosts() {
  const posts = await getPosts(4)
  return (
    <section className='card-shadow secondary-bg p-8'>
      <h2 className='title mb-12'>Recent posts</h2>
      <Posts posts={posts} />
      <Link href='/posts' className='mt-8 inline-flex items-center'>
        <span className='links-color'>All posts</span>
      </Link>
    </section>
  )
}
