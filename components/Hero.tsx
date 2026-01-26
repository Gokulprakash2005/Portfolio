"use client";

import { HiArrowDown } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Particle Background */}
            <div className="particles-bg">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 20}s`,
                            animationDuration: `${15 + Math.random() * 10}s`
                        }}
                    />
                ))}
            </div>

            {/* Interactive Background Orbs */}
            <div 
                className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl floating glow-purple"
                style={{
                    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                }}
            ></div>
            <div 
                className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl floating glow-blue" 
                style={{ 
                    animationDelay: "2s",
                    transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
                }}
            ></div>
            <div 
                className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl floating glow-pink" 
                style={{ 
                    animationDelay: "4s",
                    transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="fade-in-up animate">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 floating">
                        Hi, I'm <span className="gradient-text-hero">K.Gokul Prakash</span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground mb-8 font-medium typing-animation">
                        Full-Stack Developer
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed fade-in-up animate" style={{ animationDelay: "0.3s" }}>
                        Skilled in modern web technologies with hands-on experience across{" "}
                        <span className="gradient-text font-semibold">frontend, backend, database, and deployment</span>. 
                        Worked on real-world SaaS products in a startup environment using{" "}
                        <span className="gradient-text font-semibold">Next.js, Neon DB, and AI-assisted development tools</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up animate" style={{ animationDelay: "0.6s" }}>
                        <a
                            href="#projects"
                            className="btn-3d px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 glass"
                        >
                            🚀 Explore My Work
                        </a>
                        <a
                            href="#contact"
                            className="btn-3d px-10 py-5 bg-transparent border-2 border-purple-500 text-purple-500 rounded-xl font-bold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 glass magnetic"
                        >
                            💬 Let's Connect
                        </a>
                    </div>

                    {/* 3D Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto fade-in-up animate" style={{ animationDelay: "0.9s" }}>
                        <div className="card-3d glass rounded-2xl p-6 text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                            <div className="text-muted-foreground">Projects Completed</div>
                        </div>
                        <div className="card-3d glass rounded-2xl p-6 text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">1+</div>
                            <div className="text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="card-3d glass rounded-2xl p-6 text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                            <div className="text-muted-foreground">Technologies</div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <a href="#about" aria-label="Scroll to about section" className="magnetic">
                        <div className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <HiArrowDown className="w-6 h-6 text-purple-500" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
