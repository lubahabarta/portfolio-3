'use client'

import React from 'react'

export default function WordWrap({
    children,
    className,
    split = false,
}: {
    children: string
    className?: string
    split?: boolean
}) {
    return (
        <span className={`word-wrap ${className}`}>
            {split ? (
                children.split('').map((l, i) => (
                    <span key={i} className="block">
                        {l}
                    </span>
                ))
            ) : (
                <span>{children}</span>
            )}
        </span>
    )
}
