import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    period: "Aug 2019 – Jan 2024",
    degree: "Diploma in Engineering",
    field: "Computer Science & Technology",
    institution: "Bogura Polytechnic Institute",
    result: "CGPA: 3.52 / 4.00",
    icon: <FaGraduationCap />,
  },
  {
    id: 2,
    period: "Jan 2017 – Jul 2019",
    degree: "Secondary School Certificate",
    field: "Science",
    institution: "Tulshighat KN High School",
    result: "GPA: 4.17 / 5.00",
    icon: <FaSchool />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const EducationSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>{" "}
            Journey
          </h2>
          <p className="text-gray-400 mt-2">Where I’ve studied and what I’ve learned</p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-12 sm:grid-cols-2">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              className="relative bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden p-6 shadow-lg hover:shadow-purple-800/20 transition-all"
            >
              {/* Icon Badge */}
              <div className=" left-6 w-12 h-12 bg-purple-600 text-white flex items-center justify-center rounded-full shadow-md text-xl">
                {edu.icon}
              </div>

              <div className="pt-8">
                <p className="text-sm text-purple-400 mb-1">{edu.period}</p>
                <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-purple-300 mb-1">{edu.field}</p>
                <p className="text-gray-300 mb-3">{edu.institution}</p>
                <span className="inline-block text-sm px-3 py-1 rounded-full bg-gray-800 text-white border border-gray-600">
                  {edu.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
