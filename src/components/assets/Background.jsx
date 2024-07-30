import { Environment, Stars } from '@react-three/drei';

export const Background = () => {
  return (
    <group>
      <Environment preset='apartment' />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};
