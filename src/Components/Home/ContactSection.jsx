import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ContactSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Send email using EmailJS
        // Make sure to replace  with your actual service ID and template ID And user ID
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            data,
            import.meta.env.VITE_EMAILJS_USER_ID
        )
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Message sent successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 3000
                });
                reset();
            }, (error) => {

                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to send message. Please try again later.', error,
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 3000
                });
            });
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-xl" />,
            title: "Phone",
            value: "+880 1701 521 921",
            link: "tel:+8801701521921"
        },
        {
            icon: <FaEnvelope className="text-xl" />,
            title: "Email",
            value: "tonmoycsebd@gmail.com",
            link: "mailto:tonmoycsebd@gmail.com"
        },
        {
            icon: <FaMapMarkerAlt className="text-xl" />,
            title: "Location",
            value: "Bogura, Bangladesh",
            link: "https://maps.google.com/?q=Bogura,Bangladesh"
        }
    ];

    return (
        <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-violet-600 mx-auto"></div>
                </motion.div>

                {/* Contact Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                        <p className="text-gray-400">
                            Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="p-3 rounded-full bg-gray-800 text-purple-400">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-300">{item.title}</h4>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-purple-400 transition-colors"
                                        >
                                            {item.value}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-700"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                                    placeholder="Your name"
                                />
                                {errors.name && <p className="text-red-400 mt-1 text-sm">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                                    placeholder="your.email@example.com"
                                />
                                {errors.email && <p className="text-red-400 mt-1 text-sm">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    {...register("message", { required: "Message is required" })}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                                    placeholder="Hello Tonmoy, I'd like to talk about..."
                                ></textarea>
                                {errors.message && <p className="text-red-400 mt-1 text-sm">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                            >
                                <FaPaperPlane />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;