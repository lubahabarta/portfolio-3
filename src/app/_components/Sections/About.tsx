import React from "react";
import Heading from "./Heading";

export default function About() {
    return (
        <section
            id="about-section"
            data-scroll-section
            className="relative h-device flex items-center justify-center overflow-hidden"
        >
            <Heading title="About" />
            About section
        </section>
    );
}
