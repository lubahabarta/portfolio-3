import { useEffect } from "react";
export enum Theme {
    "light" = "light",
    "dark" = "dark",
    "OS" = "OS",
}

export default function useTheme(theme: Theme) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (
                localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                document.body.classList.add("dark");
            } else {
                document.body.classList.remove("dark");
            }

            localStorage.theme = theme;
        }
    }, [theme]);
}

export function setTheme(theme: Theme) {
    switch (theme) {
        case Theme.OS:
            localStorage.removeItem("theme");
            break;
        case Theme.light:
        case Theme.dark:
            localStorage.theme = theme;
            break;
    }
}
