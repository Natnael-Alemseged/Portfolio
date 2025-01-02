<section className="c-space my-20" id="linked_IN">
    {alert.show && <Alert {...alert} />}

    <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
            src="/assets/terminal.png"
            alt="terminal background"
            className="absolute inset-0 min-h-screen object-cover"
            aria-hidden="true"
        />

        <div className="contact-container bg-black bg-opacity-0 p-8 rounded-lg shadow-lg">
            <h3 className="head-text">Let's Talk</h3>
            <p className="text-lg text-white-600 mt-3">
                Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
                life, I’m here to help.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                {/* Form fields */}
            </form>

            {/* LinkedIn CTA Section */}
            <div className="mt-8 text-center">
                <p className="text-lg text-white-600 mb-4">
                    Prefer to connect on LinkedIn? Feel free to reach out!
                </p>
                <a
                    href="https://www.linkedin.com/in/your-linkedin-profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors"
                >
                    <img
                        src="/assets/linkedin-icon.png"
                        alt="LinkedIn"
                        className="w-6 h-6 mr-2"
                    />
                    Connect on LinkedIn
                </a>
            </div>
        </div>
    </div>
</section>