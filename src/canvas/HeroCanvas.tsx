import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { EffectComposer, Noise, Vignette, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const AnimatedBlob = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      
      // Gentle floating animation based on time
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 128, 128]} scale={1.2}>
      <MeshDistortMaterial
        color="#0a0a0a"
        emissive="#0a0a0a"
        envMapIntensity={0.5}
        clearcoat={0.8}
        clearcoatRoughness={0}
        metalness={0.9}
        roughness={0.1}
        distort={0.4}
        speed={1.5}
      />
    </Sphere>
  );
};

export const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#96CC39" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
        
        <Environment preset="city" />
        
        <AnimatedBlob />

        {/* Cinematic Post-Processing from awwwards-r3f-3d-experiences skill */}
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
          <Noise opacity={0.035} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};
