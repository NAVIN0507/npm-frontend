import Image from 'next/image';
import React from 'react'
interface PacCardProps{
  name:string;
  description:string;
  commend:string;
  githubRepo:string
}
const PackageCard = ({name , description , commend , githubRepo}:PacCardProps) => {
  return (
<div className='w-[400px]  h-[450px] bg-secondary rounded-xl'>
<div className='relative'>
  <Image src={"/package2.png"} alt='package' width={100} height={100} className='absolute -mt-10 ml-4 animate-pulse'/>
</div>
<div className='mt-10 p-10 text-text'>
  <h1 className='text-3xl'>{name}</h1>
</div>
</div>
  )
}

export default PackageCard