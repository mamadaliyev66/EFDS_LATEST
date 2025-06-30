"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function Building({ position, height }: { position: [number, number, number]; height: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02
    }
  })

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, height, 2]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      {/* Fire detection sensors on building */}
      <mesh position={[0, height / 2 + 0.2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 8]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.3} />
      </mesh>
    </group>
  )
}

export default function BuildingScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <Building position={[-4, 0, -2]} height={6} />
      <Building position={[0, 0, 0]} height={8} />
      <Building position={[4, 0, 2]} height={5} />
      <Building position={[-2, 0, 4]} height={7} />
      <Building position={[2, 0, -4]} height={4} />

      {/* Ground */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
    </>
  )
}
