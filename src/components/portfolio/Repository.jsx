import { Text, useGLTF } from '@react-three/drei';
import { MathUtils } from 'three';
import { projects, studies } from './list';
import { useEffect, useRef, useState } from 'react';
import { Work } from './Work';
import { animate, useMotionValue } from 'framer-motion';
import { useFrame } from '@react-three/fiber';

export function Repository(props) {
  const projectRef = useRef();
  const studyRef = useRef();
  const prevRef = useRef();
  const nextRef = useRef();
  const [list, setList] = useState([]);
  const [projectTab, setProjectTab] = useState(true);
  const [studyTab, setStudyTab] = useState(false);
  const [project, setProject] = useState(0);
  const [study, setStudy] = useState(0);

  const projectWidth = useMotionValue(0);
  const projectBlur = useMotionValue(0);
  const studyWidth = useMotionValue(0);
  const studyBlur = useMotionValue(0);
  const prevAnimation = useMotionValue(-3);
  const nextAnimation = useMotionValue(3);

  const { nodes, materials } = useGLTF('models/arcade.glb');

  // Animate project elements
  useEffect(() => {
    if (projectTab) {
      setList([...projects]);
    } else if (studyTab) {
      setList([...studies]);
    }

    animate(projectWidth, projectTab ? 0.1 : 0, { duration: 0.1 });
    animate(projectBlur, projectTab ? 0.3 : 0, { duration: 0.1 });
    animate(studyWidth, studyTab ? 0.1 : 0, { duration: 0.1 });
    animate(studyBlur, studyTab ? 0.3 : 0, { duration: 0.1 });
  }, [projectTab, studyTab]);

  useFrame(() => {
    projectRef.current.outlineWidth = projectWidth.get();
    projectRef.current.outlineBlur = projectBlur.get();
    studyRef.current.outlineWidth = studyWidth.get();
    studyRef.current.outlineBlur = studyBlur.get();
    prevRef.current.position.x = prevAnimation.get();
    nextRef.current.position.x = nextAnimation.get();
  });

  // Move to previous work
  let prevTimer;
  const previousWork = () => {
    if (projectTab) {
      setProject((project - 1 + list.length) % list.length);
    } else if (studyTab) {
      setStudy((study - 1 + list.length) % list.length);
    }

    animate(prevAnimation, -3.2, { duration: 0.05 });
    clearTimeout(prevTimer);
    prevTimer = setTimeout(() => {
      animate(prevAnimation, -3, { duration: 0.05 });
    }, 60);
  };

  // Move to next work
  let nextTimer;
  const nextWork = () => {
    if (projectTab) {
      setProject((project + 1) % list.length);
    } else if (studyTab) {
      setStudy((study + 1) % list.length);
    }

    animate(nextAnimation, 3.2, { duration: 0.05 });
    clearTimeout(nextTimer);
    nextTimer = setTimeout(() => {
      animate(nextAnimation, 3, { duration: 0.05 });
    }, 60);
  };

  return (
    <>
      <mesh name='Screen' geometry={nodes.Screen.geometry} material={materials['Material.001']} />
      <group position={[0.2, 55.6, 2.7]} rotation-x={MathUtils.degToRad(-7)}>
        <Text
          ref={projectRef}
          position-x={-3.2}
          outlineColor={'#20A7DB'}
          fontSize={0.9}
          font='/fonts/Orbitron.ttf'
          onClick={() => {
            setProjectTab(true);
            setStudyTab(false);
          }}
        >
          PROJECT
        </Text>
        <Text
          ref={studyRef}
          position-x={3.2}
          outlineColor={'#20A7DB'}
          fontSize={0.9}
          font='/fonts/Orbitron.ttf'
          onClick={() => {
            setStudyTab(true);
            setProjectTab(false);
          }}
        >
          STUDY
        </Text>
      </group>

      {list.map((item, idx) => {
        return (
          <group
            {...props}
            key={idx}
            dispose={null}
            onClick={() => {
              window.open(item.url, '_blank');
            }}
          >
            {projectTab ? <Work item={item} project={idx === project} /> : <Work item={item} study={idx === study} />}
          </group>
        );
      })}

      <group position={[0.2, 33.4, 5.5]} rotation-x={MathUtils.degToRad(-7)}>
        <Text ref={prevRef} position-x={-3} fontSize={0.7} font='/fonts/Orbitron.ttf' onClick={() => previousWork()}>
          {`< Prev`}
        </Text>
        <Text fontSize={0.7} font='/fonts/Orbitron.ttf'>
          {projectTab ? project + 1 : study + 1} / {list.length}
        </Text>
        <Text ref={nextRef} position-x={3} fontSize={0.7} font='/fonts/Orbitron.ttf' onClick={() => nextWork()}>
          {'Next >'}
        </Text>
      </group>
    </>
  );
}

useGLTF.preload('models/arcade.glb');
