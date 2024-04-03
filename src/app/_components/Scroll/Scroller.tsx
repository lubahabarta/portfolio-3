"use client";

import React from "react";
import "./scroller.css";

export default function Scroller({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div id="scroll-container" data-scroll-container className="overflow-hidden">
            {children}
        </div>
    );
}
