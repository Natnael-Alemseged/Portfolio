const Footer = () => {
    return (
        <footer
            className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p className="flex justify-between items-center">
                    Always striving for better things
                    <span>🚀</span>
                </p>

            </div>
            <div>

                <div className="flex gap-3">
                    <a href="https://github.com/Natnael-Alemseged/">
                        <div className="social-icon">
                            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/natnael-alemseged/">
                        <div className="social-icon ">

                            <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-1/2 h-1/2 bg-white"/>

                        </div>
                    </a>

                </div>
            </div>
            <p className="text-white-500">© 2025 Natnael Alemseged. All rights reserved.</p>
        </footer>
    );
};

export default Footer;