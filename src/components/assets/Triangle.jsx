import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

export function Triangle(props) {
  const { nodes, materials } = useGLTF('models/triangle.glb');

  useEffect(() => {
    Object.values(materials).forEach((item) => {
      item.wireframe = true;
    });
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh name='PS_Lamp_Triangle_0' geometry={nodes.PS_Lamp_Triangle_0.geometry} material={materials.Triangle} />
    </group>
  );
}

useGLTF.preload('models/triangle.glb');
