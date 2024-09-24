import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import React from 'react';

// Function to load and display the 3D model
const Model = () => {
  // Load the GLTF model
  const { scene } = useGLTF('/models/your-model.glb'); // Ensure the path is correct

  // Return the loaded model scene
  return <primitive object={scene} scale={0.5} />;
};

const Viewer3D = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={true} enablePan={false} />
      <Model /> {/* Add the 3D Model here */}
    </Canvas>
  );
};

export default Viewer3D;