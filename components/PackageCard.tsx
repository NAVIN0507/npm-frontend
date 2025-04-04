"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Copy, CopyCheck, GitBranch, Terminal } from 'lucide-react';
import { Button } from './ui/button';
interface PacCardProps{
  name:string;
  description:string;
  commend:string;
  githubRepo:string;
  npmLink:string;
}
const PackageCard = ({name , description , commend , githubRepo , npmLink}:PacCardProps) => {
  const [hasCopied, sethasCopied] = useState(false);
  const handleCopy = ()=>{
    navigator.clipboard.writeText(commend)
    sethasCopied(true)
    setTimeout(()=>{
      sethasCopied(false)
    } , 2000)
  }
  return (
  
<div className='w-[400px]  h-[470px] bg-secondary rounded-xl cursor-pointer hover:-translate-y-3 duration-500 ease-in-out'>
<div className='relative'>
  <Image src={"/package2.png"} alt='package' width={100} height={100} className='absolute -mt-10 ml-4 animate-pulse'/>
</div>
<div className=' p-8 text-text text-sm'>
  <div className=' mt-10 bg-primary p-3 rounded-xl '>
    <h1 className='truncate text-xl'>{name}</h1>
    </div>
  <div className='w-[350px] h-[150px] p-6  py-2 line-clamp-4 rounded-2xl mt-5 bg-primary '>
    <p>{description}</p>
  </div>
  <Alert className="mt-3 flex flex-col gap-1" onClick={handleCopy}>
    

  <AlertDescription className='flex gap-3 cursor-pointer'>
   <p className='truncate'>{commend}</p> 
   {hasCopied ?  <CopyCheck className='h-4 w-4' color='#2b9424'/> : <Copy className="h-4 w-4"/> }
  </AlertDescription>
</Alert>
<Link className='' href={githubRepo}>
<Button className='mt-4 w-full h-14 bg-[var(--color-accent)] cursor-pointer text-white '><GitBranch/> Github Repositary</Button>
</Link>
</div>
</div>

  )
}

export default PackageCard