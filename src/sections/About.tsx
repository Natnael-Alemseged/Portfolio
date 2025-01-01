import { useState } from 'react';
import { motion } from 'framer-motion';
import Globe from 'react-globe.gl';

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
  const projectsCompleted: number = 40;

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

  const handleSliderChange = (index: number): void => {
    setCurrentSlider(index);
  };

  return (
      <div className="grid-container">
        <section id="about" className="min-h-screen flex flex-col justify-center items-center py-10  text-white">
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

            <div
                className="flex flex-col justify-center items-center md:items-start space-y-6 text-center md:text-left md:ml-6 lg:ml-10">
              <p className="text-2xl font-medium">Hi, I am Natnael Alemseged</p>
              <p className="text-xl">Senior Mobile Developer and UI/UX Designer</p>

              {/* Experience & Projects Metrics */}
              <div className="flex space-x-8 mt-6 justify-center">
                <div>
                  <p className="text-lg font-semibold">Years of Experience</p>
                  <p className="text-2xl">{yearsOfExperience} years</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Projects Completed</p>
                  <p className="text-2xl">{projectsCompleted}</p>
                </div>
              </div>

              {/* Download CV Button */}
              <div className="flex justify-center space-x-14 mt-10">
                <a
                    href="/path/to/your/cv.pdf"
                    download="Natnael_Alemseged_CV.pdf"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center"
                >
                  Preview My CV
                </a>
                <a
                    href="/path/to/your/cv.pdf"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center"
                >
                  Let's Connect
                </a>
              </div>
            </div>


            {/* Bottom Left: Globe and Remote Work Text */}
            <div className="flex justify-center items-center flex-col space-y-10 text-center">
              <div className="rounded-3xl w-full sm:h-[280  px] h-full flex justify-center items-center">
                <Globe
                    height={280}
                    width={280}
                    backgroundColor="rgba(0, 0, 0, 0)"
                    showAtmosphere
                    showGraticules
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    labelsData={[{lat: 9.03, lng: 38.74, text: 'Addis Ababa, Ethiopia', color: 'white', size: 15}]}

                />
              </div>

              <p className="text-xl font-semibold">I'm flexible with time zones and locations</p>
              <p className="text-sm text-gray-400">
                I'm based in Addis Ababa, Ethiopia, and open to remote work worldwide.
              </p>
            </div>
            {/*http-server ./dist*/}
            {/* Bottom Right: Technologies Section */}
            <div className="w-full">
              <p className="text-2xl text-center mb-6 pt-8 pl-8 mt-10">Technologies I Work With</p>

              {/* Slider controls */}
              <div className="flex justify-center space-x-4 mb-6">
                {Object.keys(technologies).map((category, index) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-full ${currentSlider === index ? 'bg-gray-800' : 'bg-gray-900'}`}
                        onClick={() => handleSliderChange(index)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
              </div>

              {/* Slider Content */}
              <motion.div
                  key={currentSlider}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  transition={{duration: 0.5}}
                  className="flex flex-wrap justify-center gap-6"
              >
                {technologies[Object.keys(technologies)[currentSlider] as keyof Technologies].map((tech: Technology) => (
                    <div
                        key={tech.name}
                        className="w-32 h-40 flex flex-col justify-center items-center bg-gray-700 rounded-lg p-4"
                    >
                      <img src={tech.img} alt={tech.name} className="w-16 h-16 mb-2"/>
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
