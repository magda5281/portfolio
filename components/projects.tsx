import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//TODO: Add loading skeleton , addp pagination
export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {projects.map(project => (
        <li key={project.slug} className='group relative'>
          <Link href={`/projects/${project.slug}.mdx`}>
            <div className='h-72 w-full overflow-hidden rounded-lg bg-muted sm:h-60'>
              <Image
                src={project?.image || ''}
                alt={project.title || ''}
                fill
                className='hover: rounded-lg object-cover object-center shadow-lg transition-transform duration-300 ease-in-out'
              />
            </div>

            <div className='absolute inset-[4px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70'>
              <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-4'>
                <h2 className='title line-clamp-1 text-xl no-underline'>
                  {project.title}
                </h2>
                <p className='line-clamp-1 text-sm text-muted-foreground'>
                  {project.summary}
                </p>
                <p className='text-xs font-light text-muted-foreground'>
                  {formatDate(project.publishedAt ?? '')}
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
