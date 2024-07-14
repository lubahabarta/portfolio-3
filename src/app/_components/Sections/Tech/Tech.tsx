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
            className="h-device flex items-center justify-center bg-stone-950"
        >
            <div className="h-device flex items-center justify-center overflow-hidden">
                Tech section
            </div>
        </section>
    )
}
