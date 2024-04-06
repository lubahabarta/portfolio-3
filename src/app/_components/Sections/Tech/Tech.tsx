import React from 'react'
import Carousel from './Carousel/Carousel'

export default function Tech({
    setHovering,
}: {
    setHovering: (val: boolean) => void
}) {
    return (
        <section
            id="technology-section"
            data-scroll-section
            className="h-device flex items-center justify-center"
        >
            <Carousel setHovering={setHovering}></Carousel>
        </section>
    )
}
