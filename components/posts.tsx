import React from 'react'
import { PostMetadata } from '@/lib/posts'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className='flex flex-col gap-8'>
      {posts.map(post => (
        <li key={post.slug}>
          <Link
            href={`/posts/${post.slug}.mdx`}
            className='gap-x4 flex justify-between gap-y-1'
          >
            <div className='max-w-lg'>
              <h3 className='semibold text-lg'>{post.title}</h3>
              <p className='mt-1 line-clamp-2 text-sm font-light text-muted-foreground'>
                {post.summary}
              </p>
            </div>
            {post.publishedAt && (
              <p className='mt-1 text-sm font-light'>
                {formatDate(post.publishedAt)}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
