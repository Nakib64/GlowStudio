"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { serviceCategories } from "@/data/services";

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[50svh] min-h-[320px] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=80"
                    alt="Our services"
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
                        Explore
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                    >
                        Our Services
                    </motion.h1>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <AnimatedSection>
                        <SectionHeading
                            subtitle="What We Offer"
                            title="Complete Beauty Solutions"
                            description="Discover our comprehensive range of premium beauty and wellness services designed to bring out your best."
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {serviceCategories.map((service, i) => (
                            <AnimatedSection key={service.slug} delay={i * 0.1}>
                                <Link href={`/services/${service.slug}`}>
                                    <motion.div
                                        whileHover={{ y: -8 }}
                                        className="group bg-white rounded-[var(--radius-lg)] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                                    >
                                        <div className="relative aspect-[3/2] overflow-hidden">
                                            <Image
                                                src={service.image}
                                                alt={service.name}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                                placeholder="blur"
                                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJYvDbTrLJlEJZZJjHGOrNsNyaKKBRTvSl0Yz//2Q=="
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <span className="text-xs text-white/80 font-medium">{service.services.length} services</span>
                                            </div>
                                        </div>

                                        <div className="p-7 sm:p-8 md:p-10">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 rounded-xl bg-primary-light/30 flex items-center justify-center">
                                                    <service.icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-heading text-xl font-semibold text-dark group-hover:text-primary transition-colors">
                                                        {service.name}
                                                    </h3>
                                                    <p className="text-xs text-primary font-medium">{service.tagline}</p>
                                                </div>
                                            </div>

                                            <p className="text-text-light text-sm leading-relaxed mb-4">
                                                {service.description}
                                            </p>

                                            <div className="flex items-center text-primary text-sm font-semibold">
                                                View Details
                                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-primary-light/30">
                <div className="container-custom text-center">
                    <AnimatedSection>
                        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4">
                            Not Sure What You Need?
                        </h2>
                        <p className="text-text-light text-sm sm:text-base max-w-lg mx-auto mb-6">
                            Book a free consultation and our experts will recommend the perfect treatments for you.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Free Consultation
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
