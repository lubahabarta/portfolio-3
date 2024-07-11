import React from 'react'

const navbar = [
    {
        title: 'home',
        href: '#home-section',
    },
    {
        title: 'about',
        href: '#about-section',
    },
    {
        title: 'technology',
        href: '#technology-section',
    },
    {
        title: 'contact',
        href: '#footer',
    },
]

export default function Navbar({
    loading,
    setHovering,
}: {
    loading: boolean
    setHovering: (val: boolean) => void
}) {
    function handleLinkOver() {
        setHovering(true)
    }

    function handleLinkOut() {
        setHovering(false)
    }

    return (
        <nav>
            <div>top/left</div>
            <ul>
                {[0, 1, 2, 3].map(link => (
                    <li key={link}>fdsa</li>
                ))}
            </ul>
            <div>bottom/right</div>
        </nav>
    )
}
