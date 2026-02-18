"use client";

import { motion } from "framer-motion";
import { Star, Verified } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import SafeImage from "@/components/ui/SafeImage";
import { testimonials } from "@/data/services";

export default function Testimonials() {
    // Duplicate testimonials for seamless loop
    const doubledTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="section-padding overflow-hidden bg-cream-light/30">
            <div className="container-custom">
                <AnimatedSection>
                    <SectionHeading
                        subtitle="Client Praise"
                        title="Glowing Reviews"
                        description="Real stories from those who found their radiance with us."
                    />
                </AnimatedSection>
            </div>

            {/* Infinite Marquee Container */}
            <div className="mt-12 relative flex overflow-hidden py-10">
                <motion.div
                    className="flex gap-6 whitespace-nowrap"
                    animate={{
                        x: [0, "-50%"],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {doubledTestimonials.map((item, i) => (
                        <div
                            key={i}
                            className="w-[350px] sm:w-[450px] flex-shrink-0"
                        >
                            <div className="h-full bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-1">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                                        ))}
                                    </div>
                                    <Verified className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors duration-500" />
                                </div>

                                <blockquote className="text-dark/80 text-sm sm:text-base leading-relaxed italic mb-8 whitespace-normal font-medium">
                                    &ldquo;{item.text}&rdquo;
                                </blockquote>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0 border-2 border-white/80 shadow-sm">
                                        <SafeImage
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            sizes="48px"
                                            className="object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-dark text-sm tracking-tight">{item.name}</p>
                                        <p className="text-text-lighter text-[11px] uppercase font-bold tracking-[0.1em]">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Optional: Side gradients for smoother transition */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream-light/30 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream-light/30 to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
