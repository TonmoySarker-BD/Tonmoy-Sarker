import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaCode, FaServer, FaNodeJs, FaDatabase, FaHtml5, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiFirebase } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";

const SkillsSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skills = [
        { name: "React", icon: <FaReact />, color: "text-[#61DAFB]" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#38B2AC]" },
        { name: "DaisyUI", icon: "https://img.daisyui.com/images/daisyui/mark-rotating.svg", color: "text-[#38B2AC]" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "text-[#7D11F8]" },
        { name: "CSS", icon: <IoLogoCss3 />, color: "text-[#264de4]" },
        { name: "HTML", icon: <FaHtml5 />, color: "text-[#e34c26]" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-[#68A063]" },
        { name: "Express", icon: <SiExpress />, color: "text-[#000000]" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
        { name: "Rest APIs", icon: "https://i.postimg.cc/Pr0BQMbr/rest.png", color: "text-[#47A248]" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-[#FFCA28]" },
    ];


    return (
        <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                        My <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-violet-600 mx-auto"></div>
                    {/* <p className="text-gray-400 max-w-2xl mx-auto">
                        Technologies I've worked with and my proficiency level in each
                    </p> */}
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (


                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center group p-4"
                        >
                            {/* Circular container with gradient border and fade background */}
                            <div className="relative mb-4">


                                {/* Outer circular border */}
                                <div className={`w-24 h-24 rounded-full p-1 bg-gradient-to-r from-indigo-500/50 to-purple-600 border group-hover:from-pink-400 transition-all duration-300`}>
                                    {/* Inner circle container */}
                                    <div className="w-full h-full rounded-full flex items-center justify-center p-4">
                                        {/* Skill icon with color */}
                                        {typeof skill.icon === 'string' ? (
                                            // For SVG image URLs (like DaisyUI)
                                            <div className={`${skill.color} group-hover:text-purple-400 transition-colors`}>
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className="w-12 h-12 object-contain filter   brightness-100 invert-0 transition-all duration-300"
                                                />
                                            </div>
                                        ) : (
                                            // For React Icons
                                            <div className={`text-5xl ${skill.color}  transition-colors`}>
                                                {skill.icon}
                                            </div>
                                        )}
                                    </div>
                                </div>


                            </div>

                            {/* Skill name */}
                            <h3 className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors mt-2">
                                {skill.name}
                            </h3>
                        </motion.div>



                    ))}
                </div>

                {/* Categories */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { title: "Frontend", icon: <FaCode className="text-3xl" />, skills: "React, JavaScript, Tailwind CSS, Bootstrap, DaisyUI, Bootstrap, CSS, HTML" },
                        { title: "Backend", icon: <FaServer className="text-3xl" />, skills: "Node.js, Express.js, REST APIs" },
                        { title: "Database", icon: <FaDatabase className="text-3xl" />, skills: "MongoDB, Firebase" },
                    ].map((category, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-indigo-500/50 to-purple-600 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg text-white shadow-lg">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>
                            <p className="text-white">{category.skills}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;