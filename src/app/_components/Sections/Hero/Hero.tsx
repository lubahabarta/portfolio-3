'use client'

import React from 'react'
import WordWrap from './WordWrap'

export default function Hero() {
    return (
        <section id="hero-section" className="pb-8">
            <h1 className="flex-1 h-device flex flex-row uppercase text-[8vw]">
                <WordWrap split>aaaa</WordWrap>
                <WordWrap split>bbb</WordWrap>
                <WordWrap split>ccc</WordWrap>
                {/* FIXME: */}
                <WordWrap className="row-span-4">
                    <span className="block h-full">3.0</span>
                </WordWrap>
                {/* <span className="inline-block">aaaa</span>
                <span className="inline-block">bbb</span>
                <span className="inline-block">ccc</span> */}
            </h1>
        </section>
    )
}
