

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
