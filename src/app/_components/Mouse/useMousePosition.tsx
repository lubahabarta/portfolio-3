import { useEffect, useRef } from 'react'

export default function useMousePosition() {
    const mousePositionRef = useRef({
        x: 0,
        y: 0,
    })

    function getMousePosition(e: MouseEvent) {
        mousePositionRef.current = {
            x: e.clientX,
            y: e.clientY,
        }
    }

    useEffect(() => {
        window.addEventListener('mousemove', getMousePosition)
        return () => window.removeEventListener('mousemove', getMousePosition)
    }, [])

    return { x: mousePositionRef.current.x, y: mousePositionRef.current.y }
}
