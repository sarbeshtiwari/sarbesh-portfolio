'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, OrbitControls } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function GlowingOrb({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.MeshStandardMaterial>(null)
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2
    }
    if (meshRef.current) {
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.3) * 0.2
    }
  })
  
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial 
          ref={materialRef}
          color={color} 
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} />
      </mesh>
    </Float>
  )
}

function FloatingCode({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.15, 0.02, 16, 50]} />
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={1.5} />
      </mesh>
    </Float>
  )
}

function Particles() {
  const points = useRef<THREE.Points>(null)
  const particles = useMemo(() => {
    const positions = new Float32Array(150 * 3)
    for (let i = 0; i < 150; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2
    }
    return positions
  }, [])

  useFrame(() => {
    if (points.current) {
      points.current.rotation.x += 0.0003
      points.current.rotation.y += 0.0005
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#a855f7" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function InteractiveElements() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame(({ pointer }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = pointer.y * 0.1
      groupRef.current.rotation.y = pointer.x * 0.1
    }
  })
  
  return (
    <group ref={groupRef}>
      <GlowingOrb position={[-2.5, 1.5, -1]} color="#a855f7" />
      <GlowingOrb position={[2.5, -0.5, -1.5]} color="#22d3ee" />
      <GlowingOrb position={[0, 2.5, -2]} color="#c084fc" />
      <GlowingOrb position={[-1.5, -2, -1]} color="#7c3aed" />
      
      <FloatingCode position={[-1.8, -1.5, -1]} />
      <FloatingCode position={[1.8, 1.5, -1.5]} />
      <FloatingCode position={[0, -2.5, -1]} />
      <FloatingCode position={[2, -1, -2]} />
    </group>
  )
}

export default function HeroScene() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%)' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#a855f7" />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color="#22d3ee" />
        <pointLight position={[0, 0, 5]} intensity={0.3} color="#c084fc" />
        
        <Stars radius={80} depth={40} count={2000} factor={3} saturation={0} fade speed={0.3} />
        
        <InteractiveElements />
        <Particles />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.15} />
      </Canvas>
    </div>
  )
}