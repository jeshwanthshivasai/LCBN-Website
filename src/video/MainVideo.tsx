import { AbsoluteFill, useVideoConfig, useCurrentFrame, spring } from 'remotion';

export const MainVideo: React.FC = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const scale = spring({
        fps,
        frame,
        config: {
            damping: 10,
        },
    });

    return (
        <AbsoluteFill className="bg-[#0a0a0a] items-center justify-center font-sans">
            <div style={{ transform: `scale(${scale})` }} className="text-center">
                <h1 className="text-6xl text-[#96CC39] font-bold tracking-tighter">MatNEXT</h1>
                <p className="text-white text-2xl mt-4 opacity-80">Content Marketing Initiative</p>
            </div>
        </AbsoluteFill>
    );
}
