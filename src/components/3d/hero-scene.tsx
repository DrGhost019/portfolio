'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function ParticleField() {
  const mesh = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    const count = 1500;
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 25;
      const z = (Math.random() - 0.5) * 25;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.02;

      const x = state.pointer.x * 0.5;
      const y = state.pointer.y * 0.5;
      mesh.current.rotation.y += x * 0.05;
      mesh.current.rotation.x += y * 0.05;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#5B9DFF"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function TorusKnot() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.08;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.12;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -7.42]}>
      <torusKnotGeometry args={[5.3, 1.45, 128, 32]} />
      <meshBasicMaterial color="#5B9DFF" wireframe transparent opacity={0.07} />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: false,
        }}
        style={{ background: 'transparent' }}
        fallback={
          <div className="bg-background flex h-full w-full items-center justify-center">
            <p className="text-text-secondary">3D Background Unavailable</p>
          </div>
        }
      >
        <ParticleField />
        <TorusKnot />
      </Canvas>
    </div>
  );
}
