import React from "react";

function Background() {
    return (
        <div className="fixed top-0 left-0 -z-50 w-screen h-screen bg-white overflow-hidden">
            <svg className="absolute -z-50 w-full h-full">
                <defs>
                    <radialGradient id="gradientYellow">
                        <stop offset="5%" stopColor="#fef08a" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                    </radialGradient>
                    <radialGradient id="gradientGreen">
                        <stop offset="5%" stopColor="#bef264" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                    </radialGradient>
                    <radialGradient id="gradientRed">
                        <stop offset="5%" stopColor="#f87171" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                    </radialGradient>
                </defs>

                <circle
                    cx="65%"
                    cy="60%"
                    r="80%"
                    fill="url('#gradientGreen')"
                />
                <circle cx="50%" cy="60%" r="70%" fill="url('#gradientRed')" />
                <circle
                    cx="60%"
                    cy="30%"
                    r="70%"
                    fill="url('#gradientYellow')"
                />
            </svg>

            <svg className="absolute -z-40 w-full h-full opacity-40">
                <filter id="noise">
                    <feTurbulence type="turbulence" baseFrequency="1.3" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
        </div>
    );
}

export default Background;
