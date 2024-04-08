import React, { useState } from 'react'
import CarouselCard from './CarouselCard'
import useEmblaCarousel from 'embla-carousel-react'
import './style.css'

const slides = [
    {
        label: 'React',
        icon: '',
    },
]

const Carousel = ({
    setHovering,
    className,
}: {
    setHovering: (val: boolean) => void
    className: string
}) => {
    const [emblaRef] = useEmblaCarousel({ dragFree: true })

    const handleLinkOver = () => {
        setHovering(true)
    }

    const handleLinkOut = () => {
        setHovering(false)
    }

    return (
        <div
            onMouseOver={handleLinkOver}
            onMouseOut={handleLinkOut}
            className={`embla ${className}`}
            ref={emblaRef}
        >
            <div className="embla__container flex gap-6 w-[100vw]">
                <div className="embla__slide min-w-4 h-40 md:min-w-6 md:h-48"></div>
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <div className="embla__slide min-w-4 h-40 md:min-w-6 md:h-48"></div>
            </div>
        </div>
    )
}

export default Carousel
