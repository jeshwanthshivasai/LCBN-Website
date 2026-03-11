import { Composition, registerRoot } from 'remotion';
import { MainVideo } from './MainVideo';
import '../index.css';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MatNEXTMarketing"
        component={MainVideo}
        durationInFrames={300} // 10 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

registerRoot(RemotionRoot);
