// import { Leva } from 'leva';
// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { useMediaQuery } from 'react-responsive';
// import { PerspectiveCamera } from '@react-three/drei';
//
//
// import Cube from '../components/Cube.jsx';
// import Rings from '../components/Rings.jsx';
// import ReactLogo from '../components/ReactLogo.jsx';
// import Button from '../components/Button.jsx';
// import Target from '../components/Target.jsx';
// import CanvasLoader from '../components/Loading.jsx';
// import HeroCamera from '../components/HeroCamera.jsx';
// import { calculateSizes } from '../constants/index.js';
// import { HackerRoom } from '../components/HackerRoom.jsx';
// import NeonPanel from '../components/NeonPanel.jsx';
// import AbstractShape from '../components/AbstractShape.jsx';
//
//
// const Hero = () => {
//   // Use media queries to determine screen size
//   const isSmall = useMediaQuery({ maxWidth: 440 });
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
//
//   const sizes = calculateSizes(isSmall, isMobile, isTablet);
//
//   return (
//     <section className="min-h-screen w-full flex flex-col relative" id="home">
//       <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
//         <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
//           Hi, I am Natnael Alemseged <span className="waving-hand">👋</span>
//         </p>
//         <p className="hero_tag text-gray_gradient">Senior Mobile Developer</p>
//       </div>
//       <div ></div>
//
//       <div className="w-full h-full absolute inset-0">
//         <Canvas className="w-full h-full">
//           <Suspense fallback={<CanvasLoader />}>
//             {/* To hide controller */}
//             <Leva hidden />
//             <PerspectiveCamera makeDefault position={[0, 0, 30]} />
//
//             {/*<HeroCamera isMobile={isMobile}>*/}
//             {/*  <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />*/}
//             {/*</HeroCamera>*/}
//
//
//             {/*<HeroCamera isMobile={isMobile}>*/}
//             {/*  <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />*/}
//
//             {/*  /!* Neon Panels *!/*/}
//             {/*  <NeonPanel position={[-15, 5, 0]} rotation={[0, 0.2, 0]} color="cyan" /> /!* Left *!/*/}
//             {/*  <NeonPanel position={[15, -5, 0]} rotation={[0, -0.2, 0]} color="pink" /> /!* Right *!/*/}
//             {/*</HeroCamera>*/}
//             <HeroCamera isMobile={isMobile}>
//
//
//
//               {/*<HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />*/}
//                 <NeonPanel position={[-15, 5, 0]} rotation={[0, 0.2, 0]} color="cyan" /> {/* Left */}
//                 <NeonPanel position={[15, -5, 0]} rotation={[0, -0.2, 0]} color="pink" /> {/* Right */}
//
//             </HeroCamera>
//
//             {/*<group>*/}
//             {/*  <Target position={sizes.targetPosition} />*/}
//             {/*  <ReactLogo position={sizes.reactLogoPosition} />*/}
//             {/*  <Rings position={sizes.ringPosition} />*/}
//             {/*  <Cube position={sizes.cubePosition} />*/}
//             {/*</group>*/}
//
//             <ambientLight intensity={1} />
//             <directionalLight position={[10, 10, 10]} intensity={0.5} />
//           </Suspense>
//         </Canvas>
//       </div>
//
//       <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
//         <a href="#about" className="w-fit">
//           <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
//         </a>
//       </div>
//     </section>
//   );
// };
//
// export default Hero;
// import { useMediaQuery } from 'react-responsive';
// import { motion } from 'framer-motion';

//

import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

const Hero = () => {
    // Dynamic Greeting Based on Time
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    // Media Queries
    const isSmall = useMediaQuery({ maxWidth: 440 });

    return (
        <section
            className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black-900 via-black-800 to-black-600 text-white"
            id="home"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full -top-20 -left-20 animate-pulse" />
                <div className="absolute w-72 h-72 bg-pink-400/30 blur-2xl rounded-full -bottom-20 -right-16 animate-pulse" />
                <div className="absolute w-[150%] h-[150%] bg-gradient-radial at-center from-transparent via-black-500 to-black opacity-50" />
            </div>

            {/* Text Content */}
            <div className={`text-center space-y-6 px-6 ${isSmall ? 'mt-10' : 'mt-20'}`}>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="text-4xl sm:text-6xl font-extrabold tracking-tight"
                >
                    {getGreeting()}, I’m <span className="text-cyan-400">Natnael Alemseged</span> 👋
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    className="text-lg sm:text-2xl text-gray-300 font-light"
                >
                    Crafting <span className="text-cyan-400">exceptional mobile experiences</span> with{' '}
                    <span className="text-pink-400">passion</span> and <span className="text-yellow-400">precision</span>.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                    className="text-sm sm:text-lg text-gray-400 max-w-3xl mx-auto"
                >
                    I specialize in building intuitive, user-friendly mobile apps that seamlessly combine design and functionality to
                    deliver outstanding user experiences.
                </motion.p>
            </div>

            {/* Call-to-Actions */}
            <div className="mt-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.a
                    href="#about"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md transition duration-300"
                >
                    Work With Me
                </motion.a>
                <motion.a
                    href="#portfolio"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                    className="bg-transparent border-2 border-cyan-500 hover:bg-cyan-600 hover:border-cyan-600 text-cyan-500 hover:text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md transition duration-300"
                >
                    View My Work
                </motion.a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-5 flex justify-center items-center">
                <motion.a
                    href="#about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
                    className="flex flex-col items-center space-y-2 text-cyan-400"
                >
                    <span className="material-icons text-3xl animate-bounce">expand_more</span>
                    <span className="text-xs text-gray-400">Scroll Down</span>
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;
