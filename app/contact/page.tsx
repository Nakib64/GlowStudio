"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { useState } from "react";

const contactInfo = [
    {
        icon: MapPin,
        title: "Visit Us",
        lines: ["123 Beauty Lane, Suite 100", "Los Angeles, CA 90001"],
    },
    {
        icon: Phone,
        title: "Call Us",
        lines: ["(123) 456-7890", "(123) 456-7891"],
    },
    {
        icon: Mail,
        title: "Email Us",
        lines: ["hello@glowstudio.com", "bookings@glowstudio.com"],
    },
    {
        icon: Clock,
        title: "Working Hours",
        lines: ["Mon–Fri: 9AM – 8PM", "Sat–Sun: 10AM – 6PM"],
    },
];

const serviceOptions = [
    "Hair Care",
    "Skin Care",
    "Makeup",
    "Nail Art",
    "Bridal",
    "Spa & Massage",
    "Other",
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <>
            {/* Hero */}
            <section className="relative h-[45svh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1400&q=80"
                    alt="Contact us"
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
                        Get in Touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                    >
                        Contact Us
                    </motion.h1>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                        {contactInfo.map((info, i) => (
                            <AnimatedSection key={info.title} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className="bg-white rounded-[var(--radius-md)] p-7 sm:p-8 md:p-10 text-center shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-light/30 flex items-center justify-center">
                                        <info.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="font-heading text-base font-semibold text-dark mb-2">
                                        {info.title}
                                    </h3>
                                    {info.lines.map((line, j) => (
                                        <p key={j} className="text-text-light text-sm">{line}</p>
                                    ))}
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form + Map */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
                        {/* Form */}
                        <AnimatedSection>
                            <SectionHeading
                                subtitle="Book an Appointment"
                                title="Send Us a Message"
                                description="Fill out the form below and we'll get back to you within 24 hours."
                                align="left"
                            />

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-50 border border-green-200 rounded-[var(--radius-md)] p-6 text-center"
                                >
                                    <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
                                        <Send className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="font-heading text-lg font-semibold text-green-800 mb-1">
                                        Message Sent!
                                    </h3>
                                    <p className="text-green-600 text-sm">
                                        Thank you for reaching out. We&apos;ll get back to you soon.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-dark mb-1.5">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Your name"
                                                className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-cream-dark bg-cream/50 text-sm text-dark placeholder:text-text-lighter focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-dark mb-1.5">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="you@example.com"
                                                className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-cream-dark bg-cream/50 text-sm text-dark placeholder:text-text-lighter focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-dark mb-1.5">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="(123) 456-7890"
                                                className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-cream-dark bg-cream/50 text-sm text-dark placeholder:text-text-lighter focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-dark mb-1.5">
                                                Service
                                            </label>
                                            <select
                                                className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-cream-dark bg-cream/50 text-sm text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                                            >
                                                <option value="">Select a service</option>
                                                {serviceOptions.map((opt) => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-dark mb-1.5">
                                            Message
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Tell us about what you're looking for..."
                                            className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-cream-dark bg-cream/50 text-sm text-dark placeholder:text-text-lighter focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                                        />
                                    </div>

                                    <button type="submit" className="btn-primary w-full sm:w-auto">
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </button>
                                </form>
                            )}
                        </AnimatedSection>

                        {/* Map */}
                        <AnimatedSection delay={0.2}>
                            <div className="rounded-[var(--radius-lg)] overflow-hidden h-full min-h-[350px] sm:min-h-[400px] shadow-sm">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.25!3d34.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzAwLjAiTiAxMTjCsDE1JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: 350 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="GlowStudio Location"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </>
    );
}
