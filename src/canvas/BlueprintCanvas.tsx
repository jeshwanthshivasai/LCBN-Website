import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, Icosahedron, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const MorphingObject = ({ activeIndex }: { activeIndex: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // We can use the activeIndex to trigger different visual states or morphs
  // For a truly high-end effect, we would use shape keys or shader morphing,
  // but for this MVP, we'll use a combination of rotation, scale, and materials.
  
  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Reactive properties based on activeIndex
      const targetScale = 1 + activeIndex * 0.05;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        {/* We switch geometry based on phases of the 12 points to keep it interesting */}
        {activeIndex < 4 ? (
          <Icosahedron args={[1.5, 20]} />
        ) : activeIndex < 8 ? (
          <Torus args={[1.2, 0.4, 32, 100]} />
        ) : (
          <Octahedron args={[1.8, 10]} />
        )}
        
        <MeshDistortMaterial
          color={activeIndex % 2 === 0 ? "#96CC39" : "#ffffff"}
          emissive="#000000"
          roughness={0.1}
          metalness={1}
          distort={0.4 + activeIndex * 0.02}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

export const BlueprintCanvas = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#96CC39" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <MorphingObject activeIndex={activeIndex} />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};
