"use client"

import { ReactLenis } from 'lenis/react'

export default function SmoothScroll({ children }) {
    return (
        <ReactLenis 
        root
        options={{
            lerp: 0.055,
            duration: 1.5,
            smoothTouch: true,
        }}
        >
            {children}
        </ReactLenis>
    )
}