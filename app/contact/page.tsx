import ContactForm from '@/components/contact-form'
import React from 'react'

export default function Contact() {
  return (
    <section className='card-shadow secondary-bg p-8 pb-24'>
      <div className='container max-w-3xl'>
        <h2 className='title'>Let&apos;s talk about your project</h2>
        <ContactForm />
      </div>
    </section>
  )
}
