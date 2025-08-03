import { useGLTF } from "@react-three/drei";

const FirstGLTF = () => {
  const scene = useGLTF("/models/GLTF/apple_watch_se/scene.gltf");

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <primitive
        object={scene.scene}
        position={[0, 0, 0]}
        scale={1.5}
        rotation={[0, 1.5, 1.5]}
      />
    </>
  );
};

export default FirstGLTF;
