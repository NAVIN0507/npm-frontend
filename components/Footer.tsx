import { GithubIcon, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bottom-0 h-fit bg-secondary'>
        <div className='p-5 text-text flex justify-between items-center flex-col gap-3 md:flex-row'>
            <h1>© Nova 2025. All rights reserved</h1>
            <div className='flex gap-4'>
         <Link href="https://github.com/NAVIN0507"> <div className='w-10 h-10 bg-black justify-center flex items-center rounded-2xl'> <GithubIcon/> </div>  </Link>
        <Link href="www.linkedin.com/in/navin07">   <div className='w-10 h-10 bg-blue-400 justify-center flex items-center rounded-2xl'> <Linkedin/> </div> </Link>
           </div> 
            <h1>Privacy Policy</h1>
        </div>
    </footer>
  )
}

export default Footer