import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface PacCardProps{
  name:string;
  description:string;
  commend:string;
  githubRepo:string;
  npmLink:string;
}
const PackageCard = ({name , description , commend , githubRepo , npmLink}:PacCardProps) => {
  return (
    <Link href={npmLink}>
<div className='w-[400px]  h-[470px] bg-secondary rounded-xl cursor-pointer hover:-translate-y-3 duration-500 ease-in-out'>
<div className='relative'>
  <Image src={"/package2.png"} alt='package' width={100} height={100} className='absolute -mt-10 ml-4 animate-pulse'/>
</div>
<div className=' p-8 text-text text-sm'>
  <h1 className='text-3xl mt-10 text-green-300'>{name}</h1>
  <div className='w-[350px] h-[150px] p-6  py-2 line-clamp-4 rounded-2xl mt-5 bg-primary '>
    <p>{description}</p>
  </div>
</div>
</div>
</Link>
  )
}

export default PackageCard