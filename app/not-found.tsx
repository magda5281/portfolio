import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='pb-24 pt-40'>
      <div className='md:place-items min-h-full px-4 sm:px-6 sm:py-24 md:grid'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
            <p className='text-4xl font-bold tracking-tight text-muted-foreground'>
              404
            </p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                <h1 className='text-3xl font-bold tracking-tight sm:text-5xl'>
                  Page not found
                </h1>
                <p className='mt-1 text-base text-muted-foreground'>
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className='sm:border-1 mt-10 flex space-x-3 sm:border-transparent'>
                <Link
                  href='/'
                  className='mt-10 inline-flex items-center gap-3 text-blue-500 text-muted-foreground hover:text-blue-600'
                >
                  <ArrowLeftIcon className='h-5 w-5' />
                  <span>Go back home</span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
