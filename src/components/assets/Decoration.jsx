import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Decoration(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('models/decoration.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions['Animation'].reset().play();

    return () => {
      actions['Animation'].reset().stop();
    };
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]} scale={0.108}>
          <group name='root'>
            <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
              <group name='Circle_0' position={[-2.157, 0.075, 0]}>
                <mesh name='Object_4' geometry={nodes.Object_4.geometry} material={materials.yellow} />
              </group>
              <group name='Circle001_1' position={[-0.82, 0.1, 0]}>
                <mesh name='Object_6' geometry={nodes.Object_6.geometry} material={materials.material} />
                <mesh name='Object_7' geometry={nodes.Object_7.geometry} material={materials.white} />
              </group>
              <group name='Circle003_2' position={[-0.031, -0.1, 0]}>
                <mesh name='Object_9' geometry={nodes.Object_9.geometry} material={materials.blue} />
                <mesh name='Object_10' geometry={nodes.Object_10.geometry} material={materials.white} />
              </group>
              <group name='Circle005_3' position={[0.78, 0.1, 0]}>
                <mesh name='Object_12' geometry={nodes.Object_12.geometry} material={materials.green} />
                <mesh name='Object_13' geometry={nodes.Object_13.geometry} material={materials.white} />
              </group>
              <group name='Circle007_4' position={[1.63, -0.1, 0]}>
                <mesh name='Object_15' geometry={nodes.Object_15.geometry} material={materials.pink} />
                <mesh name='Object_16' geometry={nodes.Object_16.geometry} material={materials.white} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('models/decoration.glb');
