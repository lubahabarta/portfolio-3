'use client'

import React from 'react'
import NavLink from './Link'

const navbar = [
    {
        title: 'about',
        href: '#about-section',
    },
    {
        title: 'technology',
        href: '#technology-section',
    },
    {
        title: 'projects',
        href: '#projects-section',
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
            <div id="menu-links">top/left</div>
            <ul>
                {navbar.map((link) => (
                    <NavLink
                        key={link.href}
                        title={link.title}
                        href={link.href}
                    />
                ))}
            </ul>
            <div id="menu-btn">
                <button type="button">x</button>
            </div>
        </nav>
    )
}
