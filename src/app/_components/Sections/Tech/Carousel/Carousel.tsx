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

const Carousel = ({ setHovering }: { setHovering: (val: boolean) => void }) => {
    const handleLinkOver = () => {
        setHovering(true)
    }
    const handleLinkOut = () => {
        setHovering(false)
    }
    const [emblaRef] = useEmblaCarousel({ dragFree: true })
    return (
        <div
            onMouseOver={handleLinkOver}
            onMouseOut={handleLinkOut}
            className="embla"
            ref={emblaRef}
        >
            <div className="embla__container flex gap-2 w-[100vw]">
                <div className="embla__slide min-w-24"></div>
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
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <div className="embla__slide min-w-24 "></div>
            </div>
        </div>
    )
}

export default Carousel
