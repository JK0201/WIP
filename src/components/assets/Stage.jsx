import { useGLTF } from '@react-three/drei';

export function Stage(props) {
  const { nodes, materials } = useGLTF('models/stage.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        name='Plane_Material_0001'
        geometry={nodes.Plane_Material_0001.geometry}
        material={materials['Material.005']}
      />
      <mesh
        name='Plane_Material_0001_1'
        geometry={nodes.Plane_Material_0001_1.geometry}
        material={materials['Material.004']}
      />
      <mesh
        name='Plane_Material_0001_2'
        geometry={nodes.Plane_Material_0001_2.geometry}
        material={materials['Material.007']}
      />
    </group>
  );
}

useGLTF.preload('models/stage.glb');
