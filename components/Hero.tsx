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
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-16">
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8 md:py-0">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight">
                            Hi, I'm <span className="text-primary font-bold">K. Gokul Prakash</span>
                        </h1>
                        <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
                            Full-Stack Developer
                        </h2>
                    </div>
                    
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-justify">
                        Full-stack developer with hands-on internship experience in{" "}
                        <span className="text-foreground font-medium">frontend and backend development</span>, specializing in{" "}
                        <span className="text-foreground font-medium">Java, Spring Boot, React.js, and REST APIs</span>. 
                        Experienced in building scalable web applications, database-driven systems, and production-ready features using modern frameworks and cloud platforms. 
                        Strong foundation in data structures, problem-solving, and software engineering best practices.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors duration-200"
                        >
                            Contact Me
                        </a>
                        <a
                            href="https://plum-tabina-65.tiiny.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors duration-200"
                        >
                            Resume
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        <div className="bg-card border border-border rounded-lg p-4 text-center">
                            <div className="text-2xl font-semibold text-primary mb-1">10+</div>
                            <div className="text-sm text-muted-foreground">Projects</div>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4 text-center">
                            <div className="text-2xl font-semibold text-primary mb-1">1+</div>
                            <div className="text-sm text-muted-foreground">Year Experience</div>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4 text-center">
                            <div className="text-2xl font-semibold text-primary mb-1">10+</div>
                            <div className="text-sm text-muted-foreground">Technologies</div>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    );
}
