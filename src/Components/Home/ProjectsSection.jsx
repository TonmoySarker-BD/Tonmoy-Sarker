import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const projectsData = [
    {
        title: "🌿 Greenhaven ( A Online community For Garden Enthusiasts )",
        description: "Green Haven is a vibrant online community and resource hub designed for gardening enthusiasts. Whether you're passionate about composting, hydroponics, balcony gardens, or seasonal planting, this platform empowers users to share knowledge, participate in events, and connect with fellow gardeners.",
        tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
        image: "https://i.postimg.cc/pd7QKNZT/greenhaven.png",
        github: "https://github.com/TonmoySarker-BD/Greenhaven",
        demo: "https://greenhavenus.web.app/"
    },
    {
        title: "Coursion ( A Modern Learning and Teaching Platform)",
        description: "Coursion is a modern, full-stack online learning platform designed for scalability, performance, and a seamless user experience. Built with React, Express, MongoDB, and Firebase, it allows users to explore, purchase, and complete courses with ease.",
        tags: ["React", "Firebase", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        image: "https://i.postimg.cc/RF2RxWb4/coursion-1.png",
        github: "https://github.com/TonmoySarker-BD/Coursion",
        demo: "https://coursion.web.app"
    },
    {
        title: "Job Pulse ( Modern Job Searching Solutions )",
        description: "JobPulse is a modern job portal designed to connect job seekers with global opportunities. The platform offers an intuitive interface for browsing jobs, exploring companies, and accessing career resources. To provide a seamless experience for job seekers to find international job opportunities across various industries and career levels.",
        tags: ["React", "Firebase", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
        image: "https://i.postimg.cc/9X7Q13W9/jobpulse.png",
        github: "https://github.com/TonmoySarker-BD/Job-Pulse",
        demo: "https://jobpulseglobal.web.app"
    }
];

const ProjectCard = ({ project, reverseLayout = false }) => {
    const imageContainerRef = useRef(null);
    const mobileImageContainerRef = useRef(null);
    const controls = useAnimation();
    const mobileControls = useAnimation();

    // Auto-scroll for desktop
    useEffect(() => {
        const container = imageContainerRef.current;
        if (!container) return;

        const image = container.querySelector('img');
        if (!image) return;

        if (image.clientHeight > container.clientHeight) {
            const scrollDistance = image.clientHeight - container.clientHeight;

            const sequence = async () => {
                await controls.start({
                    y: -scrollDistance,
                    transition: {
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                });
            };

            sequence();
        }
    }, [controls]);

    // Auto-scroll for mobile
    useEffect(() => {
        const container = mobileImageContainerRef.current;
        if (!container) return;

        const image = container.querySelector('img');
        if (!image) return;

        if (image.clientHeight > container.clientHeight) {
            const scrollDistance = image.clientHeight - container.clientHeight;

            const sequence = async () => {
                await mobileControls.start({
                    y: -scrollDistance,
                    transition: {
                        duration: 10,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                });
            };

            sequence();
        }
    }, [mobileControls]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`mb-20 md:mb-8 last:mb-0 ${reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'}`}
        >
            {/* Mobile Layout with auto-scroll */}
            <div className="md:hidden bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div
                    ref={mobileImageContainerRef}
                    className="h-86 overflow-hidden relative"
                    style={{ height: '300px' }} // Slightly smaller for mobile
                >
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover absolute top-0 left-0"
                        animate={mobileControls}
                        initial={{ y: 0 }}
                    />
                </div>
                <div className="p-6">
                    <ProjectContent project={project} />
                </div>
            </div>

            {/* Desktop Layout with auto-scroll */}
            <div className="hidden md:flex gap-2 border-2 p-5 rounded-2xl items-center">
                <motion.div
                    className={`flex-1 ${reverseLayout ? 'order-2' : 'order-1'}`}
                    whileHover={{ scale: 1.02 }}
                >
                    <div
                        ref={imageContainerRef}
                        className="rounded-xl h-86 overflow-hidden border border-gray-700 relative"
                        style={{ height: '400px' }}
                    >
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover absolute top-0 left-0"
                            animate={controls}
                            initial={{ y: 0 }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    className={`flex-1 ${reverseLayout ? 'order-1 pr-8' : 'order-2 pl-8'}`}
                    initial={{ opacity: 0, x: reverseLayout ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <ProjectContent project={project} />
                </motion.div>
            </div>
        </motion.div>
    );
};

const ProjectContent = ({ project }) => {
    return (
        <>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{project.title}</h3>
            <p className="text-gray-300 mb-5 md:mb-6 md:text-lg">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-sm md:text-base rounded-full bg-gray-700 text-gray-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex gap-4">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                    <FaGithub className="text-lg" /> Code
                </a>
                <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                    <FaExternalLinkAlt className="text-lg" /> Live Demo
                </a>
            </div>
        </>
    );
};

const ProjectsSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="projects" ref={ref} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                        My <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-violet-600 mx-auto"></div>
                </motion.div>

                {/* Projects List */}
                <div className="space-y-12 md:space-y-28">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            reverseLayout={index % 2 === 0} // Alternate layout for even items
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;