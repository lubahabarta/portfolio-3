import React from "react";
import Stripe from "./Stripe";

export default function Contacts() {
    return (
        <section id="contact-section" data-scroll-section className="h-device">
            <div className="relative w-screen top-[15%] rotate-[4deg]">
                <Stripe label="lubahabarta@gmail.com" href="" scrollSpeed="8" />
            </div>
            <div className="relative w-screen top-[23%] rotate-[-3deg]">
                <Stripe label="+420776275657" href="" scrollSpeed="-8" />
            </div>
            <div className="relative w-screen top-[30%] rotate-[2deg]">
                <Stripe label="jindriskuv@email.cz" href="" scrollSpeed="8" />
            </div>
            <div className="relative w-screen top-[38%] rotate-[-2deg]">
                <Stripe label="+420776275657" href="" scrollSpeed="-8" />
            </div>
        </section>
    );
}
