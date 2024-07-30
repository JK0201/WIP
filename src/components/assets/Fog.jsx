import { useGLTF } from '@react-three/drei';

export function Fog(props) {
  const { nodes, materials } = useGLTF('models/fog.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        name='Object_35'
        geometry={nodes.Object_35.geometry}
        material={materials.material}
        position={[6.344, 8.63, -53.609]}
        rotation={[0, -0.032, 0]}
        scale={2.64}
      />
    </group>
  );
}

useGLTF.preload('models/fog.glb');
