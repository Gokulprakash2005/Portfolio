"use client";

import { useEffect } from 'react';

export function useScrollAnimation() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe all elements with fade-in classes
        const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
        elements.forEach((el) => observer.observe(el));

        // Magnetic effect for buttons
        const magneticElements = document.querySelectorAll('.magnetic');
        
        magneticElements.forEach((element) => {
            const handleMouseMove = (e: Event) => {
                const mouseEvent = e as MouseEvent;
                const rect = element.getBoundingClientRect();
                const x = mouseEvent.clientX - rect.left - rect.width / 2;
                const y = mouseEvent.clientY - rect.top - rect.height / 2;
                
                (element as HTMLElement).style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            };

            const handleMouseLeave = () => {
                (element as HTMLElement).style.transform = 'translate(0, 0)';
            };

            element.addEventListener('mousemove', handleMouseMove);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            observer.disconnect();
            magneticElements.forEach((element) => {
                element.removeEventListener('mousemove', () => {});
                element.removeEventListener('mouseleave', () => {});
            });
        };
    }, []);
}