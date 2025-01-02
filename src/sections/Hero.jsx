import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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

    // Floating Shapes Animation
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black-900 via-black-800 to-black-600 text-white overflow-hidden"
            id="home"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Shapes */}
                <motion.div
                    className="absolute w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full"
                    style={{
                        x: mousePosition.x / 20 - 100,
                        y: mousePosition.y / 20 - 100,
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
                <motion.div
                    className="absolute w-72 h-72 bg-pink-400/30 blur-2xl rounded-full"
                    style={{
                        x: mousePosition.x / 15 - 150,
                        y: mousePosition.y / 15 - 150,
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [360, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
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
                    {getGreeting()}, I’m{' '}
                    <span className="text-cyan-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
                        Natnael Alemseged
                    </span>{' '}
                    👋
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    className="text-lg sm:text-2xl text-gray-300 font-light"
                >
                    I build{' '}
                    <span className="text-cyan-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
                        scalable
                    </span>
                    ,{' '}
                    <span className="text-pink-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                        user-friendly
                    </span>
                    , and{' '}
                    <span className="text-yellow-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
                        high-performance
                    </span>{' '}
                    mobile applications.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                    className="text-sm sm:text-lg text-gray-400 max-w-3xl mx-auto"
                >
                    With a passion for clean code and intuitive design, I transform ideas into seamless digital experiences that users
                    love. Let’s create something amazing together!
                </motion.p>
            </div>

            {/* Call-to-Actions */}
            <div className="mt-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.a
                    href="#projects"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                    className="relative bg-transparent border-2 border-cyan-500 hover:bg-cyan-600 hover:border-cyan-600 text-cyan-500 hover:text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md transition duration-300 overflow-hidden group"
                    aria-label="View My Work"
                >
                    <span className="relative z-10">View My Work</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
                <motion.a
                    href="#contact"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                    className="relative bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md transition duration-300 overflow-hidden group"
                    aria-label="Let's Connect"
                >
                    <span className="relative z-10">Let’s Connect</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    aria-label="Scroll Down"
                >
                    <motion.span
                        className="material-icons text-3xl"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        expand_more
                    </motion.span>
                    <span className="text-xs text-gray-400">Scroll Down</span>
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;