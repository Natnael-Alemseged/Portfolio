// AbstractShape.jsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const AbstractShape = ({ position, color, type }) => {
    const shapeRef = useRef();

    // Rotate animation
    useFrame(() => {
        shapeRef.current.rotation.x += 0.01;
        shapeRef.current.rotation.y += 0.01;
    });

    return (
        <mesh position={position} ref={shapeRef}>
            {type === 'sphere' ? (
                <sphereGeometry args={[2, 32, 32]} />
            ) : type === 'torus' ? (
                <torusGeometry args={[2, 0.5, 16, 100]} />
            ) : (
                <dodecahedronGeometry args={[2]} />
            )}
            <meshStandardMaterial color={color} roughness={0.4} metalness={0.8} />
        </mesh>
    );
};

export default AbstractShape;
