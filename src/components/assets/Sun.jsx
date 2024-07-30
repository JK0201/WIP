import { useGLTF } from '@react-three/drei';

export function Sun(props) {
  const { nodes, materials } = useGLTF('models/sun.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        name='Object_91'
        geometry={nodes.Object_91.geometry}
        material={materials.material_8}
        position={[3.78, 9.376, -53.733]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.192}
      />
    </group>
  );
}

useGLTF.preload('models/sun.glb');
