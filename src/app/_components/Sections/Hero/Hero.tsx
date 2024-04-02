"use client";

import React from "react";
import { BottomLeft, BottomRight, TopLeft, TopRight } from "./Frames";

export default function Hero() {
    return (
        <section
            data-scroll-section
            id="home-section"
            className="relative h-device flex flex-col justify-end p-12 pb-20 md:p-20 md:pb-28 font-semibold"
        >
            <TopLeft className="absolute top-6 left-6 md:top-12 md:left-12" />
            <TopRight className="absolute top-6 right-6 md:top-12 md:right-12" />
            <BottomLeft className="absolute bottom-6 left-6 md:bottom-12 md:left-12" />
            <BottomRight className="absolute bottom-6 right-6 md:bottom-12 md:right-12" />
            <h1 className="text-[12.5vw] leading-[11.5vw] md:text-[11vw] md:leading-[10vw]">
                <span
                    data-scroll
                    data-scroll-speed="10"
                    data-scroll-position="top"
                    className="inline-block text-slate-700"
                >
                    hero
                </span>{" "}
                <span
                    data-scroll
                    data-scroll-speed="7"
                    data-scroll-position="top"
                    className="inline-block text-slate-600"
                >
                    section
                </span>
            </h1>
            <h1
                data-scroll
                data-scroll-speed="4"
                data-scroll-position="top"
                className="text-[12.5vw] leading-[11.5vw] md:text-[11vw] md:leading-[10vw] text-slate-700"
            >
                portfolio
            </h1>
        </section>
    );
}
