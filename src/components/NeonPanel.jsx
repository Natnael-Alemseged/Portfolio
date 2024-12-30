// NeonPanel.jsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const NeonPanel = ({ position, rotation, color }) => {
    const panelRef = useRef();

    // Subtle floating animation
    useFrame(() => {
        panelRef.current.position.y += Math.sin(Date.now() / 1000) * 0.001;
    });

    return (
        <mesh position={position} rotation={rotation} ref={panelRef}>
            <boxGeometry args={[2, 3, 0.1]} />
            <meshStandardMaterial emissive={color} emissiveIntensity={2} />
        </mesh>
    );
};

export default NeonPanel;
