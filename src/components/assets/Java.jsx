import { useGLTF } from '@react-three/drei';

export function Java(props) {
  const { nodes, materials } = useGLTF('models/java.glb');

  return (
    <group {...props} dispose={null}>
      <mesh name='Curve007_1' geometry={nodes.Curve007_1.geometry} material={materials['Material.001']} />
      <mesh name='Curve007_2' geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} />
    </group>
  );
}

useGLTF.preload('models/java.glb');
