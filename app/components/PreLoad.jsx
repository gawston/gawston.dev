"use client"

import React, {useState, useRef, useEffect} from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function PreLoad() {
  const preLoader = useRef();
  const tl = useRef();

  useGSAP(() => {
    gsap.set(".heroText", { scale: 0.8 })
    tl.current = gsap
    .timeline({ paused: true })
    .to(".preLoadText", {
      y: 0,
      duration: 1.5,
      stagger: 0.075,
      ease: "power4.inOut"
    })
    .to(".preLoadText", {
      y: -100,
      duration: 1.5,
      stagger: 0.075,
      ease: "power4.inOut"
    })
    .to(".preLoadContainer", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%",
      ease: "power4.inOut",
      delay: -1
    })
  }, { scope: preLoader });

  useEffect(() => {
      tl.current.play();
      setTimeout(() => {
        document.querySelector(".preLoadContainer").style.display = "none"
      }, 4000)
  }, [])

    return (
        <div ref={preLoader}>
            <div className="preLoadContainer fixed top-0 w-full h-screen bg-black z-[999] flex justify-center items-center">
                <div className="overflow-hidden p-4">
                    <div className="text-7xl font-semibold text-white flex items-center">
                        <p className="preLoadText translate-y-[100px]">g</p>
                        <p className="preLoadText translate-y-[100px]">a</p>
                        <p className="preLoadText translate-y-[100px]">w</p>
                        <p className="preLoadText translate-y-[100px]">s</p>
                        <p className="preLoadText translate-y-[100px]">t</p>
                        <p className="preLoadText translate-y-[100px]">o</p>
                        <p className="preLoadText translate-y-[100px]">n</p>
                    </div>
                </div>
            </div>
        </div>
    )
}