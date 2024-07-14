'use client'

import React from 'react'

export default function NavLink({
    title,
    href,
}: {
    title: string
    href: string
}) {
    return (
        <li className="">
            <a href={href} rel="nofollow">
                {title}
            </a>
        </li>
    )
}
