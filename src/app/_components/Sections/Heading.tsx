import React from "react";

export default function Heading({ title }: { title: string }) {
    function renderTitles() {
        const titles: JSX.Element[] = [];
        for (let i = 0; i < 30; i++) {
            titles.push(
                <span
                    key={`${title}-${i}`}
                    className={i % 2 === 0 ? "font-bold" : ""}
                >
                    {title}
                </span>
            );
        }
        return titles;
    }

    return (
        <h1
            data-scroll
            data-scroll-position="top"
            data-scroll-direction="horizontal"
            data-scroll-speed="2"
            className="absolute top-0 left-[-50%] flex gap-10 text-5xl uppercase leading-tight border-y-4 border-slate-700"
        >
            {renderTitles()}
        </h1>
    );
}
