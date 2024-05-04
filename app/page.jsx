import Link from "next/link"
import Image from "next/image"

import avatar from "./assets/avatar.jpg"

export default function Home() {
  return (
    <div className="text-white bg-black">
      <div className="container min-h-[70vh] mx-auto flex flex-col justify-center items-center text-center">
        <div className="text-xl md:text-3xl">gawston - Portfolio.</div>
        <div className="text-7xl md:text-9xl">Junior Developer.</div>
        <div className="text-sm md:text-xl mt-2">
          Hi, I'm Naruenat Khamwaree. I'm interested in web development and design.
        </div>
      </div>
      <div className="container mx-auto grid lg:grid-cols-3 gap-5 p-4 lg:p-6" id="work">
        <div className="bg-gray-900 h-[300px] rounded-xl">1</div>
        <div className="bg-gray-900 h-[300px] rounded-xl">1</div>
        <div className="bg-gray-900 h-[300px] rounded-xl">1</div>
        <div className="bg-gray-900 h-[300px] rounded-xl">1</div>
        <div className="bg-gray-900 h-[300px] rounded-xl">1</div>
        <div className="bg-gray-900 h-[300px] rounded-xl">1</div>
        <div className="bg-gray-900 h-[300px] rounded-xl">1</div>
        <div className="bg-gray-900 h-[300px] rounded-xl">1</div>
        <div className="bg-gray-900 h-[300px] rounded-xl">1</div>
      </div>
      <div className="container min-h-screen mx-auto flex flex-col items-center justify-center" id="contact">
        <p className="text-5xl">contact section</p>
      </div>
    </div>
  )
}
