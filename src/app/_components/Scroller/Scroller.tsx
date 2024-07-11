"use client";

import React, { useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from "gsap/src/ScrollTrigger";
const lenisPromise = import('lenis');

export default function Scroller({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        lenisPromise.then((module) => {
            const lenis = new module.default()
            lenis.on('scroll', (e: any) => {
                console.log(e)
            })

            lenis.on('scroll', ScrollTrigger.update)

            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            })
            
            gsap.ticker.lagSmoothing(0);

            function raf(time: number) {
                lenis.raf(time)
                requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)
        })
    }, [])

    return (
        <div className="overflow-x-clip">
            {children}
        </div>
    );
}
