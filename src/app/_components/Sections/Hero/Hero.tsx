'use client'

import React from 'react'
import WordWrap from './WordWrap'
import { B, L, W } from '../../Icons/OldEnglishFive'

export default function Hero() {
    return (
        <section id="hero-section">
            <h1>
                <span className="visually-hidden">Luba Web Dev</span>
                <WordWrap>
                    {[<L key="l" className="letter" />, 'u', 'b', 'a']}
                </WordWrap>
                <span className="flex-1" aria-hidden />
                <WordWrap>
                    {['', 'w', 'e', <B key="b" className="letter" />]}
                </WordWrap>
                <WordWrap>
                    {[
                        'd',
                        'e',
                        <W key="w" className="letter" />,
                        <span
                            key="spec"
                            className="animate-spin font-thin"
                            style={{
                                animationDuration: '6s',
                            }}
                        >
                            ❋
                        </span>,
                    ]}
                </WordWrap>
            </h1>
        </section>
    )
}
