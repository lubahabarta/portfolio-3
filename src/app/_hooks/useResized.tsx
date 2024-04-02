import { useState, useEffect } from "react";

export default function useResized() {
    const [windowResized, setWindowResized] = useState(0);

    useEffect(() => {
        const resized = () => setWindowResized((prev) => prev + 1);

        document.addEventListener("resize", resized);
        return () => document.removeEventListener("resize", resized);
    }, []);

    return windowResized;
}
