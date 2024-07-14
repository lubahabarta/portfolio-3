'use client'

import React from 'react'
import WordWrap from './WordWrap'

export default function Hero() {
    return (
        <section id="hero-section" className="pb-8">
            {/* FIXME: height */}
            <h1 className="flex-1 h-device flex flex-row uppercase text-[8vw]">
                <WordWrap split>Luba</WordWrap>
                <WordWrap split> Web</WordWrap>
                <WordWrap split>Dev</WordWrap>
                <WordWrap>
                    <span className="h-1/4 flex justify-center items-center row-span-4 self-end">
                        <span className='text-[3vw]'>v</span>3.0
                    </span>
                </WordWrap>
            </h1>
        </section>
    )
}
