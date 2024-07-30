import { useGLTF } from '@react-three/drei';

export function React(props) {
  const { nodes, materials } = useGLTF('models/react.glb');

  return (
    <group {...props} dispose={null}>
      <mesh name='Curve017' geometry={nodes.Curve017.geometry} material={materials['Material.003']} />
    </group>
  );
}

useGLTF.preload('models/react.glb');
