import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/tonmoysarker-bd",
            icon: <FaGithub className="text-xl" />,
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/tonmoysarkerbd",
            icon: <FaLinkedin className="text-xl" />,
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/+8801701521921",
            icon: <FaWhatsapp className="text-xl" />
        },
        {
            name: "Email",
            url: "mailto:tonmoycsebd@gmail.com",
            icon: <FaEnvelope className="text-xl" />,
        },
    ];

    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white">
                            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                                Tonmoy Sarker
                            </span>
                        </h3>
                        <p className="text-sm">
                            Full Stack Developer creating modern web applications with React, Node.js, and MongoDB.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3 }}
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h3 className="text-lg font-bold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#home"
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-lg font-bold text-white">Contact</h3>
                        <address className="not-italic space-y-2">
                            <p className="flex items-center">
                                <FaEnvelope className="mr-2 text-purple-400" />
                                <a
                                    href="mailto:tonmoycsebd@gmail.com"
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    tonmoycsebd@gmail.com
                                </a>
                            </p>
                            <p className="flex items-center">
                                <FaMapMarkerAlt className="mr-2 text-purple-400" />
                                Bogura, Bangladesh
                            </p>
                        </address>
                    </motion.div>
                </div>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 to-violet-600 p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
                >
                    <FaArrowUp className="text-white" />
                </button>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 pt-8 border-t border-gray-800 text-center"
                >
                    <p className="text-sm">
                        &copy; {currentYear} Tonmoy Sarker. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;