'use client'

import React, { useRef } from 'react'
import * as THREE from 'three'
import { extend, MeshProps, ReactThreeFiber, useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

const CustomMaterial = shaderMaterial(
    // Uniforms
    {
        uTime: 0,
    },
    // Vertex
    `
    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
        vUv = uv;
        vPosition = position;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
    // Fragment
    `
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vPosition;

    float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

    float noise(vec3 p) {
        vec3 a = floor(p);
        vec3 d = p - a;
        d = d * d * (3.0 - 2.0 * d);

        vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
        vec4 k1 = perm(b.xyxy);
        vec4 k2 = perm(k1.xyxy + b.zzww);

        vec4 c = k2 + a.zzzz;
        vec4 k3 = perm(c);
        vec4 k4 = perm(c + 1.0);

        vec4 o1 = fract(k3 * (1.0 / 41.0));
        vec4 o2 = fract(k4 * (1.0 / 41.0));

        vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
        vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

        return o4.y * d.y + o4.x * (1.0 - d.y);
    }

    float lines(vec2 uv, float offset) {
        return smoothstep(
            0., .5 + offset * .5,
            abs(.5 * (sin(uv.x * 1.5) + offset * 2.))
        );
    }

    void main() {
        // float n = noise(vPosition + uTime);

        vec2 baseUV = vPosition.xy;
        float basePattern = lines(baseUV, .5);

        gl_FragColor = vec4(vec3(basePattern), 1.);
    }
    `
)

declare global {
    namespace JSX {
        interface IntrinsicElements {
            customMaterial: ReactThreeFiber.Object3DNode<
                typeof CustomMaterial & { wireframe: boolean, uTime: number },
                typeof CustomMaterial
            >
        }
    }
}
extend({ CustomMaterial })

export default function Plane({ ...props }: MeshProps) {
    const ref = useRef<any | null>(null)
    useFrame(({clock}) => {
        if (ref.current) {
            ref.current.uTime = clock.getElapsedTime()
        }
    })

    return (
        <mesh {...props}>
            <planeGeometry args={[16, 9, 16, 16]} />
            <customMaterial ref={ref} />
        </mesh>
    )
}
