'use client'

import React from 'react'

export default function Main({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <main className="overflow-x-clip">{children}</main>
}
