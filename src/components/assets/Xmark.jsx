import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

export function Xmark(props) {
  const { nodes, materials } = useGLTF('models/xmark.glb');

  useEffect(() => {
    Object.values(materials).forEach((item) => {
      item.wireframe = true;
    });
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh name='PS_Lamp_X_0' geometry={nodes.PS_Lamp_X_0.geometry} material={materials.material} />
    </group>
  );
}

useGLTF.preload('models/xmark.glb');
