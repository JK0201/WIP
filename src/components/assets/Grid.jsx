import { useGLTF } from '@react-three/drei';

export function Grid(props) {
  const { nodes, materials } = useGLTF('models/grid.glb');
  return (
    <group {...props} dispose={null}>
      <mesh name='Object_4' geometry={nodes.Object_4.geometry} material={materials['Material.001']} scale={8} />
      <mesh name='Object_6' geometry={nodes.Object_6.geometry} material={materials['Material.002']} scale={8} />
    </group>
  );
}

useGLTF.preload('models/grid.glb');
