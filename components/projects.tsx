import { ProjectMetadata } from '@/lib/projects'
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
        <li
          key={project.slug}
          className='card-shadow group relative rounded-lg'
        >
          <Link href={`/projects/${project.slug}.mdx`}>
            <div className='relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted'>
              <Image
                src={project?.image || ''}
                alt={project.title || ''}
                fill
                sizes='(max-width: 640px) 100vw, 
           (max-width: 1024px) 50vw, 
           33vw'
                className='hover: rounded-lg object-cover object-center transition-transform duration-300 ease-in-out'
              />
            </div>

            <div
              className='absolute inset-[4px] rounded-lg opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'
              style={{
                backgroundColor: project.color
              }}
            >
              <div className='absolute inset-0 flex flex-col justify-center p-6'>
                <h2
                  className={`title line-clamp-1 text-xl no-underline`}
                  style={{ color: project.textColor }}
                >
                  {project.title}
                </h2>
                <p
                  className='line-clamp-3 text-sm text-foreground'
                  style={{ color: project.textColor }}
                >
                  {project.summary}
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
