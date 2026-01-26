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
            icon: "🎓",
            color: "from-blue-500 to-cyan-500"
        },
        {
            degree: "Higher Secondary (HSC)",
            field: "Computer Science Stream",
            institution: "RGM Matriculation Higher Secondary School, Udumalpet",
            date: "May 2022",
            grade: "Percentage: 81.8%",
            icon: "📚",
            color: "from-purple-500 to-pink-500"
        },
        {
            degree: "Secondary (SSLC)",
            field: "General Studies",
            institution: "RGM Matriculation Higher Secondary School, Udumalpet",
            date: "May 2020",
            grade: "Percentage: 91.6%",
            icon: "📖",
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
                <div className="text-center mb-16 fade-in-up animate">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <HiSparkles className="w-8 h-8 text-purple-500" />
                        <h2 className="text-4xl md:text-5xl font-bold gradient-text-hero">
                            Education
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4"></div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        My academic journey and educational achievements
                    </p>
                </div>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="fade-in-up card-3d glass rounded-2xl p-8 group relative overflow-hidden"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center floating`}>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold gradient-text mb-1">
                                                {edu.degree}
                                            </h3>
                                            <h4 className="text-lg font-semibold text-purple-400 mb-2">
                                                {edu.field}
                                            </h4>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center text-muted-foreground">
                                                <HiCalendar className="w-5 h-5 mr-2" />
                                                <span className="font-medium">{edu.date}</span>
                                            </div>
                                            <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full">
                                                <span className="text-purple-400 font-bold">{edu.grade}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-muted-foreground leading-relaxed">
                                        {edu.institution}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl -z-10 blur-xl`}></div>
                        </div>
                    ))}
                </div>

                {/* Academic Excellence Summary */}
                <div className="mt-16 text-center fade-in-up animate" style={{ animationDelay: "0.8s" }}>
                    <div className="glass rounded-2xl p-8 max-w-4xl mx-auto card-3d">
                        <h3 className="text-2xl font-bold gradient-text mb-6">Academic Excellence</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text mb-2">8.4</div>
                                <div className="text-muted-foreground">Current CGPA</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text mb-2">91.6%</div>
                                <div className="text-muted-foreground">Highest Score (SSLC)</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text mb-2">IT</div>
                                <div className="text-muted-foreground">Specialization</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}