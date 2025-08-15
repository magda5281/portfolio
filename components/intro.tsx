import React from 'react'
import Image from 'next/image'
import authorImage from '@/public/images/authors/magda.png'

export default function Intro() {
  return (
    <section aria-labelledby='site-title'>
      <h1
        id='site-title'
        className='mb-6 text-center text-2xl font-bold sm:text-3xl lg:text-4xl'
      >
        HerDevLab
      </h1>
      <header className='card-shadow secondary-bg flex items-center gap-x-10 gap-y-4 rounded-2xl p-8 md:flex-row'>
        <div className='mt-2 flex-1 md:mt-0'>
          <div className='card-shadow float-left mr-4 flex-shrink-0 rounded-lg'>
            <Image
              src={authorImage}
              alt='Magda Gozdalik'
              width={100}
              height={100}
              priority
              className='h-[100px] w-[100px] rounded-lg object-cover grayscale md:h-[175px] md:w-[175px] lg:h-[200px] lg:w-[200px]'
            />
          </div>
          <h2 className='title leading-none no-underline'>
            Hey, I&#39;m Magda.
          </h2>
          <p className='mt-3 text-justify font-light text-muted-foreground'>
            I&#39;m a self‑starting Frontend Developer with 3 years under my
            belt, building responsive, user‑centric interfaces in JavaScript and
            React (TypeScript‑powered for safety). I turn designs into
            pixel‑perfect experiences with HTML, SCSS, and component libraries
            like Chakra UI or Bootstrap. Passionate about clean architecture, I
            leverage Storybook for reusable components and Playwright for
            rock‑solid testing. AI‑driven workflows keep me ahead of the
            curve—making me fast, detail‑obsessed, and always ready to learn the
            next big thing.
          </p>
        </div>
      </header>
    </section>
  )
}
