import { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import Lenis from 'lenis'
const lenisPromise = import('lenis')

export default function useScroll() {
    const [scroll, setScroll] = useState<Lenis | null>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        lenisPromise.then((module) => {
            const lenis = new module.default()
            lenis.on('scroll', (e: Lenis) => {
                setScroll(e)
            })

            lenis.on('scroll', ScrollTrigger.update)

            gsap.ticker.add((time) => {
                lenis.raf(time * 1000)
            })

            gsap.ticker.lagSmoothing(0)
        })
    }, [])

    return scroll
}
