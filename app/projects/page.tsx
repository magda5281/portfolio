import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'
import React from 'react'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='card-shadow secondary-bg p-8 pb-24'>
      <div className='container max-w-4xl'>
        <h1 className='title mb-12'>Projects</h1>
        <Projects projects={projects} />
      </div>
    </section>
  )
}
