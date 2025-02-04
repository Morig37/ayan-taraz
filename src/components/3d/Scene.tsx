import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Logo3D } from './Logo3D';

export const Scene = () => {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Logo3D />
      <OrbitControls />
    </Canvas>
  );
};
