import { useEffect, useState } from "react";

export default function useScroll() {
    const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);

    useEffect(() => {
        const scrollEl = document.querySelector(
            "#scroll-container"
        ) as HTMLDivElement;

        if (scrollEl) {
            import("locomotive-scroll").then((locomotiveModule) => {
                const ls = new locomotiveModule.default({
                    el: scrollEl,
                    initPosition: {
                        x: 0,
                        y: 0,
                    },
                    smooth: true,
                    smartphone: {
                        smooth: true,
                    },
                    multiplier: 1.3,
                    class: "on-screen",
                });

                ls.init();
                ls.start();
                ls.update();

                ls.scrollTo("top");

                setScroll(ls);
            });
        }
    }, []);

    return scroll;
}
