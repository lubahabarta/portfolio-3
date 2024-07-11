'use client'

import { useEffect, useState } from 'react'
import Loader from './_components/Loader/Loader'
import Navbar from './_components/Navbar/Navbar'
import Hero from './_components/Sections/Hero/Hero'
import About from './_components/Sections/About'
import Footer from './_components/Sections/Footer/Footer'
import Mouse from './_components/Mouse/Mouse'
import Tech from './_components/Sections/Tech/Tech'
import Scroller from './_components/Scroller/Scroller'
import dynamic from 'next/dynamic'
import Noisy from './_components/Noisy/Noisy'
import Title from './_components/Title/Title'
import useTheme, { Theme } from './_hooks/useTheme'

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

    const handleSetLoading = (val: boolean) => setLoading(val)
    const handleSetHovering = (val: boolean) => setHovering(val)

    useTheme(Theme.light)

    return (
        <>
            {/* <Title /> */}
            <Noisy />
            <Loader loading={loading} setLoading={handleSetLoading} />
            <Scene />
            <Mouse loading={loading} hovering={hovering} />
            <Navbar
                loading={loading}
                setHovering={handleSetHovering}
            />
            <Scroller>
                <main>
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
