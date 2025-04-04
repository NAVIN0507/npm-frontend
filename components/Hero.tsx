"use client"
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from 'lucide-react'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
   <section className='justify-center items-center
    flex'>
    <div className='w-fit xl:w-11/12 h-fit   bg-secondary rounded-xl mt-28 mr-5 ml-5 sm:mr-0 sm:ml-0'>
    <div className='flex gap-4 relative p-14 '>
      <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}  
      >
        <div className='text-text flex flex-col items-center justify-center mx-auto xl:items-start xl:m-0'>
            <h1 className="text-4xl font-bold mb-4">Developer Tools That Just Work ⚡</h1>
  <p className="text-lg text-gray-400 mb-6">
    Simple, fast, and useful npm packages by <span className="text-[var(--color-accent)] font-semibold">Navin</span>.
  </p>
  <div className="flex  gap-4">
    <a href="#packages">
      <Button className="bg-[var(--color-accent)] text-white hover:bg-[var(--color-hover)] cursor-pointer">
        Explore Packages
      </Button>
    </a>
    <a href="https://www.npmjs.com/package/@navin0507/string-utilsmns" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" className="border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-secondary)] cursor-pointer">
        View on npm
      </Button>
    </a>
  </div>
  
<Alert className="mt-10">
  <Terminal className="h-4 w-4" />
  <AlertTitle>Hey Dev 👋</AlertTitle>
  <AlertDescription>
    Explore useful and lightweight npm packages built to boost your development workflow.
  </AlertDescription>
</Alert>
        </div>
        </motion.div>
        <div className='hidden xl:flex items-center mx-auto my-auto justify-center'>
            <Image src="/package.png" alt='package' width={400} height={400} className='absolute animate-bounce'/>
        </div>
    </div>
    </div>
   </section>
  )
}

export default Hero