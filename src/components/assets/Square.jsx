import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

export function Square(props) {
  const { nodes, materials } = useGLTF('models/square.glb');

  useEffect(() => {
    Object.values(materials).forEach((item) => {
      item.wireframe = true;
    });
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh name='PS_Lamp_Square_0' geometry={nodes.PS_Lamp_Square_0.geometry} material={materials.Square} />
    </group>
  );
}

useGLTF.preload('models/square.glb');
