import React from 'react'
import PackageCard from './PackageCard'
import { MyPackages } from '@/pacakages'

const Packages = () => {
  return (
<section className='justify-center items-center flex mx-auto ' id='#packages'>
<div className='mt-10 mb-20'>
    <h1 className='text-text text-4xl text-center'>Packages</h1>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10'>
        {MyPackages.map((i)=>(
          <PackageCard 
          name={i.name} 
          description={i.description} 
          githubRepo={i.githubRepo}
          npmLink={i.npmLink}
          commend={i.commend}
          />
        ))}
    </div>
</div>
</section>
  )
}

export default Packages