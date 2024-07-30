import { useGLTF } from '@react-three/drei';

export function Arcade(props) {
  const { nodes, materials } = useGLTF('models/arcade.glb');

  return (
    <group {...props} dispose={null}>
      <mesh name='Machine' geometry={nodes.Machine.geometry} material={materials.automat} />
      <mesh name='Frame' geometry={nodes.Frame.geometry} material={materials.automat} />
      <mesh name='Joystick' geometry={nodes.Joystick.geometry} material={materials.automat} />
    </group>
  );
}

useGLTF.preload('models/arcade.glb');
