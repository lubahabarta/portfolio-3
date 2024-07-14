'use client'

import React from 'react'

export default function Main({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <main>{children}</main>
}
