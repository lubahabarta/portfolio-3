import React from "react";
import Stripe from "./Stripe";

export default function Contacts() {
    return (
        <section id="contact-section" data-scroll-section className="h-device">
            <div className="relative w-screen top-[10dvh] rotate-[4deg]">
                <Stripe label="lubahabarta@gmail.com" href="" scrollSpeed="8" />
            </div>
            <div className="relative w-screen top-[17dvh] rotate-[-3deg]">
                <Stripe label="jindriskuv@email.cz" href="" scrollSpeed="-8" />
            </div>
            <div className="relative w-screen top-[24dvh] rotate-[2deg]">
                <Stripe label="+420776275657" href="" scrollSpeed="8" />
            </div>
            <div className="relative w-screen top-[30dvh] rotate-[-2deg]">
                <Stripe label="+420776275657" href="" scrollSpeed="8" />
            </div>
        </section>
    );
}
