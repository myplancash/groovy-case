import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-white relative h-20'>
      <MaxWidthWrapper>
        <div className='border-t border-gray-200'/>
        <div className='h-full flex flex-col md:flex-row md:justify-between justify-center items-center'>
          <div className='text-center md:text-left pb-2 md:pb-0'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} All rights reserved by <span className='text-primary'>Sergio Esteban Torres</span>
            </p>
          </div>
          <div className='items-center flex justify-center'>
            <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-primary'
              >
              Terms
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-primary'
              >
              Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-primary'
              >
              Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer