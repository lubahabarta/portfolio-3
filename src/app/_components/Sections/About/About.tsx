'use client'

import gsap from 'gsap'
import React, { useEffect } from 'react'
import Frame from './Frame'

export default function About() {
    useEffect(() => {
        gsap.to('#frame', {
            scrollTrigger: {
                trigger: '#about-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                // markers: true,
            },
            paused: true,
            rotate: '12deg',
            ease: 'none',
        })
    }, [])

    return (
        <section
            id="about-section"
            className="relative h-device bg-stone-950
                before:content-[''] before:absolute before:-top-20 before:w-screen before:h-20 before:bg-gradient-to-t before:from-stone-950 before:to-transparent"
        >
            <article className="h-auto lg:h-device flex flex-col lg:flex-row justify-center items-center px-20">
                <Frame id="frame" className="block flex-1 h-5/6 -rotate-12" />
                <div className="flex-1 flex flex-col items-center">
                    <p className="text-[2vw] uppercase text-justify w-[35vw]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita fugit quasi quod quae optio repellendus
                        necessitatibus corrupti officiis.
                    </p>
                    <p className="text-[2vw] uppercase text-justify w-[35vw] mt-[2vw]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita fugit quasi quod quae optio repellendus
                        necessitatibus corrupti officiis.
                    </p>
                </div>
            </article>
        </section>
    )
}
