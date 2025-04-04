import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { GithubIcon } from 'lucide-react'
import Link from 'next/link'

const NavBar = () => {
  return (
<header className='w-full h-20 bg-secondary'>
    <nav className='p-6 text-text flex items-center justify-between'>
        <div className='flex gap-4'>
            <Image src="/npm.png" alt='npm' width={82} height={82}/>
            <h1 className='-ml-3 text-2xl mb-1'>@navin0507</h1>
        </div>
        <div className='flex gap-4'>
        <Link href="https://github.com/NAVIN0507"><Button className='bg-green-700 cursor-pointer hover:-translate-y-2 duration-500 ease-linear'>GitHub <GithubIcon /></Button></Link>
          
        </div>
    </nav>
</header>
  )
}

export default NavBar