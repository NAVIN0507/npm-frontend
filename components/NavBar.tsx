import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { CalendarIcon, Contact, GithubIcon, LinkedinIcon, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const NavBar = () => {
  return (
<header className='w-full h-20 bg-secondary'>
    <nav className='p-6 text-text flex items-center justify-between'>
        <div className='flex gap-4'>
            <Image src="/npm.png" alt='npm' width={82} height={82}/>
            <h1 className='-ml-3 text-2xl mb-1'>@navin0507</h1>
        </div>
        <div className='hidden sm:flex gap-4'>
        <Link href="https://github.com/NAVIN0507"><Button className='bg-green-700 cursor-pointer hover:-translate-y-2 duration-500 ease-linear'>GitHub <GithubIcon /></Button></Link>
         <HoverCard>
      <HoverCardTrigger asChild>
        <Button className='bg-white text-black cursor-pointer hover:-translate-y-2 duration-500 ease-linear hover:bg-white hover:text-black'>Contact <Contact/></Button>  
      </HoverCardTrigger>
      <HoverCardContent className="w-[330px] bg-white border-none text-black">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="avatar.jpeg" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">NAVIN N</h4>
            <p className="text-sm flex gap-2 mt-3">
              <Mail size={18}/>navinofficial2005@gmail.com
            </p>
             <p className="text-sm flex gap-2">
              <Phone size={18}/>+918248690516
            </p>
             <p className="text-sm flex gap-2">
              <LinkedinIcon size={18}/>Linked In
            </p>  
           
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
        
        </div>
    </nav>
</header>
  )
}

export default NavBar