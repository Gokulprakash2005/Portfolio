"use client";

import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import { HiHeart } from "react-icons/hi";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-card border-t border-border py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Copyright */}
                    <div className="mb-4 md:mb-0">
                        <p className="text-muted-foreground flex items-center">
                            © {year} <span className="ml-1 font-semibold text-foreground">K.Gokul Prakash</span> - Full Stack Developer
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/Gokulprakash2005"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                            aria-label="GitHub"
                        >
                            <SiGithub className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gokulprakash08/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                            aria-label="LinkedIn"
                        >
                            <SiLinkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://leetcode.com/u/gokulprakash1301/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                            aria-label="LeetCode"
                        >
                            <SiLeetcode className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                        Professional portfolio showcasing full-stack development expertise
                    </p>
                    <p className="text-sm text-muted-foreground">
                         gokulprakash1301@gmail.com |  +91 7603986981
                    </p>
                </div>
            </div>
        </footer>
    );
}
