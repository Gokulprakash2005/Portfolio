"use client";

import { HiBriefcase, HiCalendar, HiCurrencyRupee, HiSparkles } from "react-icons/hi";

export default function Experience() {
    const experiences = [
        {
            title: "Software Developer Intern",
            company: "ADRIG AI TECHNOLOGIES",
            location: "Chennai",
            duration: "Oct 2025 – Jan 2026",
            type: "Paid Internship",
            stipend: "₹7,000–₹10,000",
            icon: "💻",
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
            stipend: "Learning Experience",
            icon: "🎨",
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
                <div className="text-center mb-16 fade-in-up animate">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <HiSparkles className="w-8 h-8 text-purple-500" />
                        <h2 className="text-4xl md:text-5xl font-bold gradient-text-hero">
                            Experience
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4"></div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        My professional journey and internship experiences
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="fade-in-up card-3d glass rounded-2xl p-8 group relative overflow-hidden"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center floating`}>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold gradient-text mb-1">
                                                {exp.title}
                                            </h3>
                                            <h4 className="text-lg font-semibold text-purple-400 mb-2">
                                                {exp.company}, {exp.location}
                                            </h4>
                                        </div>
                                        <div className="flex flex-col md:items-end gap-2">
                                            <div className="flex items-center text-muted-foreground">
                                                <HiCalendar className="w-5 h-5 mr-2" />
                                                <span className="font-medium">{exp.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full">
                                                    <span className="text-purple-400 font-bold text-sm">{exp.type}</span>
                                                </div>
                                                <div className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full">
                                                    <span className="text-green-400 font-bold text-sm">{exp.stipend}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <p key={achIndex} className="flex items-start text-muted-foreground">
                                                <span className="text-purple-400 mr-3 mt-1">•</span>
                                                {achievement}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl -z-10 blur-xl`}></div>
                        </div>
                    ))}
                </div>

                {/* Experience Summary */}
                <div className="mt-16 text-center fade-in-up animate" style={{ animationDelay: "0.6s" }}>
                    <div className="glass rounded-2xl p-8 max-w-4xl mx-auto card-3d">
                        <h3 className="text-2xl font-bold gradient-text mb-6">Professional Experience</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text mb-2">6</div>
                                <div className="text-muted-foreground">Months Total Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text mb-2">2</div>
                                <div className="text-muted-foreground">Companies Worked</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                                <div className="text-muted-foreground">Production Modules</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}