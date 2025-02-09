import React from 'react'
import Image from 'next/image'
import authorImage from '@/public/images/authors/magda.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-center gap-x-10 gap-y-4 pb-4 md:flex-row'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Magda.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a frontend developer based in London,UK. My passion is
          developing user centric applications. I love learning new technologies
        </p>
      </div>
      <div className='relative'>
        <Image
          src={authorImage}
          alt='Magda Gozdalik'
          width={175}
          height={175}
          className='flex-1 rounded-lg object-cover grayscale'
          layout='intrinsic'
          priority
        />
      </div>
    </section>
  )
}
