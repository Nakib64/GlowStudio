"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SafeImage from "@/components/ui/SafeImage";

export default function AboutPreview() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
                    <AnimatedSection>
                        <div className="relative">
                            <div className="rounded-[var(--radius-lg)] overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                                <SafeImage
                                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                                    alt="Our salon"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJYvDbTrLJlEJZZJjHGOrNsNyaKKBRTvSl0Yz//2Q=="
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-[var(--radius-lg)] -z-10" />
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
                            About Us
                        </span>
                        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-dark leading-tight mb-4">
                            A Sanctuary of Beauty <br className="hidden md:block" />
                            <span className="text-primary">Since 2010</span>
                        </h2>
                        <p className="text-text-light text-sm sm:text-base leading-relaxed mb-4">
                            At GlowStudio, we believe that beauty is more than skin deep. Founded over a decade ago,
                            our mission has been to create a welcoming space where you can relax, rejuvenate, and
                            rediscover your inner glow.
                        </p>
                        <p className="text-text-light text-sm sm:text-base leading-relaxed mb-6">
                            Our team of certified professionals uses only premium products and the latest
                            techniques to deliver results that exceed expectations.
                        </p>
                        <Link href="/about" className="btn-primary">
                            Our Story
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
