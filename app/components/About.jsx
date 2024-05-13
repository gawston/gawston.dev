import Image from "next/image"

import aboutpic from "../assets/aboutpic.jpg"

export default function About() {
    return (
        <div className="container mx-auto min-h-screen grid md:grid-cols-2">
            <div className="p-4 md:sticky top-0 w-full md:h-screen flex flex-col items-center md:justify-center gap-4">
                <Image src={aboutpic} alt="test" width={450} className="object-cover hover:scale-90 transition-all duration-1000 hover:saturate-150" draggable="false"/>
                <div className="text-center">
                <p className="text-xl">Naruenat Khamwaree</p>
                <p className="text-md">IT | King Mongkut&apos;s University of Technology North Bangkok</p>
                </div>
            </div>
            <div className="p-4 md:mt-[120px] w-full h-auto flex flex-col gap-8">
                <p>
                    Hi there! I&apos;m Naruenat Khamwaree, a student at King Mongkut&apos;s University of Technology North Bangkok. 
                    I&apos;m a web developer and I&apos;m passionate about web development.
                    I&apos;m always looking for new things to learn and I&apos;m always looking for new opportunities.
                </p>
                <p>
                    Skills: HTML, CSS, JavaScript, 
                    React, Next.js, Tailwind CSS, 
                    Node.js, Express.js, PHP
                </p>
            </div>
        </div>
    )
}