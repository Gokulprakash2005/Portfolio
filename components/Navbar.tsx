"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-muted-foreground  font-medium text-foreground">
                            K.Gokul Prakash
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm"
                                >
                                    {link.name}
                                </a>
                            ))}

                            {mounted && (
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="p-2 rounded-md bg-secondary hover:bg-accent transition-colors duration-200"
                                    aria-label="Toggle theme"
                                >
                                    {theme === "dark" ? (
                                        <HiSun className="w-4 h-4" />
                                    ) : (
                                        <HiMoon className="w-4 h-4" />
                                    )}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors duration-200"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? (
                                    <HiSun className="w-5 h-5" />
                                ) : (
                                    <HiMoon className="w-5 h-5" />
                                )}
                            </button>
                        )}
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-accent transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-background border-t border-border">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
