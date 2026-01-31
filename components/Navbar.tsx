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
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Work", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-4 left-0 xl:top-6 xl:left-1/2 xl:transform xl:-translate-x-1/2 z-50 w-full xl:w-auto px-4 xl:px-0">
            <div className="bg-slate-800/90 backdrop-blur-md rounded-full xl:rounded-full px-4 xl:px-6 py-3 border-0 xl:border border-slate-700/50 shadow-lg">
                <div className="flex items-center justify-between space-x-4 sm:space-x-8">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-sm sm:text-lg">Pf</span>
                            </div>
                        </a>
                    </div>

                    {/* Navigation Links - Hidden on mobile */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right side items */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        {/* CTA Button - Show on tablet and desktop */}
                        <div className="hidden md:block">
                            <a
                                href="#contact"
                                className="bg-white text-slate-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-slate-100 transition-colors duration-200 whitespace-nowrap"
                            >
                                Let's chat
                            </a>
                        </div>

                        {/* Theme Toggle */}
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors duration-200"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? (
                                    <HiSun className="w-4 h-4 text-slate-300" />
                                ) : (
                                    <HiMoon className="w-4 h-4 text-slate-300" />
                                )}
                            </button>
                        )}

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors duration-200"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <HiX className="w-4 h-4 text-slate-300" /> : <HiMenu className="w-4 h-4 text-slate-300" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="lg:hidden mt-2 bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-lg mx-4">
                    <div className="px-4 py-3 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="block px-3 py-2 mt-2 bg-white text-slate-800 rounded-lg text-center font-medium hover:bg-slate-100 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Let's chat
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
