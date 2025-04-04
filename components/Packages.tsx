import React from 'react'
import PackageCard from './PackageCard'

const Packages = () => {
  return (
<section className='justify-center items-center flex mx-auto ' id='#packages'>
<div className='mt-10 mb-20'>
    <h1 className='text-text text-4xl text-center'>Packages</h1>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10'>
        <PackageCard name='string-utilsmns v: 1.0.6' description='🚀 String Utilities is a lightweight package for common string operations. 🔠 Easily extract initials from names or phrases. ⚡ Designed for both JavaScript and TypeScript projects. ' commend='npm i @navin0507/string-uitlsmns' githubRepo='https://github.com/NAVIN0507/getStringUtils.git' npmLink='https://www.npmjs.com/package/@navin0507/string-utilsmns'/>
         <PackageCard name='string-utilsmns' description='🚀 String Utilities is a lightweight package for common string operations. 🔠 Easily extract initials from names or phrases. ⚡ Designed for both JavaScript and TypeScript projects. ' commend='npm i @navin0507/string3-uitlsmns' githubRepo='https://github.com/NAVIN0507/getStringUtils.git' npmLink='https://www.npmjs.com/package/@navin0507/string-utilsmns'/>
    </div>
</div>
</section>
  )
}

export default Packages