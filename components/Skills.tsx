"use client";

import {
    SiNextdotjs,
    SiReact,
    SiMysql,
    SiSpringboot,
    SiPostman,
    SiVercel,
    SiGit,
    SiGithub,
    SiAmazon,
    SiPuppeteer,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
} from "react-icons/si";
import { BiData } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useEffect, useRef } from "react";

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const skillCards = entry.target.querySelectorAll('.skill-card');
                        skillCards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('animate');
                            }, index * 100);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skills = [
        { name: "React.js", icon: SiReact, color: "hover:text-cyan-400", level: 90, category: "frontend" },
        { name: "JavaScript", icon: SiJavascript, color: "hover:text-yellow-400", level: 90, category: "frontend" },
        { name: "Java", icon: FaJava, color: "hover:text-red-500", level: 88, category: "backend" },
        { name: "Spring Boot", icon: SiSpringboot, color: "hover:text-green-500", level: 85, category: "backend" },
        { name: "SQL", icon: BiData, color: "hover:text-blue-600", level: 80, category: "database" },
        { name: "Git", icon: SiGit, color: "hover:text-orange-600", level: 85, category: "tools" },
    ];

    const aiTechnologies = [
        { name: "Amazon Q", icon: SiAmazon, color: "hover:text-orange-400", level: 85 },
        { name: "Antigravity", icon: BiData, color: "hover:text-purple-500", level: 80 },
        { name: "Cursor", icon: BiData, color: "hover:text-blue-500", level: 90 },
    ];

    const toolsUsed = [
        { name: "Vercel", icon: SiVercel, color: "hover:text-black dark:hover:text-white", level: 90 },
        { name: "MySQL", icon: SiMysql, color: "hover:text-blue-600", level: 80 },
        { name: "Postman", icon: SiPostman, color: "hover:text-orange-500", level: 85 },
        { name: "GitHub", icon: SiGithub, color: "hover:text-black dark:hover:text-white", level: 90 },
        { name: "Neon DB", icon: BiData, color: "hover:text-teal-400", level: 75 },
    ];

    const categories = [
        { name: "Frontend Development", icon: "🎨", skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"], color: "from-blue-500 to-cyan-500" },
        { name: "Backend Development", icon: "⚙️", skills: ["Spring Boot", "REST API", "Java", "Node.js"], color: "from-green-500 to-teal-500" },
        { name: "Database & Cloud", icon: "☁️", skills: ["MySQL", "Neon DB", "Vercel", "AWS"], color: "from-purple-500 to-pink-500" },
        { name: "Tools & Automation", icon: "🛠️", skills: ["Git", "GitHub", "Postman", "Puppeteer"], color: "from-orange-500 to-red-500" }
    ];

    return (
        <section ref={sectionRef} id="skills" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl floating"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl floating" style={{ animationDelay: "2s" }}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl floating" style={{ animationDelay: "4s" }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 fade-in-up animate">
                    <div className="inline-flex items-center gap-2 mb-4">
                        
                        <h2 className="text-4xl md:text-5xl font-bold  gradient-text-alt ">
                            Skills & Technologies
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4"></div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        My comprehensive technical arsenal for building next-generation applications
                    </p>
                </div>

                {/* Skills Grid with 3D Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={index}
                                className="skill-card fade-in-up card-3d glass rounded-2xl p-6 flex flex-col items-center justify-center group relative overflow-hidden"
                            >
                                <div className="floating mb-4">
                                    <Icon className={`w-12 h-12 text-muted-foreground transition-all duration-500 ${skill.color} group-hover:scale-125 group-hover:drop-shadow-lg`} />
                                </div>
                                
                                <span className="text-sm font-medium text-foreground text-center group-hover:gradient-text transition-all duration-300">
                                    {skill.name}
                                </span>

                                <div className="w-full mt-3 skill-bar h-1 rounded-full">
                                    <div 
                                        className="skill-progress h-full rounded-full"
                                        style={{ 
                                            animationDelay: `${index * 0.1}s`,
                                            transform: `scaleX(${skill.level / 100})`
                                        }}
                                    ></div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                            </div>
                        );
                    })}
                </div>

                {/* AI Technologies Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold gradient-text text-center mb-8">AI Technologies</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {aiTechnologies.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <div
                                    key={index}
                                    className="skill-card fade-in-up card-3d glass rounded-2xl p-6 flex flex-col items-center justify-center group relative overflow-hidden"
                                >
                                    <div className="floating mb-4">
                                        <Icon className={`w-12 h-12 text-muted-foreground transition-all duration-500 ${tech.color} group-hover:scale-125 group-hover:drop-shadow-lg`} />
                                    </div>
                                    
                                    <span className="text-sm font-medium text-foreground text-center group-hover:gradient-text transition-all duration-300">
                                        {tech.name}
                                    </span>

                                    <div className="w-full mt-3 skill-bar h-1 rounded-full">
                                        <div 
                                            className="skill-progress h-full rounded-full"
                                            style={{ 
                                                animationDelay: `${index * 0.1}s`,
                                                transform: `scaleX(${tech.level / 100})`
                                            }}
                                        ></div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tools Used Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold gradient-text text-center mb-8">Tools Used</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {toolsUsed.map((tool, index) => {
                            const Icon = tool.icon;
                            return (
                                <div
                                    key={index}
                                    className="skill-card fade-in-up card-3d glass rounded-2xl p-6 flex flex-col items-center justify-center group relative overflow-hidden"
                                >
                                    <div className="floating mb-4">
                                        <Icon className={`w-12 h-12 text-muted-foreground transition-all duration-500 ${tool.color} group-hover:scale-125 group-hover:drop-shadow-lg`} />
                                    </div>
                                    
                                    <span className="text-sm font-medium text-foreground text-center group-hover:gradient-text transition-all duration-300">
                                        {tool.name}
                                    </span>

                                    <div className="w-full mt-3 skill-bar h-1 rounded-full">
                                        <div 
                                            className="skill-progress h-full rounded-full"
                                            style={{ 
                                                animationDelay: `${index * 0.1}s`,
                                                transform: `scaleX(${tool.level / 100})`
                                            }}
                                        ></div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Experience Summary */}
                <div className="mt-16 text-center">
                    <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-foreground mb-6">Technical Expertise</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-2">4</div>
                                <div className="text-base text-muted-foreground font-medium">Months Internship Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                                <div className="text-base text-muted-foreground font-medium">Project Contributions</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                                <div className="text-base text-muted-foreground font-medium">Technologies Mastered</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
