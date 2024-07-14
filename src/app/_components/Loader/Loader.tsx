import React, { useCallback, useRef } from 'react'
import { useEffect, useState } from 'react'
import ProgressNumber from './ProgressNumber'

export default function Loader({
    loading,
    setLoading,
}: {
    loading: boolean
    setLoading: (val: boolean) => void
}) {
    const [progress, setProgress] = useState(0)

    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        setProgress(0)
        function updateProgress(prg: number) {
            if (prg < 100) {
                setProgress(prg + 1)
                setTimeout(() => updateProgress(prg + 1), 15)
            } else {
                setTimeout(() => setLoading(false), 1000)
            }
        }
        if (loading) {
            updateProgress(0)
        }
    }, [loading, setLoading])

    const renderProgress = useCallback(() => {
        const renderArr: JSX.Element[] = []
        if (ref.current) {
            const width = ref.current.offsetWidth
            const proggressWidth = Math.floor(width / 100)
            for (let i = 0; i <= 100; i++) {
                renderArr.push(
                    <ProgressNumber
                        key={`progress-${i}`}
                        progress={progress}
                        progressLabel={i}
                        position={proggressWidth * i}
                    />
                )
            }
        }

        return renderArr
    }, [progress])

    if (loading) {
        return (
            <aside className="fixed top-0 left-0 z-40 h-device w-screen flex items-center justify-center bg-stone-950">
                <div ref={ref} className="w-[85%] relative flex">
                    {loading && renderProgress()}
                </div>
            </aside>
        )
    }
    return null
}
