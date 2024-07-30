import { Image, Text } from '@react-three/drei';
import { MathUtils } from 'three';
import { motion } from 'framer-motion-3d';

export const Work = (props) => {
  const { item, project, study } = props;

  return (
    <>
      {(project || study) && (
        <motion.group
          position={[0.2, 43.3, 4.2]}
          rotation-x={MathUtils.degToRad(-7)}
          initial={{ scale: 0.6, rotateZ: Math.PI / 12 }}
          animate={{ scale: 1, rotateZ: 0 }}
        >
          <Image url={item.image} position-y={3.5} scale={13} toneMapped={false} />
          <Text position={[-6.5, -3.5, 0]} maxWidth={13} fontSize={1.2} anchorX={'left'} anchorY={'top'}>
            {item.title.toUpperCase()}
          </Text>
          <Text position={[-6.5, -5, 0]} maxWidth={13} fontSize={0.8} anchorX={'left'} anchorY={'top'}>
            {item.description}
          </Text>
        </motion.group>
      )}
    </>
  );
};
