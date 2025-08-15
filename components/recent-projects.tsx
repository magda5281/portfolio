import { getProjects } from '@/lib/projects'
import React from 'react'
import Link from 'next/link'
import Projects from '@/components/projects'

export default async function RecentProjects() {
  const projects = await getProjects(6)
  return (
    <section className='card-shadow secondary-bg p-8'>
      <h2 className='title mb-12'>Recent projects</h2>
      <Projects projects={projects} />
      <Link href='/projects' className='mt-8 inline-flex items-center'>
        <span className='links-color'>All projects</span>
      </Link>
    </section>
  )
}
