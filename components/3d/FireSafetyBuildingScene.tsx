"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import type * as THREE from "three"

function BuildingWithFireSafety({
  position,
  height,
  hasAlert,
}: { position: [number, number, number]; height: number; hasAlert?: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const alertRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.01
    }
    if (alertRef.current && hasAlert) {
      alertRef.current.material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 8) * 0.3
    }
  })

  return (
    <group position={position}>
      {/* Building */}
      <mesh ref={meshRef}>
        <boxGeometry args={[2, height, 2]} />
        <meshStandardMaterial color="#555555" />
      </mesh>

      {/* Fire detection sensors on each floor */}
      {Array.from({ length: Math.floor(height / 2) }).map((_, i) => (
        <group key={i} position={[0, -height / 2 + (i + 1) * 2, 0]}>
          {/* Smoke detector */}
          <mesh position={[0.8, 0, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.03, 8]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0.8, 0, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.02, 8]} />
            <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
          </mesh>

          {/* Heat sensor */}
          <mesh position={[-0.8, 0, 0]}>
            <boxGeometry args={[0.1, 0.1, 0.05]} />
            <meshStandardMaterial color="#333333" />
          </mesh>
          <mesh position={[-0.8, 0, 0.03]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial color="#ff6600" emissive="#ff6600" emissiveIntensity={0.4} />
          </mesh>
        </group>
      ))}

      {/* Fire alarm system on roof */}
      <mesh position={[0, height / 2 + 0.2, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 8]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>

      {/* Alert beacon */}
      {hasAlert && (
        <mesh ref={alertRef} position={[0, height / 2 + 0.3, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.8} />
        </mesh>
      )}

      {/* Building label */}
      <Html position={[0, -height / 2 - 0.5, 0]} center>
        <div className="bg-black/70 text-white px-2 py-1 rounded text-xs">
          {hasAlert ? "FIRE DETECTED" : "PROTECTED"}
        </div>
      </Html>
    </group>
  )
}

function FireTruck({ position }: { position: [number, number, number] }) {
  const truckRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (truckRef.current) {
      truckRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <group ref={truckRef} position={position}>
      {/* Truck body */}
      <mesh>
        <boxGeometry args={[1.5, 0.8, 0.6]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>

      {/* Emergency lights */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 8]} />
        <meshStandardMaterial color="#0000ff" emissive="#0000ff" emissiveIntensity={0.8} />
      </mesh>

      {/* Wheels */}
      <mesh position={[-0.5, -0.5, 0.4]}>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 8]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      <mesh position={[0.5, -0.5, 0.4]}>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 8]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      <mesh position={[-0.5, -0.5, -0.4]}>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 8]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      <mesh position={[0.5, -0.5, -0.4]}>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 8]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
    </group>
  )
}

export default function FireSafetyBuildingScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#ff4444" />

      <BuildingWithFireSafety position={[-6, 0, -2]} height={6} />
      <BuildingWithFireSafety position={[0, 0, 0]} height={8} hasAlert={true} />
      <BuildingWithFireSafety position={[6, 0, 2]} height={5} />
      <BuildingWithFireSafety position={[-3, 0, 4]} height={7} />
      <BuildingWithFireSafety position={[3, 0, -4]} height={4} />

      {/* Emergency response */}
      <FireTruck position={[0, -3, 3]} />

      {/* Ground */}
      <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[25, 25]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
    </>
  )
}
