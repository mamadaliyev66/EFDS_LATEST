"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import type * as THREE from "three"

function AdvancedSmokeDetector({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!)
  const laserRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
    if (laserRef.current) {
      laserRef.current.rotation.z = state.clock.elapsedTime * 4
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Main detector housing */}
      <mesh>
        <cylinderGeometry args={[0.6, 0.6, 0.2, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Optical chamber */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 16]} />
        <meshStandardMaterial color="#333333" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Laser detection system */}
      <mesh ref={laserRef} position={[0, 0, 0]}>
        <torusGeometry args={[0.3, 0.02, 8, 16]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.8} />
      </mesh>

      {/* Status LED */}
      <mesh position={[0, 0.12, 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.9} />
      </mesh>

      {/* Ionization chamber */}
      <mesh position={[0.3, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.15, 8]} />
        <meshStandardMaterial color="#ffaa00" emissive="#ffaa00" emissiveIntensity={0.3} />
      </mesh>

      <Html position={[0, -0.4, 0]} center>
        <div className="bg-black/80 text-white px-3 py-1 rounded text-sm font-bold">OPTICAL SMOKE DETECTOR</div>
      </Html>
    </group>
  )
}

function AIThermalSensor({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!)
  const heatMapRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.5) * 0.1
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 1.2) * 0.1
    }
    if (heatMapRef.current) {
      heatMapRef.current.material.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 3) * 0.2
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Sensor housing */}
      <mesh>
        <boxGeometry args={[0.8, 0.8, 0.3]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Thermal imaging lens */}
      <mesh position={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
        <meshStandardMaterial color="#000000" metalness={1} roughness={0} />
      </mesh>

      {/* Heat visualization */}
      <mesh ref={heatMapRef} position={[0, 0, 0.25]}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial color="#ff3300" emissive="#ff3300" emissiveIntensity={0.5} transparent opacity={0.7} />
      </mesh>

      {/* AI processing unit */}
      <mesh position={[0.3, 0.3, 0]}>
        <boxGeometry args={[0.2, 0.2, 0.1]} />
        <meshStandardMaterial color="#0088ff" emissive="#0088ff" emissiveIntensity={0.4} />
      </mesh>

      {/* Temperature display */}
      <mesh position={[-0.3, 0, 0.16]}>
        <boxGeometry args={[0.25, 0.15, 0.02]} />
        <meshStandardMaterial color="#000000" emissive="#ff6600" emissiveIntensity={0.3} />
      </mesh>

      <Html position={[0, -0.5, 0]} center>
        <div className="bg-black/80 text-white px-3 py-1 rounded text-sm font-bold">AI THERMAL SENSOR</div>
      </Html>
    </group>
  )
}

function SmartFireAlarm({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!)
  const sirenRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05
    }
    if (sirenRef.current) {
      sirenRef.current.rotation.y = state.clock.elapsedTime * 6
      sirenRef.current.material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 10) * 0.4
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Alarm housing */}
      <mesh>
        <cylinderGeometry args={[0.4, 0.4, 0.6, 8]} />
        <meshStandardMaterial color="#ff0000" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Speaker grille */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.05, 16]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Rotating beacon */}
      <mesh ref={sirenRef} position={[0, 0.35, 0]}>
        <coneGeometry args={[0.15, 0.2, 8]} />
        <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.8} />
      </mesh>

      {/* Control buttons */}
      <mesh position={[0.2, -0.1, 0.35]}>
        <cylinderGeometry args={[0.03, 0.03, 0.02, 8]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, -0.1, 0.35]}>
        <cylinderGeometry args={[0.03, 0.03, 0.02, 8]} />
        <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.2, -0.1, 0.35]}>
        <cylinderGeometry args={[0.03, 0.03, 0.02, 8]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>

      <Html position={[0, -0.4, 0]} center>
        <div className="bg-black/80 text-white px-3 py-1 rounded text-sm font-bold">SMART FIRE ALARM</div>
      </Html>
    </group>
  )
}

function AIControlCenter({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.02
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Main control unit */}
      <mesh>
        <boxGeometry args={[2, 1.5, 0.3]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Main display */}
      <mesh position={[0, 0.2, 0.16]}>
        <boxGeometry args={[1.5, 0.8, 0.02]} />
        <meshStandardMaterial color="#000000" emissive="#00aa00" emissiveIntensity={0.4} />
      </mesh>

      {/* AI processing indicators */}
      <mesh position={[-0.6, -0.4, 0.16]}>
        <cylinderGeometry args={[0.05, 0.05, 0.02, 8]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[-0.4, -0.4, 0.16]}>
        <cylinderGeometry args={[0.05, 0.05, 0.02, 8]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[-0.2, -0.4, 0.16]}>
        <cylinderGeometry args={[0.05, 0.05, 0.02, 8]} />
        <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.8} />
      </mesh>

      {/* Emergency button */}
      <mesh position={[0.6, -0.4, 0.16]}>
        <cylinderGeometry args={[0.08, 0.08, 0.03, 8]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.9} />
      </mesh>

      {/* AI brain visualization */}
      <mesh position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#0088ff" emissive="#0088ff" emissiveIntensity={0.3} transparent opacity={0.7} />
      </mesh>

      <Html position={[0, -0.9, 0]} center>
        <div className="bg-black/80 text-white px-4 py-2 rounded text-base font-bold">AI FIRE CONTROL CENTER</div>
      </Html>
    </group>
  )
}

export default function FireDetectionProductsScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.6} />
      <spotLight position={[0, 10, 0]} intensity={0.8} color="#ffffff" angle={0.4} />

      <AdvancedSmokeDetector position={[-4, 1, 0]} />
      <AIThermalSensor position={[0, 1, 0]} />
      <SmartFireAlarm position={[4, 1, 0]} />
      <AIControlCenter position={[0, -1.5, 0]} />
    </>
  )
}
