'use client'

import React from 'react'

export default function WordWrap({
    children,
    className,
}: {
    children: (JSX.Element | string)[]
    className?: string
}) {
    return (
        <span className={`word-wrap${className ? ` ${className}` : ''}`} aria-hidden>
            {children.map((l, i) => (
                <span key={i} className="flex justify-center items-center">
                    {l}
                </span>
            ))}
        </span>
    )
}
