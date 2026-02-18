"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Eye, Target } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { teamMembers } from "@/data/services";

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[50svh] min-h-[320px] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&q=80"
                    alt="About GlowStudio"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJYvDbTrLJlEJZZJjHGOrNsNyaKKBRTvSl0Yz//2Q=="
                />
                <div className="overlay-gradient" />
                <div className="relative z-10 container-custom text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block text-primary-light text-xs font-bold tracking-[0.25em] uppercase mb-3"
                    >
                        Our Story
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                    >
                        About GlowStudio
                    </motion.h1>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
                        <AnimatedSection>
                            <div className="relative">
                                <div className="rounded-[var(--radius-lg)] overflow-hidden aspect-[4/5]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                                        alt="Our salon interior"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJYvDbTrLJlEJZZJjHGOrNsNyaKKBRTvSl0Yz//2Q=="
                                    />
                                </div>
                                <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-primary/10 rounded-[var(--radius-lg)] -z-10" />
                                <div className="absolute -top-5 -left-5 w-20 h-20 bg-accent/10 rounded-full -z-10" />
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
                                Established 2010
                            </span>
                            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-dark leading-tight mb-5">
                                A Place Where Beauty <span className="text-primary">Blossoms</span>
                            </h2>
                            <p className="text-text-light text-sm sm:text-base leading-relaxed mb-4">
                                GlowStudio was born from a simple belief — that everyone deserves a space where they
                                feel pampered, valued, and truly beautiful. What started as a small neighborhood salon
                                has grown into a full-service beauty destination.
                            </p>
                            <p className="text-text-light text-sm sm:text-base leading-relaxed mb-4">
                                Our founder, Isabella Rose, built GlowStudio with a vision of combining world-class
                                beauty treatments with warm, personalized care. Today, our team of certified
                                professionals continues that tradition.
                            </p>
                            <p className="text-text-light text-sm sm:text-base leading-relaxed">
                                We invest in continuous education, premium products, and cutting-edge techniques to
                                ensure every client leaves feeling their absolute best.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <AnimatedSection>
                        <SectionHeading
                            subtitle="What Drives Us"
                            title="Mission & Vision"
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Heart,
                                title: "Our Mission",
                                text: "To empower every individual to feel confident and beautiful through exceptional, personalized beauty services in a welcoming environment.",
                            },
                            {
                                icon: Eye,
                                title: "Our Vision",
                                text: "To be the most trusted beauty destination, known for innovation, inclusivity, and a transformative client experience.",
                            },
                            {
                                icon: Target,
                                title: "Our Values",
                                text: "Excellence in craft, warmth in care, respect for individuality, and a commitment to using clean, premium products.",
                            },
                        ].map((item, i) => (
                            <AnimatedSection key={item.title} delay={i * 0.15}>
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className="bg-cream rounded-[var(--radius-lg)] p-8 sm:p-10 md:p-12 text-center h-full"
                                >
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-light/40 flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-text-light text-sm leading-relaxed">{item.text}</p>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding">
                <div className="container-custom">
                    <AnimatedSection>
                        <SectionHeading
                            subtitle="Our Experts"
                            title="Meet The Team"
                            description="Talented professionals who are passionate about making you look and feel amazing."
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                        {teamMembers.map((member, i) => (
                            <AnimatedSection key={member.name} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    className="group bg-white rounded-[var(--radius-lg)] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="relative aspect-[3/4] overflow-hidden">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                            placeholder="blur"
                                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJYvDbTrLJlEJZZJjHGOrNsNyaKKBRTvSl0Yz//2Q=="
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <div className="p-6 sm:p-7 text-center">
                                        <h3 className="font-heading text-lg font-semibold text-dark">{member.name}</h3>
                                        <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                                            {member.role}
                                        </p>
                                        <p className="text-text-light text-xs leading-relaxed">{member.description}</p>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-primary-light/30">
                <div className="container-custom text-center">
                    <AnimatedSection>
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-dark mb-3">
                            Come Visit Us
                        </h2>
                        <p className="text-text-light text-sm sm:text-base max-w-md mx-auto mb-6">
                            We&apos;d love to welcome you to our studio. Schedule a visit and experience the GlowStudio difference.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Get in Touch
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
