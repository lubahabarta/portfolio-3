import React from "react";

function ProgressNumber({
    progress,
    progressLabel,
    position,
}: {
    progress: number;
    progressLabel: number;
    position: number;
}) {
    if (progressLabel > 0) {
        return (
            <span
                className={`absolute top-0 text-3xl font-extralight opacity-0 ${
                    progress >= progressLabel && progressLabel % 10 === 0
                        ? "animate-progress"
                        : progressLabel === progress
                        ? "opacity-100"
                        : "opacity-0"
                }`}
                style={{ left: position }}
            >
                {progressLabel}
            </span>
        );
    }

    return null;
}

export default ProgressNumber;
