import './App.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/assets/Experience';
import { Scroll, ScrollControls } from '@react-three/drei';
import { Menu } from './components/interfaces/Menu';
import { Sound } from './components/interfaces/Sound';
import { ScrollManager } from './components/interfaces/ScrollManager';
import { Page } from './components/interfaces/Page';

function App() {
  return (
    <>
      <Menu />
      <Sound />
      <Canvas camera={{ position: [0, 1, 3.5] }}>
        <color attach='background' args={['black']} />
        <ScrollControls pages={5} damping={0.1}>
          <ScrollManager />
          <Scroll>
            <Experience />
          </Scroll>
          <Scroll html>
            <Page />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
