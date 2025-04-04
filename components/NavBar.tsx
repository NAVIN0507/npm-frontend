import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
<header className='w-full h-20 bg-secondary'>
    <nav className='p-6 text-text flex items-center justify-between'>
        <div className='flex gap-4'>
            <Image src={"/npm.png"} alt='npm' width={82} height={82}/>
            <h1 className='-ml-3 text-2xl mb-1'>@navin0507</h1>
        </div>
        
    </nav>
</header>
  )
}

export default NavBar