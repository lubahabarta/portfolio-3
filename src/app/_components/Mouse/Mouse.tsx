import React from "react";
import useMousePosition from "./useMousePosition";
import { motion } from "framer-motion";

export default function Mouse({
    loading,
    hovering,
}: {
    loading: boolean;
    hovering: boolean;
}) {
    const { mousePosition } = useMousePosition(loading);

    const variants = {
        default: {
            x: mousePosition.x - (hovering ? 30 : 3),
            y: mousePosition.y - (hovering ? 30 : 3),
        },
        hover: {
            opacity: hovering ? 1 : 0,
            width: hovering ? 60 : 6,
            height: hovering ? 60 : 6,
        },
    };

    if (loading) return null;

    return (
        <motion.div
            id="cursor"
            className="hidden lg:block fixed top-0 left-0 z-40 rounded-full bg-slate-700 opacity-0 pointer-events-none"
            variants={variants}
            animate={["default", "hover"]}
        ></motion.div>
    );
}
