"use client";

import { HiExternalLink, HiCode, HiStar, HiSparkles } from "react-icons/hi";
import { useEffect, useRef } from "react";

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.project-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('animate');
                            }, index * 200);
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

    const projects = [
        {
            title: "Dagala Analytics",
            description: "Developed frontend modules using Next.js with dynamic UI rendering for modern analytics dashboard with interactive data visualizations.",
            tags: ["Next.js", "Frontend", "Dynamic UI", "Analytics"],
            gradient: "from-purple-500 to-pink-500",
            icon: "📊",
            featured: true,
            type: "Internship"
        },
        {
            title: "SqFeet Realty Admin Portal",
            description: "Built comprehensive real estate platform with full-stack workflow including UI, REST APIs, and Neon DB integration for property management.",
            tags: ["Full-Stack", "REST API", "Neon DB", "Admin Portal"],
            gradient: "from-blue-500 to-cyan-500",
            icon: "🏠",
            featured: true,
            type: "Internship"
        },
        {
            title: "Southern Railways Course Portal",
            description: "Contributed to course management system enabling efficient training program administration and participant tracking for Southern Railway.",
            tags: ["Next.js", "Course Management", "Backend", "Database"],
            gradient: "from-green-500 to-teal-500",
            icon: "🚂",
            featured: true,
            type: "Internship"
        },
        {
            title: "Railway Security System",
            description: "Worked on AI-enhanced security system with Base64 image processing capabilities for real-time threat detection and monitoring.",
            tags: ["AI", "Image Processing", "Security", "Base64"],
            gradient: "from-orange-500 to-red-500",
            icon: "🛡️",
            featured: true,
            type: "Internship"
        },
        {
            title: "LinkedIn Automation Bot",
            description: "Built automation features using headless browser workflows via Puppeteer for intelligent LinkedIn operations and data processing.",
            tags: ["Automation", "Puppeteer", "Headless Browser", "Node.js"],
            gradient: "from-indigo-500 to-purple-500",
            icon: "🤖",
            featured: false,
            type: "Internship"
        },
        {
            title: "Student Management System",
            description: "CRUD application using Spring Boot, Spring MVC, MySQL & JPA for comprehensive student data handling and management.",
            tags: ["Spring Boot", "MySQL", "JPA", "CRUD"],
            gradient: "from-yellow-500 to-orange-500",
            icon: "🎓",
            featured: false,
            type: "Academic"
        },
        {
            title: "Volunteer Management System",
            description: "Volunteer onboarding and data management system built using Spring Boot & MySQL with real-time validation capabilities.",
            tags: ["Spring Boot", "MySQL", "Real-time", "Validation"],
            gradient: "from-pink-500 to-rose-500",
            icon: "🤝",
            featured: false,
            type: "Academic"
        },
        {
            title: "GPA Calculator Web App",
            description: "Responsive GPA calculator using HTML, CSS, JS & Bootstrap, actively used by 100+ students for academic planning.",
            tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            gradient: "from-emerald-500 to-green-500",
            icon: "🧮",
            featured: false,
            type: "Academic"
        },
    ];

    return (
        <section ref={sectionRef} id="projects" className="py-20 bg-secondary/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 fade-in-up animate">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <HiSparkles className="w-8 h-8 text-purple-500" />
                        <h2 className="text-4xl md:text-5xl font-bold gradient-text-hero">
                            Featured Projects
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4"></div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Showcasing production-grade applications with cutting-edge technologies and innovative solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-card fade-in-up card-3d glass rounded-2xl overflow-hidden group cursor-pointer relative ${
                                project.featured ? 'ring-2 ring-purple-500/50' : ''
                            }`}
                        >
                            {/* Project Type Badge */}
                            <div className="absolute top-4 left-4 z-10">
                                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                                    project.type === 'Internship' 
                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' 
                                        : 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                                }`}>
                                    {project.type}
                                </div>
                            </div>

                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 right-4 z-10">
                                    <div className="flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                        <HiStar className="w-3 h-3" />
                                        Featured
                                    </div>
                                </div>
                            )}

                            {/* Gradient Header */}
                            <div className={`h-24 bg-gradient-to-r ${project.gradient} relative flex items-center justify-center`}>
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>

                            <div className="p-6 relative">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                                        {project.title}
                                    </h3>
                                    <div className="btn-3d p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                                        <HiExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-400 text-xs rounded-full font-medium border border-purple-500/20 hover:border-purple-500/50 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                            </div>

                            {/* 3D Border Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 fade-in-up animate" style={{ animationDelay: "0.8s" }}>
                    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto card-3d">
                        <h3 className="text-2xl font-bold gradient-text mb-4">Want to see more?</h3>
                        <p className="text-muted-foreground mb-6">Check out my GitHub for additional projects and contributions</p>
                        <a
                            href="https://github.com/Gokulprakash2005"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-3d inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-2xl transition-all duration-300"
                        >
                            <HiExternalLink className="w-5 h-5" />
                            View GitHub Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
