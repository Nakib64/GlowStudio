"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SafeImage from "@/components/ui/SafeImage";

export default function CTABanner() {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            <SafeImage
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200&q=80"
                alt="Spa background"
                fill
                sizes="100vw"
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJYvDbTrLJlEJZZJjHGOrNsNyaKKBRTvSl0Yz//2Q=="
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/70 to-dark/80" />

            <div className="container-custom relative z-10 text-center">
                <AnimatedSection>
                    <span className="inline-block text-primary-light text-xs font-bold tracking-[0.25em] uppercase mb-4">
                        Ready to Glow?
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Book Your Appointment Today
                    </h2>
                    <p className="text-white/70 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
                        Let our experts create a personalized beauty experience just for you.
                        Your transformation awaits.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link href="/contact" className="btn-primary w-full sm:w-auto">
                            Book Now
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a href="tel:+1234567890" className="btn-outline !border-white/40 !text-white hover:!bg-white/10 w-full sm:w-auto">
                            Call Us
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
