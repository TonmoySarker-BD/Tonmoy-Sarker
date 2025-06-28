import React from 'react';
import Hero from './Hero';
import Aboutme from './Aboutme';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import EducationSection from './EducationSection';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Aboutme></Aboutme>
            <ProjectsSection></ProjectsSection>
            <SkillsSection></SkillsSection>
            <EducationSection></EducationSection>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;