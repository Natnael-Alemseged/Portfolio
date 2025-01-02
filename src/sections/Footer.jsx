import '../index.css';

const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p className="flex justify-between items-center">
                    Always striving for better things
                    <span>🚀</span>
                </p>
            </div>
            <div>
                <div className="flex gap-3">
                    <a
                        href="https://github.com/Natnael-Alemseged/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon hover:opacity-80 transition-opacity relative group"
                        aria-label="GitHub"
                    >
                        <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6"/>
                        <span className="tooltip">Visit my GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/natnael-alemseged/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon hover:opacity-80 transition-opacity relative group bg-white"
                        aria-label="LinkedIn"
                    >
                        <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-6 h-6 bg-white"/>
                        <span className="tooltip">Connect on LinkedIn</span>
                    </a>
                </div>
            </div>
            <p className="text-white-500">© 2025 Natnael Alemseged. All rights reserved.</p>
        </footer>
    );
};

export default Footer;