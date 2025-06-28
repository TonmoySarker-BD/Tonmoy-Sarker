import React from 'react';

const Hero = () => {
    return (
        <section id='home' className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Hello, I'm Tonmoy Sarker</h1>
                    <p className="py-6">I am a passionate web developer with a focus on creating dynamic and responsive web applications.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className="w-1/2">
                    <img src="/path/to/your/image.jpg" alt="Tonmoy Sarker" className="rounded-lg shadow-2xl" />
                </div>
            </div>
        </section>
    );
};

export default Hero;