'use client'

import React from 'react'

export default function NavLink({
    title,
    href,
    index,
    opened,
}: {
    title: string
    href: string
    index: number
    opened: boolean
}) {
    return (
        <li>
            <a
                href={href}
                rel="nofollow"
                className={`${opened ? 'opened' : ''}`}
                style={{
                    transitionDelay: `${index * 150}ms`,
                }}
            >
                {title}
            </a>
        </li>
    )
}
