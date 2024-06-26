'use client'

import { useState } from 'react'
import Loader from './_components/Loader/Loader'
import Navbar from './_components/Navbar/Navbar'
import Hero from './_components/Sections/Hero/Hero'
import About from './_components/Sections/About'
import Footer from './_components/Sections/Footer/Footer'
import Mouse from './_components/Mouse/Mouse'
import Tech from './_components/Sections/Tech/Tech'
import Scroller from './_components/Scroll/Scroller'
import useScroll from './_components/Scroll/useScroll'
import useTheme, { Theme } from './_hooks/useTheme'
import dynamic from 'next/dynamic'

const Scene = dynamic(
    () =>
        import('./_components/Background/Scene').then(
            (module) => module.default
        ),
    {
        ssr: false,
    }
)

export default function Page() {
    const [loading, setLoading] = useState(false)
    const [hovering, setHovering] = useState(false)

    const scroll = useScroll()

    if (scroll) {
        loading ? scroll.stop() : scroll.start()
    }

    const handleSetLoading = (val: boolean) => setLoading(val)
    const handleSetHovering = (val: boolean) => setHovering(val)

    useTheme(Theme.light)

    return (
        <>
            <Loader loading={loading} setLoading={handleSetLoading} />
            <Scene />
            <Mouse loading={loading} hovering={hovering} />
            <Scroller>
                <Navbar
                    loading={loading}
                    scroll={scroll}
                    setHovering={handleSetHovering}
                />
                <main className={`${loading ? 'opacity-0' : ''}`}>
                    <Hero />
                    <About />
                    <Tech setHovering={handleSetHovering} />
                    {/* <Contacts /> */}
                </main>
                <Footer />
            </Scroller>
        </>
    )
}
