import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Particles() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.08;

    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.15) * 0.12;
  });

  const particles = Array.from({ length: 25 });

  return (
    <group ref={groupRef}>
      {particles.map((_, index) => {
        const angle = (index / particles.length) * Math.PI * 2;

        const radius = 1.8 + (index % 4) * 0.3;

        return (
          <Float
            key={index}
            speed={1 + (index % 3) * 0.3}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            <mesh
              position={[
                Math.cos(angle) * radius,
                Math.sin(index) * 0.35,
                Math.sin(angle) * radius,
              ]}
            >
              <sphereGeometry args={[0.025, 8, 8]} />

              <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={0.45}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

export default function About3D() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.5} />

      <Particles />
    </Canvas>
  );
}