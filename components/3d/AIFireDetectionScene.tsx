"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Html } from "@react-three/drei"
import type * as THREE from "three"
import { useTheme } from "next-themes"

function FireParticles() {
  const ref = useRef<THREE.Points>(null!)
  const { theme } = useTheme()

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1500 * 3)
    for (let i = 0; i < 1500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = Math.random() * 8 - 2
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        // Fire rising effect
        positions[i + 1] += 0.02
        if (positions[i + 1] > 6) {
          positions[i + 1] = -2
        }
        // Flickering effect
        positions[i] += Math.sin(state.clock.elapsedTime * 5 + positions[i + 2]) * 0.01
        positions[i + 2] += Math.cos(state.clock.elapsedTime * 3 + positions[i]) * 0.01
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={theme === "dark" ? "#ff4500" : "#ff6b35"}
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

function SmokeParticles() {
  const ref = useRef<THREE.Points>(null!)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(800 * 3)
    for (let i = 0; i < 800; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = Math.random() * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += 0.015
        if (positions[i + 1] > 10) {
          positions[i + 1] = 0
        }
        positions[i] += Math.sin(state.clock.elapsedTime * 2 + positions[i + 2]) * 0.005
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#666666" size={0.12} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
    </Points>
  )
}

function AIFireDetector({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const aiRingRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 3) * 0.05
    }
    if (aiRingRef.current) {
      aiRingRef.current.rotation.z = state.clock.elapsedTime * 2
    }
  })

  return (
    <group position={position}>
      {/* Main detector body */}
      <mesh ref={meshRef}>
        <cylinderGeometry args={[0.4, 0.4, 0.15, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* AI processing indicator */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 8]} />
        <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.5} />
      </mesh>

      {/* AI ring indicator */}
      <mesh ref={aiRingRef} position={[0, 0.1, 0]}>
        <torusGeometry args={[0.3, 0.02, 8, 16]} />
        <meshStandardMaterial color="#0088ff" emissive="#0088ff" emissiveIntensity={0.6} />
      </mesh>

      {/* Status LED */}
      <mesh position={[0, 0.08, 0]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.8} />
      </mesh>

      {/* AI Label */}
      <Html position={[0, -0.3, 0]} center>
        <div className="bg-black/70 text-white px-2 py-1 rounded text-xs font-bold">AI DETECTOR</div>
      </Html>
    </group>
  )
}

function SmartFireSensor({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const scanRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.05
    }
    if (scanRef.current) {
      scanRef.current.rotation.y = state.clock.elapsedTime * 4
      scanRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 6) * 0.2)
    }
  })

  return (
    <group position={position}>
      {/* Sensor housing */}
      <mesh ref={meshRef}>
        <boxGeometry args={[0.3, 0.3, 0.15]} />
        <meshStandardMaterial color="#333333" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Heat sensor */}
      <mesh position={[0, 0, 0.08]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#ff6600" emissive="#ff6600" emissiveIntensity={0.4} />
      </mesh>

      {/* Scanning beam */}
      <mesh ref={scanRef} position={[0, 0, 0.1]}>
        <coneGeometry args={[0.05, 0.3, 8]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.3} transparent opacity={0.6} />
      </mesh>

      {/* Sensor Label */}
      <Html position={[0, -0.25, 0]} center>
        <div className="bg-black/70 text-white px-2 py-1 rounded text-xs font-bold">HEAT SENSOR</div>
      </Html>
    </group>
  )
}

function AIControlPanel({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.02
    }
  })

  return (
    <group position={position}>
      {/* Main panel */}
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 1, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* AI Display Screen */}
      <mesh position={[0, 0.1, 0.06]}>
        <boxGeometry args={[0.8, 0.5, 0.02]} />
        <meshStandardMaterial color="#000000" emissive="#00ff00" emissiveIntensity={0.3} />
      </mesh>

      {/* Status indicators */}
      <mesh position={[-0.5, -0.2, 0.06]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 8]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.7} />
      </mesh>

      <mesh position={[-0.3, -0.2, 0.06]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 8]} />
        <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.7} />
      </mesh>

      <mesh position={[-0.1, -0.2, 0.06]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 8]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.7} />
      </mesh>

      {/* AI Processing Unit */}
      <mesh position={[0.4, -0.1, 0.06]}>
        <boxGeometry args={[0.3, 0.2, 0.04]} />
        <meshStandardMaterial color="#0088ff" emissive="#0088ff" emissiveIntensity={0.4} />
      </mesh>

      {/* Panel Label */}
      <Html position={[0, -0.6, 0]} center>
        <div className="bg-black/70 text-white px-3 py-1 rounded text-sm font-bold">AI CONTROL PANEL</div>
      </Html>
    </group>
  )
}

export default function AIFireDetectionScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#ff4444" />
      <spotLight position={[0, 15, 0]} intensity={0.8} color="#ffaa00" angle={0.3} />

      <FireParticles />
      <SmokeParticles />

      {/* AI Fire Detectors */}
      <AIFireDetector position={[-4, 2, -2]} />
      <AIFireDetector position={[4, 2, 2]} />
      <AIFireDetector position={[0, 3, -4]} />

      {/* Smart Fire Sensors */}
      <SmartFireSensor position={[-2, -1, 3]} />
      <SmartFireSensor position={[3, -1, -1]} />
      <SmartFireSensor position={[-3, 1, 1]} />

      {/* AI Control Panel */}
      <AIControlPanel position={[0, -2, 0]} />
    </>
  )
}
