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
            <div className="bg-white py-24">
                <article className="px-12">
                    <h1 className="text-4xl">Techonology</h1>
                    <p className="max-w-prose mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus, quod quam. Aliquam eaque sint, accusamus
                        aspernatur id deserunt repudiandae dolore excepturi
                        alias. Dolores libero nostrum sed suscipit eum sequi.
                        Natus.
                    </p>
                </article>
                <Carousel setHovering={setHovering} className="mt-8"></Carousel>
            </div>
        </section>
    )
}
