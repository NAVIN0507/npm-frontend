import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
   <section className='justify-center items-center
    flex'>
    <div className='w-11/12 h-[300px] bg-secondary rounded-xl mt-20'>
    <div className='flex gap-4 p-4'>
        <div className='text-text p-14'>
            <h1 className="text-4xl font-bold mb-4">Developer Tools That Just Work ⚡</h1>
  <p className="text-lg text-gray-400 mb-6">
    Simple, fast, and useful npm packages by <span className="text-[var(--color-accent)] font-semibold">Navin</span>.
  </p>
  <div className="flex  gap-4">
    <a href="#packages">
      <Button className="bg-[var(--color-accent)] text-white hover:bg-[var(--color-hover)]">
        Explore Packages
      </Button>
    </a>
    <a href="https://www.npmjs.com/~navin0507" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" className="border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-secondary)]">
        View on npm
      </Button>
    </a>
  </div>
        </div>
    </div>
    </div>
   </section>
  )
}

export default Hero