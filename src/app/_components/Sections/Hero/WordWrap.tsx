'use client'

import React from 'react'

export default function WordWrap({
    children,
    className,
    split = false,
}: {
    children: string | JSX.Element
    className?: string
    split?: boolean
}) {
    return (
        <span className={`word-wrap${className ? className : ''}`}>
            {split ? typeof children === "string" &&
                children.split('').map((l, i) => (
                    <span key={i} className="flex justify-center items-center">
                        {l}
                    </span>
                ))
             : (
                children
            )}
        </span>
    )
}
