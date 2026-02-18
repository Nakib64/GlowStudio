"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";

export default function Hero() {
    return (
        <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
            <SafeImage
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&q=80"
                alt="Beauty salon interior"
                fill
                priority
                sizes="100vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJYvDbTrLJlEJZZJjHGOrNsNyaKKBRTvSl0Yz//2Q=="
            />
            <div className="overlay-gradient" />

            <div className="relative z-10 container-custom text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <span className="inline-block text-primary-light text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-4">
                        Premium Beauty & Wellness
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
                >
                    Where Beauty
                    <br />
                    <span className="gradient-text">Meets Elegance</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed"
                >
                    Experience luxury beauty treatments crafted to enhance your natural radiance.
                    Your journey to a more beautiful you starts here.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                >
                    <Link href="/contact" className="btn-primary w-full sm:w-auto">
                        Book Appointment
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/services" className="btn-outline !border-white/40 !text-white hover:!bg-white/10 w-full sm:w-auto">
                        Our Services
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
                >
                    <div className="w-1.5 h-2.5 rounded-full bg-white/60" />
                </motion.div>
            </motion.div>
        </section>
    );
}
