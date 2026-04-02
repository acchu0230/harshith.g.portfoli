import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const SkillSphere = ({ color = "#0ea5e9" }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 2]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          distort={0.35}
          speed={3}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const SkillsScene = () => (
  <Canvas
    camera={{ position: [0, 0, 5], fov: 50 }}
    dpr={[1, 1.5]}
    gl={{ antialias: true, alpha: true }}
    style={{ background: "transparent" }}
  >
    <ambientLight intensity={0.4} />
    <pointLight position={[3, 3, 3]} intensity={1} color="#0ea5e9" />
    <pointLight position={[-3, -3, -3]} intensity={0.5} color="#7c3aed" />
    <SkillSphere />
  </Canvas>
);

export default SkillsScene;
