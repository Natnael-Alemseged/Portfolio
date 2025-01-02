import { useState } from 'react';
import { motion } from 'framer-motion';
import Globe from 'react-globe.gl';
import { useInView } from 'react-intersection-observer';

interface Technology {
  name: string;
  img: string;
}

interface Technologies {
  mobile: Technology[];
  cloud: Technology[];
  frontend: Technology[];
  backend: Technology[];
}

const About = () => {
  const yearsOfExperience: number = 3.5;
  const projectsCompleted: number = 20;

  const technologies: Technologies = {
    mobile: [
      { name: 'Flutter', img: '/assets/programming_languages/flutter.png' },
      { name: 'Kotlin', img: '/assets/programming_languages/kotlin.png' },
      { name: 'Ionic', img: '/assets/programming_languages/ionic.png' },
    ],
    cloud: [
      { name: 'AWS', img: '/assets/programming_languages/aws.png' },
      { name: 'Firebase', img: '/assets/programming_languages/firebase.png' },
    ],
    frontend: [
      { name: 'Flutter', img: '/assets/programming_languages/flutter.png' },
      { name: 'React', img: '/assets/programming_languages/react.png' },
      { name: 'Tailwind', img: '/assets/programming_languages/tailwind.png' },
      { name: 'HTML/CSS', img: '/assets/programming_languages/html+css.png' },
      { name: 'JavaScript', img: '/assets/programming_languages/javascript.png' },
      { name: 'TypeScript', img: '/assets/programming_languages/typescript.png' },
    ],
    backend: [
      { name: 'Node.js', img: '/assets/programming_languages/node-js.png' },
      { name: 'Express.js', img: '/assets/programming_languages/express-js.png' },
      { name: 'PHP', img: '/assets/programming_languages/php.png' },
    ],
  };

  const [currentSlider, setCurrentSlider] = useState<number>(0);
  const { ref: metricsRef, inView: metricsInView } = useInView({ triggerOnce: true });

  const handleSliderChange = (index: number): void => {
    setCurrentSlider(index);
  };

  return (
      <section id="about" className="min-h-screen flex flex-col justify-center items-center py-10 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl px-6">
          {/* Top Left: Image Section */}
          <div className="flex justify-center items-center mb-6 md:mb-0">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-64 h-64 border-2 border-cyan-500 rounded-lg overflow-hidden shadow-lg mb-3"
            >
              <img
                  src="/assets/my_images/personal-%20(2).jpg"
                  alt="Natnael Alemseged Image"
                  className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Top Right: Name and Stats Section */}
          <div className="flex flex-col justify-center items-center md:items-start space-y-6 text-center md:text-left md:ml-6 lg:ml-10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl font-bold"
            >
              Hi, I’m <span className="text-cyan-400">Natnael Alemseged</span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300"
            >
              Senior Mobile Developer and UI/UX Designer
            </motion.p>

            {/* Experience & Projects Metrics */}
            <div ref={metricsRef} className="flex space-x-8 mt-6 justify-center">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-lg font-semibold">Years of Experience</p>
                <p className="text-2xl font-bold text-cyan-400">
                  {metricsInView ? yearsOfExperience : 0} years
                </p>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p className="text-lg font-semibold">Projects Completed</p>
                <p className="text-2xl font-bold text-cyan-400">
                  {metricsInView ? projectsCompleted : 0}
                </p>
              </motion.div>
            </div>

            {/* Download CV Button */}
            <div className="flex justify-center space-x-4 mt-10">
              <motion.a
                  href="/path/to/your/cv.pdf"
                  download="Natnael_Alemseged_CV.pdf"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.8, delay: 1}}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all"
              >
                Preview My CV
              </motion.a>
              <motion.a
                  href="https://www.linkedin.com/in/natnael-alemseged/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.8, delay: 1.2}}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
              >
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>

          {/* Bottom Left: Globe and Remote Work Text */}
          <div className="flex justify-center items-center flex-col space-y-10 text-center">
            <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.8}}
                className="rounded-3xl w-full sm:h-[280px] h-full flex justify-center items-center"
            >
              <Globe
                  height={280}
                  width={280}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[{ lat: 9.03, lng: 38.74, text: 'Addis Ababa, Ethiopia', color: 'white', size: 15 }]}
              />
            </motion.div>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl font-semibold"
            >
              I’m flexible with time zones and locations
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm text-gray-400"
            >
              I’m based in Addis Ababa, Ethiopia, and open to remote work worldwide.
            </motion.p>
          </div>

          {/* Bottom Right: Technologies Section */}
          <div className="w-full">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl text-center mb-6 pt-8 pl-8 mt-10"
            >
              Technologies I Work With
            </motion.p>

            {/* Slider controls */}
            <div className="flex justify-center space-x-4 mb-6">
              {Object.keys(technologies).map((category, index) => (
                  <motion.button
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                      className={`px-4 py-2 rounded-full ${
                          currentSlider === index ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-300'
                      } hover:bg-cyan-600 transition-all`}
                      onClick={() => handleSliderChange(index)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </motion.button>
              ))}
            </div>

            {/* Slider Content */}
            <motion.div
                key={currentSlider}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap justify-center gap-6"
            >
              {technologies[Object.keys(technologies)[currentSlider] as keyof Technologies].map((tech: Technology) => (
                  <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.05 }}
                      className="w-32 h-40 flex flex-col justify-center items-center bg-gray-700 rounded-lg p-4 hover:bg-cyan-500 transition-all"
                  >
                    <img src={tech.img} alt={tech.name} className="w-16 h-16 mb-2" />
                    <p className="text-white text-sm">{tech.name}</p>
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default About;