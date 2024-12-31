import React, { useRef } from 'react';
import { useGLTF, useVideoTexture } from '@react-three/drei';

export function DemoPhone(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF('/models/i_phone_12_pro.glb');

    // Load the video texture for the screen
    const videoTexture = useVideoTexture('/textures/project/project1.mp4');

    // Ensure the texture is not flipped
    if (videoTexture) {
        videoTexture.flipY = false;
    }

    return (
        <group ref={group} {...props} dispose={null}>
            <group
                position={[-1, 0.0, 0.5]} // Adjust Y-axis (vertical) and Z-axis (depth)
                rotation={[0, 0, 0]}
                scale={[0.5, 0.5, 0.5]} // Uniform scaling for proportional rendering
            >
                <group position={[0.39, -0.015, -2.135]} rotation={[-1.576, -0.007, -Math.PI / 2]}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[1.296, 1.268, -0.892]} rotation={[0, 0, -Math.PI / 2]} scale={0.179}>
                            {/* Phone Model */}
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_4.geometry}
                                material={materials['Material.002']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_5.geometry}
                                material={materials['Material.002']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_6.geometry}
                                material={materials['Material.006']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_7.geometry} // The screen geometry
                            >
                                {/* Apply video texture to the screen */}
                                {videoTexture ? (
                                    <meshBasicMaterial map={videoTexture} toneMapped={false}/>
                                ) : (
                                    <meshStandardMaterial color="black"/> // Fallback material
                                )}
                            </mesh>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_8.geometry}
                                material={materials['Material.003']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_9.geometry}
                                material={materials['Material.001']}
                            />
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload('/models/i_phone_12_pro.glb');

export default DemoPhone;
