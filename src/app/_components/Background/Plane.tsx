'use client'

import React from 'react'
import * as THREE from 'three'
import { extend, MeshProps, ReactThreeFiber } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

const CustomMaterial = shaderMaterial(
    // Uniforms
    {},
    // Vertex
    `
    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
    // Fragment
    `
    void main() {
        gl_FragColor = vec4(0.0, 0.4, 1.0, 1.0);
    }
    `
)

declare global {
    namespace JSX {
        interface IntrinsicElements {
            customMaterial: ReactThreeFiber.Object3DNode<
                typeof CustomMaterial & { wireframe: boolean },
                typeof CustomMaterial
            >
        }
    }
}
extend({ CustomMaterial })

export default function Plane({ ...props }: MeshProps) {
    return (
        <mesh {...props}>
            <planeGeometry args={[16, 9, 16, 16]} />
            {/* <meshStandardMaterial color="lightblue" /> */}
            <customMaterial wireframe />
        </mesh>
    )
}
