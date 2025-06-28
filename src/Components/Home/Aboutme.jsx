import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Aboutme = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            id="about"
            ref={ref}
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-100"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                    >
                        About <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Me</span>
                    </motion.h2>
                    <motion.div
                        variants={itemVariants}
                        className="w-20 h-1 bg-gradient-to-r from-pink-500 to-violet-600 mx-auto"
                    ></motion.div>
                </motion.div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full max-w-md">
                            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-violet-600 rounded-2xl opacity-20 blur-xl"></div>
                            <div className="relative bg-gray-800 rounded-2xl overflow-hidden aspect-square border-2 border-gray-700">
                                <img
                                    src="/tonmoysarker.jpg" // Replace with your image
                                    alt="Tonmoy Sarker"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Text */}
                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="space-y-6"
                    >
                        <motion.h3
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl font-bold"
                        >
                            I'm <span className="text-purple-400">Tonmoy Sarker</span>
                        </motion.h3>

                        <motion.div
                            variants={itemVariants}
                            className="space-y-4 text-gray-300 text-lg"
                        >
                            <p>
                                I'm a <span className="text-purple-400">passionate Full Stack Developer</span> fresh out of
                                <span className="font-medium"> Bogura Polytechnic Institute </span>
                                with a Diploma in Computer Science and a
                                <span className="font-medium"> Level 3 Web Development Certification </span>
                                from NSDA, complemented by <span className="font-medium">  1+ year of hands-on experience </span> developing full-stack solutions.
                            </p>

                            <p>
                                My toolkit includes:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                    <span>React & JavaScript</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                    <span>Node.js & Express</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                    <span>Tailwind CSS</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                    <span>MongoDB</span>
                                </div>
                            </div>

                            {/* <p>
                                I've built <span className="font-medium">10+ projects</span> showcasing my ability to transform ideas
                                into functional applications. My strength lies in writing clean, efficient code
                                and creating intuitive user experiences.
                            </p> */}

                            <p>
                                When I'm not coding, I contribute to open-source projects and stay updated
                                with the latest web technologies. I'm excited to begin my professional journey
                                and grow with a team that values innovation.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="pt-4"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <span className="text-purple-400 font-medium mr-2">Name:</span>
                                    <span>Tonmoy Sarker</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-purple-400 font-medium mr-2">Email:</span>
                                    <a href="mailto:tonmoysarker.bd@gmail.com" className="hover:text-purple-300 transition-colors">
                                        tonmoycsebd@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-purple-400 font-medium mr-2">From:</span>
                                    <span>Bogura, Bangladesh</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-purple-400 font-medium mr-2">Experience:</span>
                                    <span>1+ year hands-on </span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex gap-4 pt-6"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium"
                            >
                                Contact Me
                            </motion.a>
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 font-medium hover:bg-gray-800 transition-colors"
                            >
                                View Projects
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Aboutme;