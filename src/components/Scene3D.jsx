import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cube() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

const Scene3D = () => {
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        
        {/* Light */}
        <ambientLight intensity={1} />

        {/* 3D Object */}
        <Cube />

        {/* Mouse se rotate */}
        <OrbitControls />
        
      </Canvas>
    </div>
  );
};

export default Scene3D;