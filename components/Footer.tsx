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
                            © {year} Made with <HiHeart className="w-4 h-4 mx-1 text-red-500" /> by{" "}
                            <span className="ml-1 font-semibold gradient-text">K.Gokul Prakash</span>
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
                    <p className="text-sm text-muted-foreground">
                        Built with Next.js, React, TypeScript & Tailwind CSS | Deployed on Vercel
                    </p>
                </div>
            </div>
        </footer>
    );
}
