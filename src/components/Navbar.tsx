import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const Navbar = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  const isAdmin = user?.email === process.env.ADMIN_EMAIL

  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link href='/' className='flex z-40 font-semibold'>
            Groovy<span className='text-green-600'>Case</span>
          </Link>

          <div className='h-full flex items-center space-x-4'>
            {user ? (
              <>
                <Link
                  href='/api/auth/logout'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost' ,
                  })}>
                  Sign out
                </Link>
                {isAdmin ? ( 
                  <Link
                    href='/dashboard'
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'ghost',
                    })}>
                    Dashboard ✨
                  </Link>
                ) : null} 
                <Link
                  href='/configure/upload'
                  className={buttonVariants({
                    size: 'sm',
                    className: "group hidden sm:flex items-center gap-1 rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-400 md:text-base"
                  })}>
                  <span>Create case</span> <ArrowRightIcon className="'ml-1.5 h-5 w-5 md:w-6 transition-transform duration-500 ease-in-out group-hover:translate-x-2" />
                </Link>
              </>
             ) : (
              <>
                <Link
                  href='/api/auth/register'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Sign up
                </Link>

                <Link
                  href='/api/auth/login'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Login
                </Link>

                <div className='h-8 w-px bg-zinc-200 hidden sm:block' />

               <Link
                  href='/configure/upload'
                  className={buttonVariants({
                    size: 'sm',
                    className: "group hidden sm:flex items-center gap-1 rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-400 md:text-base"
                  })}>
                  <span>Create case</span> <ArrowRightIcon className="'ml-1.5 h-5 w-5 md:w-6 transition-transform duration-500 ease-in-out group-hover:translate-x-2" />
                  
                </Link> 
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar