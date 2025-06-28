import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import TonmoySarker from "../../assets/Tonmoy Sarker.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Hero = () => {

    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/tonmoysarkerbd/",
            icon: <FaLinkedin className="w-8 h-8" />,
            color: "hover:text-[#0A66C2]"
        },
        {
            name: "GitHub",
            url: "https://github.com/tonmoysarker-bd",
            icon: <FaGithub className="w-8 h-8" />,
            color: "hover:text-[#4078c0]"
        },
        {
            name: "Gmail",
            url: "mailto:tonmoycsebd@gmail.com",
            icon: <BiLogoGmail className="w-8 h-8" />,
            color: "hover:text-[#EA4335]"
        },
        // {
        //     name: "WhatsApp",
        //     url: "https://wa.me/yourphonenumber",
        //     icon: <FaWhatsapp className="w-5 h-5" />,
        //     color: "hover:text-[#25D366]"
        // }
    ];


    // Scroll to section function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };



    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                ease: "easeOut",
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
                ease: "easeOut",
                delay: 0.2,
            },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 2,
                delay: 0.4,
            },
        },
    };

    return (
        <section
            id="home"
            ref={ref}
            className=" flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-10 bg-gray-900 text-gray-100"
        >
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row  gap-24 items-center">
                {/* Left Side - Text Content */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={textVariants}
                    className="space-y-6"
                >
                    <motion.h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
                        Hi, I'm  {" "}
                        <span className="font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                            TONMOY SARKER
                        </span>
                    </motion.h1>

                    <motion.h2 className="text-2xl sm:text-3xl text-gray-300">
                        <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                            FullStack Web Developer
                        </span>{" "}
                        based in <br /> Bogura, Bangladesh
                    </motion.h2>

                    <motion.p className="text-lg text-gray-400 max-w-lg">
                        Welcome to <span className="font-semibold">Tonmoy Sarker</span> 's Portfolio, a passionate <span className="font-semibold">Full Stack Web Developer</span> skilled in <span className="font-semibold">React</span>, <span className="font-semibold">Node.js</span>, <span className="font-semibold">Express.js</span>, <span className="font-semibold">MongoDB</span>, and <span className="font-semibold">Firebase</span>. I craft fast, responsive, and user-friendly web applications using <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span>, <span className="font-semibold">JavaScript</span>, <span className="font-semibold">Tailwind CSS</span>, and <span className="font-semibold">DaisyUI</span>. Let’s build powerful digital experiences together. I create beautiful, functional digital experiences with a focus on
                        user-centered design and clean code.
                    </motion.p>




                    {/* Social Links */}
                    <motion.div
                        className="flex gap-10 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-400 ${link.color} transition-colors duration-300`}
                                whileHover={{
                                    y: -3,
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                                aria-label={link.name}
                            >
                                <div className="flex items-center gap-2">
                                    {link.icon}
                                    <span className="hidden sm:inline-block">{link.name}</span>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>


                    {/* Action Buttons */}
                    <motion.div
                        variants={buttonVariants}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <motion.button
                            onClick={() => scrollToSection('projects')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium"
                        >
                            View My Work
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-lg border border-gray-600 text-gray-300 font-medium hover:bg-gray-800 transition-colors"
                        >
                            Contact Me
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={imageVariants}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-full max-w-md">
                        <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-violet-600 rounded-2xl opacity-50 blur-xl"></div>
                        <div className="relative bg-gray-800 rounded-2xl overflow-hidden aspect-square">
                            <motion.img
                                src={TonmoySarker}
                                alt="Your Name"
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;