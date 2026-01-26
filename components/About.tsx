"use client";

export default function About() {
    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-alt">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="glass rounded-2xl p-8 md:p-12 card-hover">
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                        <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                            I'm a <span className="text-primary font-semibold">Full-Stack Developer</span> with hands-on startup experience,
                            specializing in building scalable web applications using modern technologies. My expertise spans across
                            <span className="text-primary font-semibold"> frontend</span>,
                            <span className="text-primary font-semibold"> backend</span>, and
                            <span className="text-primary font-semibold"> database development</span>.
                        </p>

                        <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                            I leverage <span className="text-primary font-semibold">AI-assisted development tools</span> like Amazon Q
                            to accelerate development workflows and build intelligent systems. My experience includes creating
                            automation solutions, dashboards, admin portals, course management systems, and AI-enhanced applications.
                        </p>

                        <p className="text-lg md:text-xl text-foreground leading-relaxed">
                            With a strong foundation in <span className="text-primary font-semibold">Next.js</span>,
                            <span className="text-primary font-semibold"> React.js</span>,
                            <span className="text-primary font-semibold"> Spring Boot</span>, and modern databases like
                            <span className="text-primary font-semibold"> Neon DB</span> and
                            <span className="text-primary font-semibold"> MySQL</span>, I've contributed to
                            <span className="text-primary font-semibold"> 5+ production-grade startup projects</span>,
                            delivering robust solutions that drive business value.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
