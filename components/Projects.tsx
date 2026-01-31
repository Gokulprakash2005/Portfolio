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
          
           
            type: "Internship"
        },
        {
            title: "SqFeet Realty Admin Portal",
            description: "Built comprehensive real estate platform with full-stack workflow including UI, REST APIs, and Neon DB integration for property management.",
            tags: ["Full-Stack", "REST API", "Neon DB", "Admin Portal"],
            gradient: "from-blue-500 to-cyan-500",
           
            
            type: "Internship"
        },
        {
            title: "Southern Railways Course Portal",
            description: "Contributed to course management system enabling efficient training program administration and participant tracking for Southern Railway.",
            tags: ["Next.js", "Course Management", "Backend", "Database"],
            gradient: "from-green-500 to-teal-500",
           
            
            type: "Internship"
        },
        {
            title: "Railway Security System",
            description: "Worked on AI-enhanced security system with Base64 image processing capabilities for real-time threat detection and monitoring.",
            tags: ["AI", "Image Processing", "Security", "Base64"],
            gradient: "from-orange-500 to-red-500",
            
           
            type: "Internship"
        },
        {
            title: "LinkedIn Automation Bot",
            description: "Built automation features using headless browser workflows via Puppeteer for intelligent LinkedIn operations and data processing.",
            tags: ["Automation", "Puppeteer", "Headless Browser", "Node.js"],
            gradient: "from-indigo-500 to-purple-500",
            
            
            type: "Internship"
        },
        {
            title: "Student Management System",
            description: "CRUD application using Spring Boot, Spring MVC, MySQL & JPA for comprehensive student data handling and management.",
            tags: ["Spring Boot", "MySQL", "JPA", "CRUD"],
            gradient: "from-yellow-500 to-orange-500",
            
           
            type: "Academic"
        },
        {
            title: "Volunteer Management System",
            description: "Volunteer onboarding and data management system built using Spring Boot & MySQL with real-time validation capabilities.",
            tags: ["Spring Boot", "MySQL", "Real-time", "Validation"],
            gradient: "from-pink-500 to-rose-500",
           
           
            type: "Academic"
        },
        {
            title: "GPA Calculator Web App",
            description: "Responsive GPA calculator using HTML, CSS, JS & Bootstrap, actively used by 100+ students for academic planning.",
            tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            gradient: "from-emerald-500 to-green-500",
            
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
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-alt">
                        Projects
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="mb-4">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                    project.type === 'Internship' 
                                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                                        : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                }`}>
                                    {project.type}
                                </span>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Want to see more?</h3>
                        <p className="text-muted-foreground mb-6">Check out my GitHub for additional projects and contributions</p>
                        <a
                            href="https://github.com/Gokulprakash2005"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                        >
                            <HiExternalLink className="w-4 h-4" />
                            View GitHub Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
