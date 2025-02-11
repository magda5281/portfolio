import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='flex flex-col gap-8'>
      {projects.map(project => (
        <li key={project.slug}>
          <Link
            href={`/projects/${project.slug}.mdx`}
            className='gap-x4 flex justify-between gap-y-1'
          >
            <div className='max-w-lg'>
              <p className='semibold text-lg'>{project.title}</p>
              <p className='mt-1 line-clamp-2 text-sm font-light text-muted-foreground'>
                {project.summary}
              </p>
            </div>
            {project.publishedAt && (
              <p className='mt-1 text-sm font-light'>
                {formatDate(project.publishedAt)}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
