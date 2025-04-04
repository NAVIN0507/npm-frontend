import React from 'react'
import PackageCard from './PackageCard'

const Packages = () => {
  return (
<section className='justify-center items-center flex mx-auto' id='#packages'>
<div className='mt-10'>
    <h1 className='text-text text-4xl text-center'>Packages</h1>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5'>
        <PackageCard/>
        <PackageCard/>
    </div>
</div>
</section>
  )
}

export default Packages