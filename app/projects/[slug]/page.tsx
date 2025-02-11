import React from 'react'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'

export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.map(project => ({ slug: project.slug }))
  return slugs
}
export default async function Project({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = await params

  const project = await getProjectBySlug(slug)

  if (!project) {
    return notFound()
  }

  const { metadata, content } = project

  const { title, image, author, publishedAt } = metadata
  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='text mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <Link
            href='https://best-shop-resposive.vercel.app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h1 className='title'>{title}</h1>
          </Link>

          <p className='mt-3 text-xs text-muted-foreground'>
            {author}/ {formatDate(publishedAt ?? '')}
          </p>
        </header>
        <article className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </article>
      </div>
    </section>
  )
}
