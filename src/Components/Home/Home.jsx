import React from 'react';
import Hero from './Hero';
import Aboutme from './Aboutme';
import ProjectsSection from './ProjectsSection';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Aboutme></Aboutme>
            <ProjectsSection></ProjectsSection>
        </div>
    );
};

export default Home;