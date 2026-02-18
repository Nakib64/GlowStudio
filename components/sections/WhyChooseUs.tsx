"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Users, Sparkles, Clock } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".stat-number").forEach((el) => {
                const target = parseInt(el.getAttribute("data-target") || "0");
                gsap.fromTo(
                    el,
                    { textContent: 0 },
                    {
                        textContent: target,
                        duration: 2,
                        ease: "power2.out",
                        snap: { textContent: 1 },
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const stats = [
        { icon: Users, number: 5000, suffix: "+", label: "Happy Clients" },
        { icon: Award, number: 15, suffix: "+", label: "Years Experience" },
        { icon: Sparkles, number: 50, suffix: "+", label: "Beauty Services" },
        { icon: Clock, number: 98, suffix: "%", label: "Client Satisfaction" },
    ];

    return (
        <section ref={sectionRef} className="section-padding bg-dark relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
            </div>

            <div className="container-custom relative z-10">
                <AnimatedSection>
                    <SectionHeading
                        subtitle="Why Choose Us"
                        title="Beauty You Can Trust"
                        description="We're committed to delivering exceptional results with every visit."
                        light
                    />
                </AnimatedSection>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, i) => (
                        <AnimatedSection key={stat.label} delay={i * 0.1}>
                            <div className="text-center p-6 sm:p-8">
                                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/10 flex items-center justify-center">
                                    <stat.icon className="w-7 h-7 text-primary-light" />
                                </div>
                                <div className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
                                    <span className="stat-number" data-target={stat.number}>0</span>
                                    <span className="text-primary-light">{stat.suffix}</span>
                                </div>
                                <p className="text-white/60 text-xs sm:text-sm">{stat.label}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
