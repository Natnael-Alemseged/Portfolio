// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { Suspense, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Center, OrbitControls } from '@react-three/drei';
//
// import { myProjects } from '../constants/index.js';
// import CanvasLoader from '../components/Loading.jsx';

// import DemoPhone from "../components/DemoPhone.jsx";
//
// const projectCount = myProjects.length;
//
// const Projects = () => {
//   const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
//
//   const handleNavigation = (direction) => {
//     setSelectedProjectIndex((prevIndex) => {
//       if (direction === 'previous') {
//         return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
//       } else {
//         return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
//       }
//     });
//   };
//
//   useGSAP(() => {
//     gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
//   }, [selectedProjectIndex]);
//
//   const currentProject = myProjects[selectedProjectIndex];
//
//   return (
//     <section className="c-space my-20">
//       <p className="head-text">My Selected Projects</p>
//
//       <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
//         <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-white-500">
//           <div className="absolute top-0 right-0">
//             <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl"/>
//           </div>
//
//           {/*fixme hiding project logos for now */}
//           {/*<div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>*/}
//           {/*  <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo"/>*/}
//           {/*</div>*/}
//
//           <div className="flex flex-col gap-5 text-white-600 my-5">
//             <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
//
//             <p className="animatedText">{currentProject.desc}</p>
//             <p className="animatedText">{currentProject.subdesc}</p>
//           </div>
//
//           <div className="flex items-center justify-between flex-wrap gap-5">
//             <div className="flex items-center gap-3">
//               {currentProject.tags.map((tag, index) => (
//                   <div key={index} className="tech-logo flex flex-col items-center">
//                     <img src={tag.path} alt={tag.name} className="w-10 h-10"/>
//                     <span className="text-white text-sm mt-2">{tag.name}</span>
//                   </div>
//               ))}
//             </div>
//
//             <a
//                 className="flex items-center gap-2 cursor-pointer text-white-600"
//                 href={currentProject.href}
//                 target="_blank"
//                 rel="noreferrer">
//               <p>Check Live Site</p>
//               <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3"/>
//             </a>
//           </div>
//
//           <div className="flex justify-between items-center mt-7">
//             <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
//               <img src="/assets/left-arrow.png" alt="left arrow"/>
//             </button>
//
//             <button className="arrow-btn" onClick={() => handleNavigation('next')}>
//               <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>
//             </button>
//           </div>
//         </div>
//
//         {/*<div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">*/}
//         <div
//             className="flex items-center justify-center border border-whites   bg-gray-500 rounded-lg h-96 md:h-full">
//
//           <Canvas>
//             <ambientLight intensity={Math.PI}/>
//             <directionalLight position={[10, 10, 5]}/>
//             <Center>
//               <Suspense fallback={<CanvasLoader/>}>
//                 <group scale={5} position={[2, -4.3, 2]} rotation={[0, -0.5, 0]}>
//                   {/*<DemoComputer texture={currentProject.texture} />*/}
//                   <DemoPhone texture={currentProject.texture}/>
//                 </group>
//               </Suspense>
//             </Center>
//             <OrbitControls maxPolarAngle={Math.PI / 2}  enableZoom={false}
//                            enablePan={false} />
//           </Canvas>
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default Projects;


import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {Suspense, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {Center, OrbitControls} from '@react-three/drei';

import {myProjects} from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoPhone from "../components/DemoPhone.jsx";

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(`.animatedText`, {opacity: 0}, {opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut'});
    }, [selectedProjectIndex]);

    const currentProject = myProjects[selectedProjectIndex];

    return (
        <section className="c-space my-20" id="projects">
            <p className="head-text">My Selected Projects</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-white-500">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight"
                             className="w-full h-96 object-cover rounded-xl"/>
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-3 flex-wrap">
                                {currentProject.tags.map((tag, index) => (
                                    <div key={index} className="tech-logo flex flex-col items-center">
                                        <img src={tag.path} alt={tag.name} className="w-10 h-10"/>
                                        <span className="text-white text-sm mt-2">{tag.name}</span>
                                    </div>
                                ))}
                            </div>

                            {currentProject.isLinkGithub == null ? (

                                currentProject.title === 'Mood Ride' ? <div>

                                        <a
                                            className="flex items-center justify-center gap-2 cursor-pointer text-white-600 hover:bg-gray-600/20 rounded-lg px-4 py-2 transition-all duration-300 ease-in-out border border-gray-200 hover:border-gray-400 hover:shadow-md"
                                            href={"https://drive.google.com/file/d/1qdyDqI3erlpvYutLSsjw9ZpZcBBzuKeN/view?usp=sharing"}
                                            target="_blank"
                                            rel="noreferrer"
                                        ><>
                                            <p>Download Mood Ride Passenger</p>
                                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3"/>
                                        </>
                                        </a>
                                        <div className={" py-2"}></div>
                                        <a
                                            className="flex items-center justify-center gap-2 cursor-pointer text-white-600 hover:bg-gray-600/20 rounded-lg px-4 py-2 transition-all duration-300 ease-in-out border border-gray-200 hover:border-gray-400 hover:shadow-md"
                                            href={"https://drive.google.com/file/d/1lYC0c51NRfyo0zs5XWgIgnZ0vJv-KUFT/view?usp=sharing"}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <>
                                                <p>Download Mood Ride Driver</p>
                                                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3"/>
                                            </>
                                        </a>

                                    </div> :

                                    <div
                                        className="flex items-center justify-center gap-2 text-white-600 rounded-lg px-4 py-2 border border-gray-200 opacity-50 cursor-not-allowed">
                                        <p>Awaiting Release</p>
                                    </div>
                            ) : (
                                <a
                                    className="flex items-center justify-center gap-2 cursor-pointer text-white-600 hover:bg-gray-600/20 rounded-lg px-4 py-2 transition-all duration-300 ease-in-out border border-gray-200 hover:border-gray-400 hover:shadow-md"
                                    href={currentProject.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {currentProject.isLinkGithub === true ? (
                                        <>
                                            <p>Check The Git Repo</p>
                                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3"/>
                                        </>
                                    ) : (
                                        <>
                                            <p>Check The App </p>
                                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3"/>
                                        </>
                                    )}
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow"/>
                        </button>

                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>
                        </button>
                    </div>
                </div>

                <div
                    className="flex items-center justify-center border border-whites bg-gray-500 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={Math.PI}/>
                        <directionalLight position={[10, 10, 5]}/>
                        <Center>
                            <Suspense fallback={<CanvasLoader/>}>
                                <group scale={5} position={[2, -4.3, 2]} rotation={[0, -0.5, 0]}>
                                    <DemoPhone texture={currentProject.texture}/>
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false}/>
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Projects;