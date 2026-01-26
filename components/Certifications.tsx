"use client";

import { HiAcademicCap, HiCheckCircle } from "react-icons/hi";

export default function Certifications() {
    const certifications = [
        {
            title: "Java OOP",
            issuer: "Simplilearn SkillUp",
            date: "2024",
            description: "Completed foundational Object-Oriented Programming course with hands-on Java exercises.",
        },
        {
            title: "Web Development (HTML, CSS, JS)",
            issuer: "IBM via Coursera",
            date: "2024",
            description: "Gained practical frontend skills through building responsive web interfaces.",
        },
    ];

    const achievements = [
        "3rd Prize — Hackophilic 2024, Dr. MCET",
        "Awarded for developing an innovative problem-solving project under timed conditions",
    ];

    return (
        <section id="certifications" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-alt">
                        Certifications & Achievements
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
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
                                <div key={index} className="glass rounded-xl p-6 card-hover">
                                    <h4 className="text-xl font-bold text-foreground mb-2">
                                        {cert.title}
                                    </h4>
                                    <div className="flex items-center text-primary font-medium mb-2">
                                        <span>{cert.issuer}</span>
                                        <span className="mx-2">•</span>
                                        <span>{cert.date}</span>
                                    </div>
                                    <p className="text-muted-foreground">
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
                        <div className="glass rounded-xl p-6">
                            <ul className="space-y-4">
                                {achievements.map((achievement, index) => (
                                    <li key={index} className="flex items-start">
                                        <HiCheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                                        <span className="text-foreground text-lg">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Additional info box */}
                        <div className="mt-6 glass rounded-xl p-6 border-l-4 border-primary">
                            <p className="text-foreground">
                                <span className="font-bold text-primary">Hackathon Achievement:</span> Recognized for innovative problem-solving skills and technical excellence in competitive programming environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
