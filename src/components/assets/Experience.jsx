import { ContactShadows, Float, Text, useScroll } from '@react-three/drei';
import { Background } from './Background';
import { Grid } from './Grid';
import { Sun } from './Sun';
import { Car } from './Car';
import { Fog } from './Fog';
import { motion } from 'framer-motion-3d';
import { useDispatch, useSelector } from 'react-redux';
import { useFrame, useThree } from '@react-three/fiber';
import { Character } from './Character';
import { setPortfolioAnimation, setSection } from '../redux/pageSlice';
import { animate, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Arcade } from './Arcade';
import { Repository } from '../portfolio/Repository';
import { Docker } from './Docker';
import { Java } from './Java';
import { React } from './React';
import { Decoration } from './Decoration';
import { Square } from './Square';
import { Triangle } from './Triangle';
import { Circle } from './Circle';
import { Xmark } from './Xmark';
import { Earth } from './Earth';
import { Stage } from './Stage';

export const Experience = () => {
  const { viewport } = useThree();
  const data = useScroll();
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const floorRef = useRef();
  const coreRef = useRef();

  const cameraPositionX = useMotionValue(0);
  const cameraPostionY = useMotionValue(0.7);
  const cameraLookAtX = useMotionValue(0);

  // Camera handler (보류 3D 모델링 다하고 나서 할것)
  useEffect(() => {
    animate(cameraPositionX, page.menu ? 1 : 0);
    animate(cameraLookAtX, page.menu ? -1 : 0);
  }, [page.menu]);

  useEffect(() => {
    animate(cameraPostionY, page.section === 0 ? 1 : page.section === 4 ? -1 : 0.7);
  }, [page.section]);

  useFrame((state, delta) => {
    // Camera adjustment (menu toggle)
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, -1);

    // Camera adjustment (project section)
    state.camera.position.y = cameraPostionY.get();

    // Scroll position
    const currentPage = Math.floor(data.scroll.current * data.pages);

    if (currentPage !== page.section) {
      dispatch(setSection(currentPage));
    }

    if (currentPage > data.pages - 1) {
      dispatch(setSection(data.pages - 1));
    }

    // console.log(data.scroll.current);
    if (data.scroll.current > 0.47 && data.scroll.current < 0.54) {
      dispatch(setPortfolioAnimation(true));
    } else {
      dispatch(setPortfolioAnimation(false));
    }

    floorRef.current.rotateY(-delta * 0.15);
    coreRef.current.rotateX(-delta);
    coreRef.current.rotateY(delta);
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <Background />
      <ContactShadows opacity={0.7} />
      <directionalLight
        position={[0, 5, -10]}
        intensity={page.section === 0 || page.section >= 3 ? 1 : 0}
        color={page.section === 0 ? 'yellow' : 'aqua'}
      />
      <motion.group
        animate={'' + page.section}
        transition={{ duration: 0.4 }}
        variants={{
          0: { y: -0.025, scale: 1 },
          1: { y: -1, scale: 0.3 },
        }}
      >
        <Grid position={[0, -0.006, 0]} rotation-y={Math.PI / 2} />
        <Sun position={[0, -1.1, -8]} scale={0.2} />
        <Car position={[0.3, 0, 0]} scale={0.3} rotation-y={Math.PI / 4} />
        <Float speed={2} rotationIntensity={0.1}>
          <Fog position={[0, 0, 3.5]} scale={0.15} />
        </Float>
      </motion.group>

      <motion.group
        position={[0, 0, 1.15]}
        scale={0.7}
        rotation-y={Math.PI / 5}
        animate={'' + page.section}
        transition={{ duration: page.section === 1 ? 0.6 : 0 }}
        variants={{
          1: { x: 0, y: -viewport.height - 0.15, z: 2.3 },
          4: { x: 0, y: -viewport.height * 4 - 1.4, z: 2.5, rotateY: Math.PI, scale: 0.3 },
        }}
      >
        <Character wireframe={page.section === 1} />
      </motion.group>

      <motion.group
        position={[0, -viewport.height, 3]}
        animate={'' + page.section}
        transition={{ duration: 0.6 }}
        variants={{ 1: { z: 0.5 } }}
      >
        <Float position={[1, 0.7, -0.5]} speed={5} rotationIntensity={1}>
          <Docker scale={20} />
        </Float>
        <Float position={[-1, 0.5, 0]} speed={2} rotationIntensity={2}>
          <Java scale={20} />
        </Float>
        <Float position={[-0.5, 1.2, 0]} speed={5} rotationIntensity={7}>
          <React scale={20} />
        </Float>
      </motion.group>

      <motion.group
        position={[-0.005, -viewport.height * 2 - 1, 0]}
        scale={0.04}
        rotation-y={-Math.PI / 4}
        animate={'' + page.projectAnimation}
        transition={{ duration: 0.6 }}
        variants={{
          true: { y: -viewport.height * 2 - 1.6, z: 2, scale: 0.05, rotateY: 0 },
        }}
      >
        <Arcade />
        <Repository />
        <Float speed={5} rotationIntensity={0.5}>
          <Decoration position={[0, 17, 25]} scale={100} />
        </Float>
        <motion.group
          scale={0.8}
          animate={'' + page.section}
          transition={{ duration: 0.6 }}
          variants={{ 2: { scale: 1 } }}
        >
          <Float speed={5} rotationIntensity={0.2}>
            <Square position={[-40, 45, 30]} scale={[100, 500, 500]} rotation={[-Math.PI / 8, -Math.PI / 4, 0]} />
          </Float>
          <Float speed={2} rotationIntensity={0.2}>
            <Triangle position={[-25, 15, 50]} scale={[100, 300, 300]} rotation-x={-Math.PI / 3} />
          </Float>
          <Float speed={3} rotationIntensity={0.4}>
            <Xmark position={[19, 35, -30]} scale={[100, 500, 500]} rotation-y={Math.PI / 3} />
          </Float>
        </motion.group>
        <group ref={floorRef}>
          <Circle position-y={4} scale={[100, 1200, 1200]} rotation-z={-Math.PI / 2} />
        </group>
      </motion.group>

      <group position={[0, -viewport.height * 3 + 0.465, 2]} scale={0.7}>
        <pointLight color={'#1b38c8'} intensity={7} distance={2} />
        <Earth />
        <group ref={coreRef}>
          <React position-y={-0.275} scale={20} />
        </group>
      </group>

      <group position={[-0.25, -viewport.height * 4 - 1.4, 2]} scale={0.3}>
        <Stage />
      </group>
    </>
  );
};
