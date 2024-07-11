import React from "react";

export function TopLeft({ className }: { className: string }) {
    return (
        <div className={className}>
            <svg height={50} width={50}>
                <line
                    x1={2}
                    y1={50}
                    x2={2}
                    y2={2}
                    className="stroke-white"
                    strokeWidth={2}
                />
                <line
                    x1={1}
                    y1={1}
                    x2={30}
                    y2={1}
                    className="stroke-white"
                    strokeWidth={2}
                />
                <line
                    x1={25}
                    y1={25}
                    x2={49}
                    y2={1}
                    className="stroke-white"
                    strokeWidth={2}
                />
            </svg>
        </div>
    );
}

export function TopRight({ className }: { className: string }) {
    return (
        <div className={className}>
            <svg height={50} width={50}>
                <line
                    x1={1}
                    y1={1}
                    x2={50}
                    y2={1}
                    className="stroke-white"
                    strokeWidth={2}
                />
                <line
                    x1={49}
                    y1={2}
                    x2={49}
                    y2={30}
                    className="stroke-white"
                    strokeWidth={2}
                />
            </svg>
        </div>
    );
}

export function BottomLeft({ className }: { className: string }) {
    return (
        <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-position="top"
            className={className}
        >
            <svg height={50} width={50}>
                <line
                    x1={2}
                    y1={50}
                    x2={2}
                    y2={2}
                    className="stroke-white"
                    strokeWidth={2}
                />
                <line
                    x1={1}
                    y1={49}
                    x2={50}
                    y2={49}
                    className="stroke-white"
                    strokeWidth={2}
                />
                <line
                    x1={2}
                    y1={49}
                    x2={25}
                    y2={25}
                    className="stroke-white"
                    strokeWidth={2}
                />
            </svg>
        </div>
    );
}

export function BottomRight({ className }: { className: string }) {
    return (
        <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-position="top"
            className={className}
        >
            <svg height={50} width={50}>
                <line
                    x1={49}
                    y1={2}
                    x2={49}
                    y2={49}
                    className="stroke-white"
                    strokeWidth={2}
                />
                <line
                    x1={2}
                    y1={49}
                    x2={48}
                    y2={48}
                    className="stroke-white"
                    strokeWidth={2}
                />
                <line
                    x1={50}
                    y1={2}
                    x2={25}
                    y2={25}
                    className="stroke-white"
                    strokeWidth={2}
                />
            </svg>
        </div>
    );
}
