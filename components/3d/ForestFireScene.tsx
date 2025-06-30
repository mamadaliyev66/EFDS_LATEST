"use client"

import React from "react"

import { useRef, useMemo, useCallback } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial, Html } from "@react-three/drei"
import type * as THREE from "three"
import { useTheme } from "next-themes"

function ForestTrees() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.01
    }
  })

  const trees = useMemo(() => {
    const treePositions = []
    // Reduced number of trees for better performance
    for (let i = 0; i < 15; i++) {
      treePositions.push([
        (Math.random() - 0.5) * 40,
        0,
        (Math.random() - 0.5) * 40,
        Math.random() * 0.3 + 0.7, // scale
      ])
    }
    return treePositions
  }, [])

  return (
    <group ref={groupRef}>
      {trees.map((position, index) => (
        <group
          key={index}
          position={[position[0], position[1], position[2]] as [number, number, number]}
          scale={position[3]}
        >
          {/* Simplified tree trunk */}
          <mesh position={[0, 1.5, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.3, 3, 6]} />
            <meshLambertMaterial color="#4a3728" />
          </mesh>

          {/* Simplified tree foliage */}
          <mesh position={[0, 3.5, 0]} castShadow>
            <coneGeometry args={[1.5, 3, 6]} />
            <meshLambertMaterial color="#1a4d1a" />
          </mesh>

          <mesh position={[0, 4.5, 0]} castShadow>
            <coneGeometry args={[1, 2, 6]} />
            <meshLambertMaterial color="#2d5016" />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function OptimizedFireParticles() {
  const ref = useRef<THREE.Points>(null!)
  const { theme } = useTheme()

  const particlesPosition = useMemo(() => {
    // Reduced particle count for better performance
    const positions = new Float32Array(800 * 3)
    for (let i = 0; i < 800; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = Math.random() * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current && ref.current.geometry.attributes.position) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += 0.02
        if (positions[i + 1] > 8) {
          positions[i + 1] = 0
        }
        positions[i] += Math.sin(state.clock.elapsedTime * 2 + positions[i + 2]) * 0.01
        positions[i + 2] += Math.cos(state.clock.elapsedTime * 1.5 + positions[i]) * 0.01
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={true}>
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

function OptimizedThermalDrone({ position }: { position: [number, number, number] }) {
  const droneRef = useRef<THREE.Group>(null!)
  const propellerRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (droneRef.current) {
      droneRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.3
      droneRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.4) * 2
      droneRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.1
    }

    if (propellerRef.current) {
      propellerRef.current.rotation.y = state.clock.elapsedTime * 15
    }
  })

  return (
    <group ref={droneRef} position={position}>
      {/* Simplified drone body */}
      <mesh castShadow>
        <boxGeometry args={[1, 0.3, 1]} />
        <meshLambertMaterial color="#2a2a2a" />
      </mesh>

      {/* Thermal camera */}
      <mesh position={[0, -0.25, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.3, 8]} />
        <meshLambertMaterial color="#000000" />
      </mesh>

      {/* Thermal lens */}
      <mesh position={[0, -0.4, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshLambertMaterial color="#ff3300" emissive="#ff3300" emissiveIntensity={0.3} />
      </mesh>

      {/* Single propeller for performance */}
      <mesh ref={propellerRef} position={[0, 0.2, 0]}>
        <boxGeometry args={[0.4, 0.02, 0.05]} />
        <meshLambertMaterial color="#666666" />
      </mesh>

      {/* Status light */}
      <mesh position={[0.3, 0.2, 0]}>
        <sphereGeometry args={[0.03, 6, 6]} />
        <meshLambertMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </mesh>

      <Html position={[0, -0.8, 0]} center distanceFactor={10}>
        <div className="bg-black/80 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">🔥 ДРОН</div>
      </Html>
    </group>
  )
}

function OptimizedInfraredSensor({ position }: { position: [number, number, number] }) {
  const sensorRef = useRef<THREE.Group>(null!)
  const scanRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (sensorRef.current) {
      sensorRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3
    }
    if (scanRef.current) {
      scanRef.current.rotation.y = state.clock.elapsedTime * 3
      scanRef.current.material.opacity = 0.2 + Math.sin(state.clock.elapsedTime * 4) * 0.1
    }
  })

  return (
    <group ref={sensorRef} position={position}>
      {/* Sensor pole */}
      <mesh position={[0, 2.5, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 5, 6]} />
        <meshLambertMaterial color="#555555" />
      </mesh>

      {/* Sensor housing */}
      <mesh position={[0, 5.2, 0]} castShadow>
        <boxGeometry args={[0.4, 0.3, 0.4]} />
        <meshLambertMaterial color="#2a2a2a" />
      </mesh>

      {/* Infrared lens */}
      <mesh position={[0, 5.2, 0.21]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 8]} />
        <meshLambertMaterial color="#ff3300" emissive="#ff3300" emissiveIntensity={0.4} />
      </mesh>

      {/* Simplified detection beam */}
      <mesh ref={scanRef} position={[0, 5.2, 0.3]}>
        <coneGeometry args={[2, 8, 6]} />
        <meshLambertMaterial color="#ff6600" emissive="#ff6600" emissiveIntensity={0.2} transparent opacity={0.2} />
      </mesh>

      <Html position={[0, 1, 0]} center distanceFactor={10}>
        <div className="bg-black/80 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">🌡️ ДАТЧИК</div>
      </Html>
    </group>
  )
}

function OptimizedSmokeParticles() {
  const ref = useRef<THREE.Points>(null!)

  const particlesPosition = useMemo(() => {
    // Reduced particle count
    const positions = new Float32Array(400 * 3)
    for (let i = 0; i < 400; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = Math.random() * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current && ref.current.geometry.attributes.position) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += 0.015
        if (positions[i + 1] > 10) {
          positions[i + 1] = 0
        }
        positions[i] += Math.sin(state.clock.elapsedTime + positions[i + 2]) * 0.005
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={true}>
      <PointMaterial transparent color="#888888" size={0.15} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
    </Points>
  )
}

// WebGL Context Recovery Component
function WebGLContextRecovery() {
  const { gl } = useThree()

  const handleContextLost = useCallback((event: Event) => {
    event.preventDefault()
    console.warn("WebGL context lost. Attempting recovery...")
  }, [])

  const handleContextRestored = useCallback(() => {
    console.log("WebGL context restored successfully")
  }, [])

  // Set up context loss/restore handlers
  React.useEffect(() => {
    const canvas = gl.domElement
    canvas.addEventListener("webglcontextlost", handleContextLost)
    canvas.addEventListener("webglcontextrestored", handleContextRestored)

    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost)
      canvas.removeEventListener("webglcontextrestored", handleContextRestored)
    }
  }, [gl, handleContextLost, handleContextRestored])

  return null
}

export default function ForestFireScene() {
  return (
    <>
      <WebGLContextRecovery />

      {/* Optimized lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} castShadow />
      <pointLight position={[0, 8, 0]} intensity={0.6} color="#ff4444" />

      <ForestTrees />
      <OptimizedFireParticles />
      <OptimizedSmokeParticles />

      {/* Reduced number of drones and sensors */}
      <OptimizedThermalDrone position={[-8, 6, -5]} />
      <OptimizedThermalDrone position={[10, 7, 3]} />

      <OptimizedInfraredSensor position={[-12, 0, -8]} />
      <OptimizedInfraredSensor position={[8, 0, -10]} />

      {/* Simplified ground */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[60, 60]} />
        <meshLambertMaterial color="#2d4a22" />
      </mesh>
    </>
  )
}
