"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, DollarSign, ChevronDown, ArrowLeft } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import SafeImage from "@/components/ui/SafeImage";
import { serviceCategories } from "@/data/services";

export default function ServiceDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const service = serviceCategories.find((s) => s.slug === slug);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    if (!service) notFound();

    return (
        <>
            {/* Hero */}
            <section className="relative h-[45svh] min-h-[300px] flex items-end overflow-hidden">
                <SafeImage
                    src={service.heroImage}
                    alt={service.name}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJYvDbTrLJlEJZZJjHGOrNsNyaKKBRTvSl0Yz//2Q=="
                />
                <div className="overlay-gradient" />

                <div className="relative z-10 container-custom pb-10 sm:pb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-1 text-white/70 text-sm hover:text-white transition-colors mb-4"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            All Services
                        </Link>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <service.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-primary-light text-xs font-bold tracking-[0.2em] uppercase">
                                    {service.tagline}
                                </p>
                                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                                    {service.name}
                                </h1>
                            </div>
                        </div>

                        <p className="text-white/80 text-sm sm:text-base max-w-xl leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <section className="section-padding">
                <div className="container-custom">
                    <AnimatedSection>
                        <SectionHeading
                            subtitle="Our Treatments"
                            title={`${service.name} Services`}
                            description="Choose from our carefully curated selection of treatments."
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {service.services.map((item, i) => (
                            <AnimatedSection key={item.name} delay={i * 0.08}>
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className="group bg-white rounded-[var(--radius-md)] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                                >
                                    <div className="aspect-[16/10] relative overflow-hidden">
                                        <SafeImage
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 sm:p-8 flex flex-col flex-1">
                                        <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                                            {item.name}
                                        </h3>
                                        <p className="text-text-light text-sm leading-relaxed mb-6 flex-1">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-cream-dark">
                                            <div className="flex items-center gap-1.5 text-primary text-sm font-semibold">
                                                <DollarSign className="w-4 h-4" />
                                                {item.price}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-text-lighter text-xs">
                                                <Clock className="w-3.5 h-3.5" />
                                                {item.duration}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-white">
                <div className="container-custom max-w-2xl">
                    <AnimatedSection>
                        <SectionHeading
                            subtitle="FAQ"
                            title="Frequently Asked Questions"
                            description={`Common questions about our ${service.name.toLowerCase()} services.`}
                        />
                    </AnimatedSection>

                    <div className="space-y-3">
                        {service.faqs.map((faq, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="bg-cream rounded-[var(--radius-md)] overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 sm:p-7 text-left"
                                    >
                                        <span className="text-sm sm:text-base font-semibold text-dark pr-4">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-6 sm:px-7 pb-6 sm:pb-7 text-text-light text-sm leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
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
                            Ready to Experience {service.name}?
                        </h2>
                        <p className="text-text-light text-sm sm:text-base max-w-md mx-auto mb-6">
                            Book your appointment today and let our specialists take care of you.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Book Appointment
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
