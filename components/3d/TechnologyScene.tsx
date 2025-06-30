"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Line } from "@react-three/drei"
import type * as THREE from "three"

function NetworkNodes() {
  const pointsRef = useRef<THREE.Points>(null!)
  const linesRef = useRef<THREE.Group>(null!)

  const { positions, connections } = useMemo(() => {
    const positions = new Float32Array(50 * 3)
    const connections = []

    for (let i = 0; i < 50; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
    }

    // Create connections between nearby nodes
    for (let i = 0; i < 50; i++) {
      for (let j = i + 1; j < 50; j++) {
        const distance = Math.sqrt(
          Math.pow(positions[i * 3] - positions[j * 3], 2) +
            Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
            Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2),
        )
        if (distance < 5 && Math.random() > 0.7) {
          connections.push([
            [positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]],
            [positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]],
          ])
        }
      }
    }

    return { positions, connections }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#ff6b35" size={0.1} sizeAttenuation={true} depthWrite={false} opacity={0.8} />
      </Points>

      <group ref={linesRef}>
        {connections.map((connection, index) => (
          <Line key={index} points={connection} color="#ff6b35" lineWidth={1} transparent opacity={0.3} />
        ))}
      </group>
    </>
  )
}

function DataFlow() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[Math.sin(i * 0.5) * 8, Math.cos(i * 0.3) * 3, Math.sin(i * 0.7) * 6]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  )
}

export default function TechnologyScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#ff4444" />

      <NetworkNodes />
      <DataFlow />
    </>
  )
}
