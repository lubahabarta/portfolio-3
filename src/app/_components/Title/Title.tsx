'use client'

import React, { useEffect, useState } from 'react'

const titles = ['lubahabarta:)', 'Luba Habarta<3']

export default function Title() {
    const [title, setTitle] = useState('Title')

    useEffect(() => {
        const interval = setInterval(() => {
            const random = Math.round(Math.random())

            setTitle(titles[random])
        }, 500)

        return () => clearInterval(interval)
    }, [])

    return <title>{title}</title>
}
