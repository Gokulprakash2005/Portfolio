"use client";

import { HiAcademicCap, HiCheckCircle } from "react-icons/hi";

export default function Certifications() {
    const certifications = [
        {
            title: "Web Development Certification",
            issuer: "IBM (Coursera)",
            date: "2024",
            description: "Covering HTML, CSS, JavaScript, and modern web development practices.",
        },
        {
            title: "Java OOP Certification",
            issuer: "Simplilearn",
            date: "2024",
            description: "Focused on object-oriented programming concepts and Java fundamentals.",
        },
        {
            title: "Introduction to Java Certification",
            issuer: "Coursera",
            date: "2024",
            description: "Covering core Java concepts including variables, data types, arrays, control statements, OOP, and Java Class Library.",
        },
    ];

    const achievements = [
        "3rd Prize Winner, Hackophilic Hackathon — Dr. Mahalingam College of Engineering and Technology, recognized for technical innovation and teamwork.",
        "Solved 400+ problems on LeetCode, strengthening data structures, algorithms, and problem-solving skills.",
        "GitHub Contributions: Developed and maintained 15+ GitHub projects and organization repositories spanning full-stack web applications, automation tools, utility calculators, and problem-solving implementations.",
    ];

    return (
        <section id="certifications" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-alt">
                        Certifications & Achievements
                    </h2>
                                      
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Certifications */}
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                            <HiAcademicCap className="w-8 h-8 text-primary mr-3" />
                            Certifications
                        </h3>
                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <div key={index} className="bg-card border border-border rounded-lg p-6">
                                    <h4 className="text-lg font-semibold text-foreground mb-2">
                                        {cert.title}
                                    </h4>
                                    <div className="flex items-center text-primary font-medium mb-2 text-sm">
                                        <span>{cert.issuer}</span>
                                        <span className="mx-2">•</span>
                                        <span>{cert.date}</span>
                                    </div>
                                    <p className="text-muted-foreground text-sm">
                                        {cert.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                            <HiCheckCircle className="w-8 h-8 text-primary mr-3" />
                            Key Achievements
                        </h3>
                        <div className="bg-card border border-border rounded-lg p-6">
                            <ul className="space-y-4">
                                {achievements.map((achievement, index) => (
                                    <li key={index} className="flex items-start text-justify">
                                        <span className="text-primary mr-3 flex-shrink-0 mt-1">•</span>
                                        <span className="text-foreground text-sm">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Additional info box */}
                        <div className="mt-6 bg-card border border-border border-l-4 border-l-primary rounded-lg p-6">
                            <p className="text-foreground text-sm text-justify">
                                <span className="font-semibold text-primary">Technical Skills:</span> Strong foundation in data structures, algorithms, and full-stack development with extensive hands-on experience in competitive programming and open-source contributions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
