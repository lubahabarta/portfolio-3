import React from 'react'

function Background() {
    return (
        <div className="fixed top-0 left-0 -z-50 w-screen h-screen bg-white overflow-hidden">
            <svg className="absolute -z-50 w-full h-full">
                <defs>
                    <radialGradient id="firstBlue">
                        <stop offset="5%" stopColor="#38bdf8" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                    </radialGradient>
                    <radialGradient id="secondBlue">
                        <stop offset="5%" stopColor="#0284c7" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                    </radialGradient>
                </defs>

                <circle cx="10%" cy="30%" r="80%" fill="url('#firstBlue')" />
                <circle cx="30%" cy="60%" r="90%" fill="url('#secondBlue')" />
                <circle cx="20%" cy="90%" r="100%" fill="url('#firstBlue')" />
                <circle cx="65%" cy="25%" r="90%" fill="url('#secondBlue')" />
                <circle cx="50%" cy="0%" r="100%" fill="url('#firstBlue')" />
                <circle cx="100%" cy="0%" r="90%" fill="url('#firstBlue')" />
                <circle cx="90%" cy="90%" r="100%" fill="url('#firstBlue')" />
            </svg>

            <svg className="absolute -z-40 w-full h-full opacity-40">
                <filter id="noise">
                    <feTurbulence type="turbulence" baseFrequency="1.3" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
        </div>
    )
}

export default Background
