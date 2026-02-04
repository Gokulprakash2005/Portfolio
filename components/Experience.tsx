"use client";

import { HiBriefcase, HiCalendar, HiCurrencyRupee, HiSparkles } from "react-icons/hi";

export default function Experience() {
    const experiences = [
        {
            title: "Software Developer Intern",
            company: "ADRIG AI TECHNOLOGIES",
            location: "Chennai",
            duration: "Oct 2025 – jan 2026",
            type: "Paid Internship",
           
           
            color: "from-blue-500 to-cyan-500",
            achievements: [
                "Built full-stack features using Next.js for UI + API routing and Neon DB (PostgreSQL) for data persistence",
                "Deployed multiple modules to Vercel with preview → staging → production pipeline",
                "Contributed to 5+ live production modules, delivering customer-facing features",
                "Leveraged Amazon Q + AI tooling for code generation, debugging & productivity acceleration",
                "Implemented database schemas, API endpoints, UI components, and performance optimization"
            ]
        },
        {
            title: "Frontend Intern",
            company: "Techvolt Software Company",
            location: "Coimbatore",
            duration: "June 2024 – July 2024",
            type: "Internship",
        
           
            color: "from-purple-500 to-pink-500",
            achievements: [
                "Learned fundamentals of responsive web design using HTML, CSS, and Bootstrap",
                "Built basic UI layouts focusing on mobile-first design",
                "Gained exposure to real-world frontend workplace workflow"
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl floating"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl floating" style={{ animationDelay: "2s" }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border rounded-lg p-6"
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground mb-1">
                                                {exp.title}
                                            </h3>
                                            <h4 className="text-base font-medium text-primary mb-2">
                                                {exp.company}, {exp.location}
                                            </h4>
                                        </div>
                                        <div className="flex flex-col md:items-end gap-2">
                                            <div className="text-muted-foreground text-sm">
                                                <span className="font-medium">{exp.duration}</span>
                                            </div>
                                            <div>
                                                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded text-xs font-medium">
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <p key={achIndex} className="flex items-start text-muted-foreground text-sm text-justify">
                                                <span className="text-primary mr-2 mt-1">•</span>
                                                {achievement}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Experience Summary */}
                <div className="mt-16 text-center">
                    <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
                        <h3 className="text-xl font-semibold text-foreground mb-6">Professional Experience</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-2xl font-semibold text-primary mb-2">6</div>
                                <div className="text-sm text-muted-foreground">Months Total Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-semibold text-primary mb-2">2</div>
                                <div className="text-sm text-muted-foreground">Companies Worked</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-semibold text-primary mb-2">5+</div>
                                <div className="text-sm text-muted-foreground">Production Modules</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}