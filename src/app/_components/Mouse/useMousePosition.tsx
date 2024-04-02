import useResized from "@/app/_hooks/useResized";
import { useEffect, useState } from "react";

export default function useMousePosition(loading: boolean) {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        function getMousePosition(e: MouseEvent) {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        }

        if (!loading) {
            window.addEventListener("mousemove", getMousePosition);

            return () =>
                window.removeEventListener("mousemove", getMousePosition);
        }
    }, [loading]);

    return { mousePosition };
}
