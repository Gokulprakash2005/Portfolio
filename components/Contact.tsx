"use client";

import { HiMail, HiCode, HiX } from "react-icons/hi";
import { SiLinkedin, SiGithub, SiLeetcode } from "react-icons/si";
import { useState } from "react";

export default function Contact() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');
        
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '7bca84f8-b7c8-4bff-b822-2f377d482d0d',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    to: 'gokulprakash1301@gmail.com'
                })
            });
            
            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => {
                    setShowModal(false);
                    setSubmitStatus('');
                }, 2000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        }
        
        setIsSubmitting(false);
    };

    const contactMethods = [
        {
            name: "Email",
            value: "gokulprakash1301@gmail.com",
            href: "mailto:gokulprakash1301@gmail.com",
            icon: HiMail,
            color: "hover:text-red-500",
        },
        {
            name: "Phone",
            value: "+91 7603986981",
            href: "tel:+917603986981",
            icon: HiMail,
            color: "hover:text-green-500",
        },
        {
            name: "LinkedIn",
            value: "linkedin.com/in/gokulprakash08",
            href: "https://www.linkedin.com/in/gokulprakash08/",
            icon: SiLinkedin,
            color: "hover:text-blue-600",
        },
        {
            name: "GitHub",
            value: "github.com/Gokulprakash2005",
            href: "https://github.com/Gokulprakash2005",
            icon: SiGithub,
            color: "hover:text-gray-800 dark:hover:text-white",
        },
        {
            name: "LeetCode",
            value: "leetcode.com/u/gokulprakash1301",
            href: "https://leetcode.com/u/gokulprakash1301/",
            icon: SiLeetcode,
            color: "hover:text-orange-500",
        },
    ];

    return (
        <section id="contact" className="py-20 bg-secondary/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                        I'm always open to new opportunities and collaborations. Feel free to reach out!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        return (
                            <a
                                key={index}
                                href={method.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                        <Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-foreground mb-1">
                                            {method.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {method.value}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="bg-card border border-border rounded-lg p-8 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <HiCode className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                        Ready to Hire a Dedicated Developer?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Looking for a skilled full-stack developer to join your team? I'm actively seeking new opportunities and would love to discuss how I can contribute to your projects.
                    </p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                    >
                        Send Me an Email
                    </button>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4">
                    <div className="glass rounded-2xl p-8 max-w-md w-full relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                        >
                            <HiX className="w-6 h-6" />
                        </button>
                        
                        <h3 className="text-2xl font-bold mb-6 gradient-text">Send Message</h3>
                        
                        {submitStatus === 'success' && (
                            <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                                ✅ Message sent successfully!
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
                                ❌ Failed to send. Please try again.
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full p-3 rounded-lg bg-background/50 border border-border focus:border-primary outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full p-3 rounded-lg bg-background/50 border border-border focus:border-primary outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className="w-full p-3 rounded-lg bg-background/50 border border-border focus:border-primary outline-none h-32 resize-none"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform duration-200 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}
