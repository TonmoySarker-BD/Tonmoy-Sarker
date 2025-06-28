import React from 'react';
import Hero from './Hero';
import Aboutme from './Aboutme';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Aboutme></Aboutme>
            <ProjectsSection></ProjectsSection>
            <SkillsSection></SkillsSection>
        </div>
    );
};

export default Home;