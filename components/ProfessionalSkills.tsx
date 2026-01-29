"use client";

import {
    SiReact,
    SiJavascript,
    SiSpringboot,
    SiMysql,
    SiPostman,
    SiVercel,
    SiGit,
    SiGithub,
    SiAmazon,
} from "react-icons/si";
import { BiData } from "react-icons/bi";
import { FaJava } from "react-icons/fa";

export default function ProfessionalSkills() {
    const coreSkills = [
        { name: "React.js", icon: SiReact },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Java", icon: FaJava },
        { name: "Spring Boot", icon: SiSpringboot },
        { name: "SQL", icon: BiData },
        { name: "Git", icon: SiGit },
    ];

    const aiTechnologies = [
        { name: "Amazon Q", icon: SiAmazon },
        { name: "Antigravity", icon: BiData },
        { name: "Cursor", icon: BiData },
    ];

    const tools = [
        { name: "Vercel", icon: SiVercel },
        { name: "MySQL", icon: SiMysql },
        { name: "Postman", icon: SiPostman },
        { name: "GitHub", icon: SiGithub },
        { name: "Neon DB", icon: BiData },
    ];

    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-alt">
                        Skills & Technologies
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        My comprehensive technical arsenal for building next-generation applications
                    </p>
                </div>

                {/* Core Skills */}
                <div className="mb-12">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                        {coreSkills.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-lg p-4 flex flex-col items-center justify-center text-center"
                                >
                                    <Icon className="w-8 h-8 text-primary mb-2" />
                                    <span className="text-sm font-medium text-foreground">
                                        {skill.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* AI Technologies */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-foreground text-center mb-6">AI Technologies</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                        {aiTechnologies.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-lg p-4 flex flex-col items-center justify-center text-center"
                                >
                                    <Icon className="w-8 h-8 text-primary mb-2" />
                                    <span className="text-sm font-medium text-foreground">
                                        {tech.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tools Used */}
                <div className="mb-16">
                    <h3 className="text-xl font-semibold text-foreground text-center mb-6">Tools Used</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {tools.map((tool, index) => {
                            const Icon = tool.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-lg p-4 flex flex-col items-center justify-center text-center"
                                >
                                    <Icon className="w-8 h-8 text-primary mb-2" />
                                    <span className="text-sm font-medium text-foreground">
                                        {tool.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Technical Expertise */}
                <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
                    <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Technical Expertise</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-2xl font-semibold text-primary mb-2">4</div>
                            <div className="text-sm text-muted-foreground">Months Internship Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-semibold text-primary mb-2">10+</div>
                            <div className="text-sm text-muted-foreground">Project Contributions</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-semibold text-primary mb-2">8+</div>
                            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}