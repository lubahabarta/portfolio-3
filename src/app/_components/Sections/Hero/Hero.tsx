"use client";

import React from "react";
import { BottomLeft, BottomRight, TopLeft, TopRight } from "./Frames";

export default function Hero() {
    return (
        <section
            id="home-section"
            className="pb-8"
        >
            <div className="relative h-device flex flex-col justify-end p-12 pb-20 md:p-20 md:pb-28 font-semibold">
                {/* <TopLeft className="absolute top-6 left-6 md:top-12 md:left-12" /> */}
                {/* <TopRight className="absolute top-6 right-6 md:top-12 md:right-12" /> */}
                {/* <BottomLeft className="absolute bottom-6 left-6 md:bottom-12 md:left-12" /> */}
                {/* <BottomRight className="absolute bottom-6 right-6 md:bottom-12 md:right-12" /> */}
                <h1 className="text-[12.5vw] leading-[11.5vw] md:text-[11vw] md:leading-[10vw]">
                    <span className="inline-block">hero</span>{' '}
                    <span className="inline-block">section</span>
                </h1>
                <h1 className="text-[12.5vw] leading-[11.5vw] md:text-[11vw] md:leading-[10vw]">
                    portfolio
                </h1>
            </div>
        </section>
    )
}
