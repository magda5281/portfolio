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
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = await getProjectBySlug(slug)

  if (!project) {
    return notFound()
  }

  const { metadata, content } = project

  const { title, image, author, publishedAt } = metadata
  return (
    <section className='w-full pb-8 pt-4 md:pt-0'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='text mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className='card-shadow relative mb-6 aspect-video w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
              priority
            />
          </div>
        )}

        <article className='prose mt-6 w-full dark:prose-invert'>
          <MDXContent source={content} className={''} />
        </article>
        <p className='mt-3 text-xs text-muted-foreground'>
          {author}/ {formatDate(publishedAt ?? '')}
        </p>
      </div>
    </section>
  )
}
