import React, { useEffect, useRef } from 'react'
import useMousePosition from './useMousePosition'
import gsap from 'gsap'

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

export default function Mouse({
    loading,
    hovering,
}: {
    loading: boolean
    hovering: boolean
}) {
    const size = hovering ? 4.5 : 1.2
    const cursor = useRef<HTMLDivElement | null>(null)
    const mousePosition = useRef({
        x: 0,
        y: 0,
    })
    const delayedMousePosition = useRef({
        x: 0,
        y: 0,
    })

    function getMousePosition(e: MouseEvent) {
        mousePosition.current = {
            x: e.clientX,
            y: e.clientY,
        }
    }

    function moveMouse(x: number, y: number) {
        gsap.set(cursor.current, { x, y, xPercent: -50, yPercent: -50 })
    }

    function animate() {
        const { x, y } = delayedMousePosition.current

        delayedMousePosition.current = {
            x: lerp(x, mousePosition.current.x, 0.1),
            y: lerp(y, mousePosition.current.y, 0.1),
        }

        moveMouse(
            delayedMousePosition.current.x,
            delayedMousePosition.current.y
        )
        window.requestAnimationFrame(animate)
    }

    useEffect(() => {
        animate()
        window.addEventListener('mousemove', getMousePosition)
        return () => window.removeEventListener('mousemove', getMousePosition)
    }, [])

    if (loading) return null

    return (
        <div
            ref={cursor}
            style={{
                width: `${size}rem`,
                height: `${size}rem`,
                transition: 'height 300ms, width 300ms',
            }}
            className={`hidden lg:block fixed z-40 rounded-full bg-white pointer-events-none mix-blend-difference`}
        ></div>
    )
}
