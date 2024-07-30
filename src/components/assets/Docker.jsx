import { useGLTF } from '@react-three/drei';

export function Docker(props) {
  const { nodes, materials } = useGLTF('models/docker.glb');

  return (
    <group {...props} dispose={null}>
      <mesh name='Plane' geometry={nodes.Plane.geometry} material={materials['Material.005']} />
      <mesh name='Plane001' geometry={nodes.Plane001.geometry} material={materials['Material.003']} />
      <mesh name='Cylinder' geometry={nodes.Cylinder.geometry} material={materials['Material.001']} />
      <mesh name='Cylinder001' geometry={nodes.Cylinder001.geometry} material={materials['Material.006']} />
      <mesh name='Cylinder002' geometry={nodes.Cylinder002.geometry} material={materials['Material.002']} />
      <mesh name='Plane002' geometry={nodes.Plane002.geometry} material={materials['Material.005']} />
      <mesh name='Curve' geometry={nodes.Curve.geometry} material={materials['SVGMat.004']} />
    </group>
  );
}

useGLTF.preload('models/docker.glb');
