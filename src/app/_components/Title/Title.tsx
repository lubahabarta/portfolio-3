'use client'

import React, { useEffect, useState } from "react"

export default function Title() {
    const [title, setTitle] = useState("Title")

    useEffect(() => {
        const interval = setInterval(() => {
            setTitle(prev => `${prev}1`)
        }, 500)

        return () => clearInterval(interval)
    }, [])

    return (
        <title>{title}</title>
    )
}