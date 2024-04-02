import React, { Fragment } from "react";

export default function Stripe({
    label,
    href,
    scrollSpeed,
}: {
    label: string;
    href: string;
    scrollSpeed: string;
}) {
    function renderLabels() {
        const arr: JSX.Element[] = [];
        for (let i = 0; i < 15; i++) {
            arr.push(<span key={`${label}-${i}`}>{label}</span>);
        }
        return arr;
    }

    return (
        <span
            data-scroll
            data-scroll-position="bottom"
            data-scroll-direction="horizontal"
            data-scroll-speed={scrollSpeed}
            className="relative top-0 left-[-100%] z-10 flex gap-8 flex-nowrap text-2xl md:text-5xl leading-relaxed md:leading-normal hover:opacity-70 duration-300"
        >
            <a href={href} className="flex gap-8 flex-nowrap">
                {renderLabels()}
            </a>
        </span>
    );
}
