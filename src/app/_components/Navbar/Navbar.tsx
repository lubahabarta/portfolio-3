'use client'

import React, { useState } from 'react'
import NavLink from './Link'
import { FaGoogle, FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa6'
import Lenis from 'lenis'

const navbar = [
    {
        title: 'about',
        href: '#about-section',
    },
    {
        title: 'tech stack',
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
    scroll,
    setHovering,
}: {
    loading: boolean
    scroll: Lenis | null
    setHovering: (val: boolean) => void
}) {
    const [opened, setOpened] = useState(false)

    function handleOpen() {
        setOpened((prev) => !prev)
    }

    function handleLinkOver() {
        setHovering(true)
    }

    function handleLinkOut() {
        setHovering(false)
    }

    return (
        <nav>
            <div id="menu-links">
                <a
                    href="#"
                    onMouseOver={handleLinkOver}
                    onMouseOut={handleLinkOut}
                    className="p-2"
                >
                    <FaGoogle />
                </a>
                <a
                    href="#"
                    onMouseOver={handleLinkOver}
                    onMouseOut={handleLinkOut}
                    className="p-2"
                >
                    <FaFacebookF />
                </a>
                <a
                    href="#"
                    onMouseOver={handleLinkOver}
                    onMouseOut={handleLinkOut}
                    className="p-2"
                >
                    <FaInstagram />
                </a>
            </div>
            <ul>
                {navbar.map((link, index) => (
                    <NavLink
                        key={link.href}
                        index={opened ? index : navbar.length - 1 - index}
                        opened={opened}
                        title={link.title}
                        href={link.href}
                    />
                ))}
            </ul>
            <div id="menu-btn">
                <button
                    type="button"
                    onMouseOver={handleLinkOver}
                    onMouseOut={handleLinkOut}
                    onClick={handleOpen}
                    className={`relative flex gap-1 justify-center items-end p-2
                        before:content-[''] before:relative before:h-6 before:w-[1px] before:bg-white ease-out
                        ${
                            opened
                                ? 'before:rotate-45 before:left-[0.56rem] before:delay-100 before:duration-700'
                                : 'before:left-0 before:duration-700'
                        }
                        after:content-[''] after:relative after:h-6 after:w-[1px] after:bg-white ease-out
                        ${
                            opened
                                ? 'after:-rotate-45 after:right-[0.56rem] after:delay-100 after:duration-700'
                                : 'after:right-0 after:duration-700'
                        }
                    `}
                >
                    <div
                        className={`${
                            opened ? 'h-0' : 'h-3 delay-300'
                        } duration-500 ease-out w-[1px] bg-white ml-2`}
                    ></div>
                </button>
            </div>
        </nav>
    )
}
