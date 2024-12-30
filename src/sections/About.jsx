import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import Globe from 'react-globe.gl';

const About = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Data for metrics
  const yearsOfExperience = 3.5;
  const projectsCompleted = 40;

  // Technologies grouped by category with image sources
  const technologies = {
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
      { name: 'php', img: '/assets/programming_languages/php.png' },
    ],
  };

  // Slider control state
  const [currentSlider, setCurrentSlider] = useState(0);

  const handleSliderChange = (index) => {
    setCurrentSlider(index);
  };

  return (
      <div className="grid-container">
        <section id="about" className="min-h-screen flex flex-col justify-center items-center py-10 text-white">
          {/* Grid Layout: 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl px-6">
            {/* Top Left: Image Section */}
            <div className="flex justify-center items-center mb-6 md:mb-0">
              <div className="w-64 h-64 border-2 border-white rounded-lg overflow-hidden shadow-lg mb-3">
                <img
                    src="/assets/my_images/personal-%20(2).jpg"
                    alt="Natnael Alemseged Image"
                    className="w-full h-full object-center"
                />
              </div>
            </div>

            {/* Top Right: Name and Stats Section */}
            {/* Top Right: Name and Stats Section */}
            <div className="flex flex-col justify-center items-start space-y-6 space-x-20 text-center md:text-left">
              <p></p>
              <p className="text-2xl font-medium "> Hi, I am Natnael Alemseged</p>
              <p className="text-xl">Senior Mobile Developer and UI/UX Designer</p>

              {/* Experience & Projects Metrics */}
              <div className="flex space-x-8 mt-6 justify-center md:justify-start">
                <div>
                  <p className="text-lg font-semibold">Years of Experience</p>
                  <p className="text-2xl">{yearsOfExperience} years</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Projects Completed</p>
                  <p className="text-2xl">{projectsCompleted}</p>
                </div>
              </div>
            </div>

            {/* Bottom Left: Globe and Remote Work Text */}
            <div className="flex justify-center items-center flex-col space-y-10 text-center">
              <div className="rounded-3xl w-full sm:h-[180px] h-full flex justify-center items-center">
                <Globe
                    height={180}
                    width={180}
                    backgroundColor="rgba(0, 0, 0, 0)"
                    backgroundImageOpacity={0.5}
                    showAtmosphere
                    showGraticules
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                />
              </div>

              <p className="text-xl font-semibold">I'm flexible with time zones and locations</p>
              <p className="text-sm text-gray-400">
                I'm based in Addis Ababa, Ethiopia, and open to remote work worldwide.
              </p>
            </div>

            {/* Bottom Right: Technologies Section */}
            <div className="w-full">
              <p className="text-2xl text-center mb-6 mt-10">Technologies I Work With</p>

              {/* Slider controls */}
              <div className="flex justify-center space-x-4 mb-6">
                {Object.keys(technologies).map((category, index) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-full ${currentSlider === index ? 'bg-gray-800' : 'bg-gray-900'}`}
                        onClick={() => handleSliderChange(index)}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
              </div>

              {/* Slider Content */}
              <motion.div
                  key={currentSlider}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-wrap justify-center gap-6">
                {technologies[Object.keys(technologies)[currentSlider]].map((tech) => (
                    <div
                        key={tech.name}
                        className="w-32 h-40 flex flex-col justify-center items-center bg-gray-700 rounded-lg p-4">
                      <img src={tech.img} alt={tech.name} className="w-16 h-16 mb-2" />
                      <p className="text-white text-sm">{tech.name}</p>
                    </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default About;
