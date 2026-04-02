import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

const AboutShape = () => {
  const torusRef = useRef<THREE.Mesh>(null);
  const cubeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.z = t * 0.2;
    }
    if (cubeRef.current) {
      cubeRef.current.rotation.x = t * 0.4;
      cubeRef.current.rotation.y = t * 0.5;
      cubeRef.current.position.y = Math.sin(t * 0.8) * 0.3;
    }
  });

  return (
    <>
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.5}>
        <mesh ref={torusRef} position={[0, 0, 0]}>
          <torusKnotGeometry args={[1, 0.35, 128, 16]} />
          <MeshWobbleMaterial
            color="#0ea5e9"
            roughness={0.1}
            metalness={0.9}
            factor={0.15}
            speed={2}
          />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={cubeRef} position={[1.8, 1.2, -1]} scale={0.4}>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial
            color="#7c3aed"
            roughness={0}
            metalness={0.5}
            clearcoat={1}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>
    </>
  );
};

const AboutScene = () => (
  <Canvas
    camera={{ position: [0, 0, 5], fov: 50 }}
    dpr={[1, 1.5]}
    gl={{ antialias: true, alpha: true }}
    style={{ background: "transparent" }}
  >
    <ambientLight intensity={0.3} />
    <pointLight position={[5, 5, 5]} intensity={1} color="#0ea5e9" />
    <pointLight position={[-3, -2, 3]} intensity={0.6} color="#7c3aed" />
    <AboutShape />
  </Canvas>
);

export default AboutScene;
