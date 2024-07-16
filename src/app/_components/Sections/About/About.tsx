import React from "react";

export default function About() {
    return (
        <section
            id="about-section"
            className="relative bg-stone-950
                before:content-[''] before:absolute before:-top-20 before:w-screen before:h-20 before:bg-gradient-to-t before:from-stone-950 before:to-transparent"
        >
            <div className="h-device flex items-center justify-center overflow-hidden px-20">
                About section
            </div>
        </section>
    )
}
