"use client";

import { HiAcademicCap, HiCalendar, HiSparkles } from "react-icons/hi";

export default function Education() {
    const education = [
        {
            degree: "Bachelor of Technology",
            field: "Information Technology",
            institution: "Dr. Mahalingam College of Engineering and Technology, Pollachi",
            date: "July 2026",
            grade: "CGPA: 8.4",
            color: "from-blue-500 to-cyan-500"
        },
        {
            degree: "Higher Secondary (HSC)",
            field: "Computer Science Stream",
            institution: "RGM Matriculation Higher Secondary School, Udumalpet",
            date: "May 2022",
            grade: "Percentage: 81.8%",
            color: "from-purple-500 to-pink-500"
        },
        {
            degree: "Secondary (SSLC)",
            field: "General Studies",
            institution: "RGM Matriculation Higher Secondary School, Udumalpet",
            date: "May 2020",
            grade: "Percentage: 91.6%",
            color: "from-green-500 to-teal-500"
        }
    ];

    return (
        <section id="education" className="py-20 bg-secondary/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl floating"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl floating" style={{ animationDelay: "2s" }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border rounded-lg p-6"
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground mb-1">
                                                {edu.degree}
                                            </h3>
                                            <h4 className="text-base font-medium text-primary mb-2">
                                                {edu.field}
                                            </h4>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="text-muted-foreground text-sm">
                                                <span className="font-medium">{edu.date}</span>
                                            </div>
                                            <div>
                                                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded text-xs font-medium">
                                                    {edu.grade}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {edu.institution}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Academic Excellence Summary */}
                <div className="mt-16 text-center">
                    <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
                        <h3 className="text-xl font-semibold text-foreground mb-6">Academic Excellence</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-2xl font-semibold text-primary mb-2">8.4</div>
                                <div className="text-sm text-muted-foreground">Current CGPA</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-semibold text-primary mb-2">91.6%</div>
                                <div className="text-sm text-muted-foreground">Highest Score (SSLC)</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-semibold text-primary mb-2">IT</div>
                                <div className="text-sm text-muted-foreground">Specialization</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}