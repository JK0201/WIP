import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

export function Circle(props) {
  const { nodes, materials } = useGLTF('models/circle.glb');

  useEffect(() => {
    Object.values(materials).forEach((item) => {
      item.wireframe = true;
    });
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh name='PS_Lamp_Circle_0' geometry={nodes.PS_Lamp_Circle_0.geometry} material={materials.Circle} />
    </group>
  );
}

useGLTF.preload('models/circle.glb');
