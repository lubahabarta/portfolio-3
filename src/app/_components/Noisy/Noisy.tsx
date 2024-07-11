export default function Noisy() {
    return (
        <svg className="fixed top-0 w-full h-full z-50 pointer-events-none opacity-20">
            <filter id="noise-filter">
                <feTurbulence type="fractalNoise" baseFrequency="1.3" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise-filter)" />
        </svg>
    )
}