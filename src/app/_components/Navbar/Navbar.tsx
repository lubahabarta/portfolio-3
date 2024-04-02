import { setTheme, Theme } from "@/app/_hooks/useTheme";
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useState } from "react";

const navbar = [
    {
        title: "home",
        href: "#home-section",
    },
    {
        title: "about",
        href: "#about-section",
    },
    {
        title: "technology",
        href: "#technology-section",
    },
    {
        title: "contact",
        href: "#contact-section",
    },
];

export default function Navbar({
    loading,
    scroll,
    setHovering,
}: {
    loading: boolean;
    scroll: LocomotiveScroll | null;
    setHovering: (val: boolean) => void;
}) {
    const [top, setTop] = useState(true);
    const [bottom, setBottom] = useState(false);
    const [lastPos, setLastPost] = useState<"top" | "bottom">("top");
    const [md, setMd] = useState(false);

    if (scroll) {
        scroll.on("scroll", (e) => {
            if (e.scroll.y < 100) {
                setTop(true);
                setLastPost("top");
            } else setTop(false);

            if (e.scroll.y >= e.limit.y - 200) {
                setBottom(true);
                setLastPost("bottom");
            } else setBottom(false);
        });
    }

    function handleLinkClick(e: any, href: string) {
        e.preventDefault();

        const el: any = document.querySelector(href);

        if (scroll && el) {
            scroll.scrollTo(el);
        }
    }

    function handleLinkOver() {
        setHovering(true);
    }

    function handleLinkOut() {
        setHovering(false);
    }

    useEffect(() => {
        setMd(window.innerWidth >= 765);

        function resize(e: any) {
            setMd(e.target.innerWidth >= 765);
        }

        window.addEventListener("resize", resize);

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <nav
            className={`fixed z-20 w-screen ${loading ? "opacity-0" : ""} ${
                top ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
            } ${bottom ? "text-white" : ""}`}
        >
            <div className="absolute left-0 top-0 pointer-events-auto">
                <div
                    className={`absolute duration-500 ease-out ${
                        top
                            ? "left-10 md:left-20 top-[4rem] md:top-[5rem]"
                            : "left-8 md:left-12 top-[2rem] md:top-[5rem]"
                    } font-extralight hover:cursor-pointer`}
                    onMouseOver={handleLinkOver}
                    onMouseOut={handleLinkOut}
                    onClick={() => setTheme(Theme.dark)}
                >
                    CS
                </div>
            </div>
            <ul className="absolute right-0 top-0 flex flex-col items-end pt-20 font-extralight tracking-tighter pointer-events-auto">
                {navbar.map((item, index) => (
                    <li
                        key={`navbar-item-${item.href}`}
                        className="absolute duration-500 ease-out"
                        style={{
                            right: top
                                ? md
                                    ? "5rem"
                                    : "2.5rem"
                                : md
                                ? "3rem"
                                : "2rem",
                            top: top
                                ? `${(md ? 5 : 4) + index * (md ? 3 : 2)}rem`
                                : `${(md ? 5 : 2) + index * (md ? 2 : 1.5)}rem`,
                            transitionDelay:
                                !bottom && lastPos === "top"
                                    ? `${index * 100}ms`
                                    : "",
                        }}
                    >
                        <a
                            href={item.href}
                            data-scroll-to
                            onClick={(e) => handleLinkClick(e, item.href)}
                            onMouseOver={handleLinkOver}
                            onMouseOut={handleLinkOut}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
