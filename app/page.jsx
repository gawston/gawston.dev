"use client"

import Link from "next/link"
import Image from "next/image"
import coolfun from "./assets/coolfun.gif"

export default function Home() {

  return (
    <div>
      <div className="container min-h-screen mx-auto flex flex-col justify-center items-center text-center">
        <p className="heroText text-5xl md:text-7xl lg:text-9xl font-semibold">
          Web developer and Graphic designer.
        </p>
        <div className="absolute bottom-12 flex flex-col items-center">
          <div className="-space-y-5 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <p className="text-xl">Scroll down</p>
        </div>
      </div>
      <div className="container mx-auto grid lg:grid-cols-2 gap-5 p-4 lg:p-6" id="work">
        <div className="bg-white h-[700px] flex items-center justify-center overflow-hidden">
          <Image src={coolfun} alt="cateating dance" className="object-cover hover:scale-125 transition-all duration-1000 ease-in-out" width={500} />
        </div>
        <div className="bg-white h-[700px] flex items-center justify-center overflow-hidden">
          <Image src={coolfun} alt="cateating dance" className="object-cover hover:scale-125 transition-all duration-1000 ease-in-out" width={500} />
        </div>
        <div className="bg-white h-[700px] flex items-center justify-center overflow-hidden">
          <Image src={coolfun} alt="cateating dance" className="object-cover hover:scale-125 transition-all duration-1000 ease-in-out" width={500} />
        </div>
        <div className="bg-white h-[700px] flex items-center justify-center overflow-hidden">
          <Image src={coolfun} alt="cateating dance" className="object-cover hover:scale-125 transition-all duration-1000 ease-in-out" width={500} />
        </div>
        <div className="bg-white h-[700px] flex items-center justify-center overflow-hidden">
          <Image src={coolfun} alt="cateating dance" className="object-cover hover:scale-125 transition-all duration-1000 ease-in-out" width={500} />
        </div>
        <div className="bg-white h-[700px] flex items-center justify-center overflow-hidden">
          <Image src={coolfun} alt="cateating dance" className="object-cover hover:scale-125 transition-all duration-1000 ease-in-out" width={500} />
        </div>
      </div>
      <div className="container min-h-screen mx-auto flex flex-col items-center justify-center" id="contact">
        <p className="text-5xl">
          contact section
        </p>
      </div>
    </div>
  )
}
