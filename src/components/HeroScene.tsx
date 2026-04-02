import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sparkles, Environment } from "@react-three/drei";
import * as THREE from "three";

const GlowingSphere = ({ position, color, speed = 1, distort = 0.4, size = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  size?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
      meshRef.current.rotation.y += 0.005 * speed;
    }
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={size}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          distort={distort}
          speed={speed * 2}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
};

const GlowingTorus = ({ position, color, speed = 1, size = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  size?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * speed * 0.2) * 0.5;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={size}>
        <torusGeometry args={[1, 0.35, 32, 64]} />
        <MeshWobbleMaterial
          color={color}
          roughness={0.15}
          metalness={0.9}
          factor={0.3}
          speed={speed}
        />
      </mesh>
    </Float>
  );
};

const FloatingCube = ({ position, color, speed = 1, size = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  size?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });

  return (
    <Float speed={speed * 1.2} rotationIntensity={0.8} floatIntensity={1.8}>
      <mesh ref={meshRef} position={position} scale={size}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          roughness={0.05}
          metalness={1}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
};

const Icosahedron = ({ position, color, speed = 1, size = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  size?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.4;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1.2} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={size}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.2}
          metalness={0.7}
          distort={0.2}
          speed={speed * 3}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const OctahedronGem = ({ position, color, speed = 1, size = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  size?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.6;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={size}>
      <octahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0}
        metalness={0.5}
        clearcoat={1}
        clearcoatRoughness={0}
        transparent
        opacity={0.85}
        transmission={0.3}
      />
    </mesh>
  );
};

const ParticleField = () => {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#0ea5e9" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

// Camera that follows mouse
const MouseCamera = () => {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(() => {
    camera.position.x += (mouse.current.x * 1.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.current.y * 1 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  // Listen to pointer move on the canvas
  useFrame(({ pointer }) => {
    mouse.current.x = pointer.x;
    mouse.current.y = pointer.y;
  });

  return null;
};

const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <MouseCamera />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#0ea5e9" />
      <directionalLight position={[-5, -3, -5]} intensity={0.5} color="#7c3aed" />
      <pointLight position={[0, 0, 3]} intensity={1} color="#0ea5e9" distance={10} />
      <pointLight position={[3, -2, -2]} intensity={0.6} color="#7c3aed" distance={8} />

      <GlowingSphere position={[-3, 1.5, -1]} color="#0ea5e9" speed={0.8} distort={0.5} size={0.9} />
      <GlowingTorus position={[3.5, -1, -2]} color="#7c3aed" speed={0.6} size={0.7} />
      <FloatingCube position={[-2.5, -1.8, 0]} color="#06b6d4" speed={1.2} size={0.6} />
      <Icosahedron position={[2.5, 2, -1]} color="#0ea5e9" speed={0.5} size={0.8} />
      <OctahedronGem position={[0, -0.5, 1]} color="#a78bfa" speed={0.7} size={0.55} />
      <FloatingCube position={[4, 1, -3]} color="#7c3aed" speed={0.4} size={0.4} />
      <GlowingSphere position={[-4, -0.5, -3]} color="#06b6d4" speed={1} distort={0.3} size={0.5} />

      <ParticleField />
      <Sparkles count={80} scale={12} size={1.5} speed={0.4} color="#0ea5e9" opacity={0.5} />

      <Environment preset="night" />
    </Canvas>
  );
};

export default HeroScene;
