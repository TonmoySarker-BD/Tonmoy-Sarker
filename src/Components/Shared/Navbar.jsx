import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    // Handle scroll to detect active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'skills', 'education', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    const menus = (
        <>
            <li>
                <button
                    onClick={() => scrollToSection('home')}
                    className={`${activeSection === 'home' ? 'text-purple-400' : 'hover:text-purple-300'}`}
                >
                    Home
                </button>
            </li>
            <li>
                <button
                    onClick={() => scrollToSection('about')}
                    className={`${activeSection === 'about' ? 'text-purple-400' : 'hover:text-purple-300'}`}
                >
                    About Me
                </button>
            </li>
            <li>
                <button
                    onClick={() => scrollToSection('projects')}
                    className={`${activeSection === 'projects' ? 'text-purple-400' : 'hover:text-purple-300'}`}
                >
                    Projects
                </button>
            </li>
            <li>
                <button
                    onClick={() => scrollToSection('skills')}
                    className={`${activeSection === 'skills' ? 'text-purple-400' : 'hover:text-purple-300'}`}
                >
                    Skills
                </button>
            </li>
            <li>
                <button
                    onClick={() => scrollToSection('education')}
                    className={`${activeSection === 'education' ? 'text-purple-400' : 'hover:text-purple-300'}`}
                >
                    Education
                </button>
            </li>
            <li>
                <button
                    onClick={() => scrollToSection('contact')}
                    className={`${activeSection === 'contact' ? 'text-purple-400' : 'hover:text-purple-300'}`}
                >
                    Contact Me
                </button>
            </li>
        </>
    );

    // Resume download function
    const handleDownloadResume = () => {
        // Replace with your actual resume file path
        const resumeUrl = '/path/to/your/resume.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'TonmoySarker_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-gray-900 text-gray-100">
            <div className="navbar  mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52">
                            {menus}
                        </ul>
                    </div>
                    <button
                        onClick={() => scrollToSection('home')}
                        className="btn btn-ghost font-bold text-xl bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent"
                    >
                        Tonmoy Sarker
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1">
                        {menus}
                    </ul>
                </div>
                <div className="navbar-end gap-2">

                    <button
                        onClick={handleDownloadResume}
                        className="btn bg-gradient-to-r from-pink-500 to-violet-600 text-white border-none hover:opacity-90"
                    >
                        <FaDownload className="mr-2" />
                        Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;