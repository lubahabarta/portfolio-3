'use client'

import gsap from 'gsap'
import React, { useEffect } from 'react'

export default function About() {
    useEffect(() => {
        gsap.to('#something', {
            scrollTrigger: {
                trigger: '#about-section',
                start: 'top bottom',
                end: '200% top',
                scrub: true,
                markers: true,
            },
            x: '+=100',
            ease: 'none',
        })
    }, [])

    return (
        <section
            id="about-section"
            className="relative bg-stone-950
                before:content-[''] before:absolute before:-top-20 before:w-screen before:h-20 before:bg-gradient-to-t before:from-stone-950 before:to-transparent"
        >
            <div className="h-device flex items-center justify-center overflow-hidden px-20">
                <p id="something" className="h-40">
                    About section
                </p>
            </div>
        </section>
    )
}
