import React from 'react'
const navigation = [
  {
    name: 'GitHub',
    href: 'https://github.com/magda5281',
    icon: (
      props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
    ) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.286-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.746.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.834 2.807 1.304 3.492.997.11-.775.42-1.304.76-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.304-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.478 11.478 0 0 1 12 5.8c1.02.004 2.047.138 3.007.405 2.29-1.552 3.297-1.23 3.297-1.23.654 1.652.24 2.872.117 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.622-5.479 5.922.43.37.814 1.102.814 2.222 0 1.605-.015 2.897-.015 3.29 0 .32.193.693.798.576C20.565 21.8 24 17.3 24 12c0-6.627-5.373-12-12-12z'
        />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/magdalena-gozdalik/',
    icon: (
      props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
    ) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M20.447 20.452h-3.554v-5.385c0-1.285-.025-2.936-1.79-2.936-1.792 0-2.068 1.4-2.068 2.85v5.472h-3.554V9h3.41v1.56h.047c.477-.9 1.636-1.848 3.37-1.848 3.603 0 4.27 2.373 4.27 5.458v6.283zM4.978 7.433c-1.145 0-2.075-.933-2.075-2.08 0-1.15.93-2.084 2.075-2.084 1.146 0 2.078.934 2.078 2.084 0 1.147-.932 2.08-2.078 2.08zM6.759 20.452h-3.56V9h3.56v11.452zM22.225 0H1.771C.792 0 0 .775 0 1.732V22.27C0 23.225.792 24 1.771 24H22.23c.974 0 1.77-.775 1.77-1.73V1.732C24 .775 23.2 0 22.225 0z'
        />
      </svg>
    )
  }
]

export default function Footer() {
  return (
    <footer className='py-8'>
      <div className='container max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center space-x-6 md:order-2'>
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer noopener'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon aria-hiden='true' className='h-5 w-5' />
              </a>
            ))}
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-muted-foreground'>
              &copy; {new Date().getFullYear()} Company name. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
