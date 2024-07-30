import { useGLTF } from '@react-three/drei';

export function Car(props) {
  const { nodes, materials } = useGLTF('models/car.glb');
  return (
    <group {...props} dispose={null}>
      <group name='car_body_6' position={[3.419, 0.579, -1.061]} rotation={[0, -0.783, -Math.PI / 2]} scale={1.203}>
        <mesh name='Object_6' geometry={nodes.Object_6.geometry} material={materials.base} />
        <mesh name='Object_6_1' geometry={nodes.Object_6_1.geometry} material={materials.details} />
        <mesh name='Object_6_2' geometry={nodes.Object_6_2.geometry} material={materials.glass} />
        <mesh name='Object_6_3' geometry={nodes.Object_6_3.geometry} material={materials.wheels} />
      </group>
    </group>
  );
}

useGLTF.preload('models/car.glb');
