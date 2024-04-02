import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            height: {
                device: "100dvh",
            },
            animation: {
                progress: "progress 1s ease-in",
            },
            keyframes: {
                progress: {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
            },
        },
    },
    darkMode: "selector",
    plugins: [],
};
export default config;
