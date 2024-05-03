"use client"

import React, {useState, useRef, useEffect} from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import cateating from "../assets/cateating.gif"

const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/#work", label: "Work" },
    { path: "/about", label: "About" },
    { path: "/#contact", label: "Contact" }
]

const socialLinks = [
    { path: "https://www.facebook.com/xnotswagz/", label: "Facebook" },
    { path: "https://www.instagram.com/gawstonz/", label: "Instagram" },
    { path: "https://github.com/gawston", label: "Github" }
]

export default function Menu() {
    const menuContainer = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const tl = useRef();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useGSAP(() => {
        gsap.set(".menuLinkItems", { y: 90 });
        gsap.set(".socialLinks", { y: 90 });
        tl.current = gsap
        .timeline({ paused: true })
        .to(".menuOverlay", { 
            duration: 1.25,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "power4.inOut",
        })
        .to(".menuLinkItems", { 
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
        })
        .to(".socialLinks", { 
            y: 0,
            duration: 1.25,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
        }, "-=0.5")
    }, 
    { scope: menuContainer }
    );

    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen]);

    return (
        <div className="w-full" ref={menuContainer}>
            {/* nav */}
            <div className="fixed top-0 w-full p-8 flex justify-between items-center">
                <Link href="/" className="text-2xl md:text-3xl">gawston.dev</Link>
                <div className="cursor-pointer" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </div>
            </div>
            {/* menu overlay */}
            <div className="menuOverlay fixed left-0 w-full h-screen bg-amber-400 z-[2]">
                {/* nav in menu overlay */}
                <div className="w-full p-8 flex justify-between items-center">
                    <Link href="/" className="text-2xl md:text-3xl" onClick={toggleMenu}>gawston.dev</Link>
                    <div className="cursor-pointer" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                {/* menu */}
                <div className="container mx-auto p-4">
                    {menuLinks.map((link, index) => (
                        <div key={index} className="overflow-hidden">
                            <div className="menuLinkItems">
                                <Link href={link.path} onClick={toggleMenu}>
                                    <p className="text-6xl md:text-8xl border-b-2 border-amber-400 hover:border-black transition-all">{link.label} </p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                {/* overlay footer */}
                <div className="fixed bottom-0 w-full p-8 flex justify-between items-end">
                    <ul className="text-xl space-y-2">
                        {socialLinks.map((link, index) => (
                            <li className="overflow-hidden hover:underline" key={index}>
                                <div className="socialLinks tracking-wideest">
                                    <Link href={link.path} target="_blank">{link.label} &#8599;</Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {/* copyright */}
                    <p className="hidden md:block text-xl">&copy; 2024 gawston.dev</p>
                    <div className="overflow-hidden">
                        <div className="socialLinks">
                            <Image src={cateating} alt="cateating dance" width={130} height={130} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}