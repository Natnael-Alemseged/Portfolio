import emailjs from '@emailjs/browser';
import {useRef, useState} from 'react';
import {format} from 'date-fns';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
    const formRef = useRef();
    const {alert, showAlert, hideAlert} = useAlert();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({name: '', email: '', message: ''});

    // Handle form input changes
    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return; // Prevent multiple submissions

        setLoading(true);

        try {

            const date = new Date();
            const date_time = format(new Date(), 'MMMM dd, yyyy hh:mm a');

            const response = await emailjs.send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    date_time: date_time,
                    to_name: 'Natnael Alemseged', // Replace with your name or brand
                    from_email: form.email,
                    to_email: 'natnaelworkmail@gmail.com', // Replace with your email
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            );
            console.log('EmailJS Response:', response);
            showAlert({
                show: true,
                text: 'Thank you for your message! 😃',
                type: 'success',
            });

            // Reset form after successful submission
            setTimeout(() => {
                hideAlert();
                setForm({name: '', email: '', message: ''});
            }, 3000);
        } catch (error) {
            console.error('Failed to send message:', error);
            showAlert({
                show: true,
                text: "Oops! I didn't receive your message. 😢",
                type: 'danger',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <section className="c-space my-20" id="contact">
            {alert.show && <Alert {...alert} />}

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img
                    src="/assets/terminal.png"
                    alt="terminal background"
                    className="absolute inset-0 min-h-screen object-cover"
                    aria-hidden="true"
                />

                <div className="contact-container bg-black bg-opacity-0 p-8 rounded-lg shadow-lg ">
                    <h3 className="head-text">Let's Talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique
                        project to
                        life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., John Doe"
                                aria-label="Full Name"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email Address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                                aria-label="Email Address"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                                aria-label="Your Message"
                            />
                        </label>

                        <button
                            className="field-btn flex items-center justify-center gap-2"
                            type="submit"
                            disabled={loading}
                            aria-label="Send Message"
                        >
                            {loading ? (
                                <>
                                    <span className="animate-spin">↻</span>
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>


        </>
    );
};

export default Contact;