import * as THREE from 'three';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { useDispatch, useSelector } from 'react-redux';
import { setAnimation } from '../redux/characterSlice';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

export function Character(props) {
  const { wireframe } = props;
  const characterRef = useRef();
  const page = useSelector((state) => state.page);
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();

  const { nodes, materials } = useGLTF('models/character.glb');

  // Animation
  const { animations: standingAnimation } = useFBX('animations/Standing.fbx');
  const { animations: fallingAnimation } = useFBX('animations/Falling.fbx');
  const { animations: leaningAnimation } = useFBX('animations/Leaning.fbx');
  const { animations: runningAnimation } = useFBX('animations/Running.fbx');

  standingAnimation[0].name = 'Standing';
  fallingAnimation[0].name = 'Falling';
  leaningAnimation[0].name = 'Leaning';
  runningAnimation[0].name = 'Running';

  const { actions } = useAnimations(
    [standingAnimation[0], fallingAnimation[0], leaningAnimation[0], runningAnimation[0]],
    characterRef
  );

  // Changing animation by section
  useEffect(() => {
    if (page.section === 0) {
      dispatch(setAnimation('Leaning'));
      return;
    }

    if (page.section === 4) {
      dispatch(setAnimation('Standing'));
      return;
    }

    dispatch(setAnimation('Falling'));
    const timer = setTimeout(() => {
      dispatch(page.section === 0 ? dispatch(setAnimation('Leaning')) : dispatch(setAnimation('Running')));
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [page.section]);

  // Animation Play
  useEffect(() => {
    actions[character.animation].reset().fadeIn(0.5).play();
    return () => {
      actions[character.animation].reset().fadeOut(0.5);
    };
  }, [character.animation]);

  // Wireframe trigger
  useEffect(() => {
    Object.values(materials).forEach((item) => {
      item.wireframe = wireframe;
    });
  }, [wireframe]);

  // Look at on section 0
  useFrame(() => {
    if (page.section === 0) {
      characterRef.current.getObjectByName('Neck').lookAt(new THREE.Vector3(0, -1.1, 4.5));
    }
  });

  return (
    <group {...props} ref={characterRef} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name='Wolf3D_Hair'
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        name='Wolf3D_Glasses'
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        name='Wolf3D_Body'
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        name='Wolf3D_Outfit_Bottom'
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        name='Wolf3D_Outfit_Footwear'
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        name='Wolf3D_Outfit_Top'
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name='EyeLeft'
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name='EyeRight'
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name='Wolf3D_Head'
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name='Wolf3D_Teeth'
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload('models/character.glb');
