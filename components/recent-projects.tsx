import { getProjects } from '@/lib/projects'
import React from 'react'
import Link from 'next/link'
import Projects from '@/components/projects'

export default async function RecentProjects() {
  const projects = await getProjects(4)
  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent projects</h2>
        <Projects projects={projects} />
        <Link href='/projects' className='mt-8 inline-flex items-center'>
          <span className='text-blue-400 hover:text-blue-500'>
            All projects
          </span>
        </Link>
      </div>
    </section>
  )
}
