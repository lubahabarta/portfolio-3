'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import Plane from './Plane'

function Scene() {
    return (
        <div className="fixed top-0 left-0 -z-50 w-screen h-screen bg-white overflow-hidden">
            <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 1] }}>
                {/* <ambientLight /> */}
                <directionalLight position={[0, 0, 5]} intensity={5} />
                <Plane />
            </Canvas>
        </div>
    )
}

export default Scene
