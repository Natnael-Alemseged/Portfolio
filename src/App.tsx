import Hero from './sections/Hero.jsx';  // Assuming Hero is a .jsx file
import About from './sections/About.jsx'; // Assuming About is a .jsx file
import Footer from './sections/Footer.jsx'; // Assuming Footer is a .jsx file
import Navbar from './sections/Navbar.jsx'; // Assuming Navbar is a .jsx file
import Contact from './sections/Contact.jsx'; // Assuming Contact is a .jsx file
import Clients from './sections/Clients.jsx'; // Assuming Clients is a .jsx file
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience';

const App: React.FC = () => {
    return (
        <main className="max-w-7xl mx-auto relative">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Clients />
            <WorkExperience />
            <Contact />
            <Footer />
        </main>
    );
};

export default App;
