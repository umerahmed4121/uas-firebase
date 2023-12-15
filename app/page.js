"use client"

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Stars, Canvas, StarsCanvas} from './../components';
import { readDocuments } from "@/api/projects"

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

export default function Home() {


  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative z-0 bg-primary">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </QueryClientProvider>
  )
}