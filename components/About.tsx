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

                <div className="bg-card border border-border rounded-lg p-8">
                    <div className="space-y-6">
                        <p className="text-base text-foreground leading-relaxed text-justify">
                            As a <span className="text-primary font-semibold">Software Development Engineer</span> at ADRIG AI Technologies Pvt. Ltd., 
                            I contributed to over five production-grade modules, including analytics dashboards, admin portals, and course portals, 
                            while leveraging <span className="text-primary font-semibold">Next.js, Neon DB, and Vercel</span> for scalable system designs.
                        </p>

                        <p className="text-base text-foreground leading-relaxed text-justify">
                            My work also included <span className="text-primary font-semibold">AI-driven image processing and automation using Puppeteer</span>, 
                            showcasing my passion for full-stack development and problem-solving. I have gained foundational knowledge in web design 
                            and development through internships that focused on <span className="text-primary font-semibold">responsive web design and mobile-first UI layouts</span>.
                        </p>

                        <p className="text-base text-foreground leading-relaxed">
                            My goal is to create impactful systems by combining <span className="text-primary font-semibold">clean engineering practices</span> 
                            with modern development tools and technologies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
