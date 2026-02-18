"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import SafeImage from "@/components/ui/SafeImage";
import { testimonials } from "@/data/services";

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const total = testimonials.length;
    const next = () => setCurrent((p) => (p + 1) % total);
    const prev = () => setCurrent((p) => (p - 1 + total) % total);

    return (
        <section className="section-padding">
            <div className="container-custom">
                <AnimatedSection>
                    <SectionHeading
                        subtitle="Testimonials"
                        title="What Our Clients Say"
                        description="Real stories from real people who found their glow with us."
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="max-w-2xl mx-auto">
                        <div className="relative bg-white rounded-[var(--radius-lg)] p-10 sm:p-12 shadow-sm">
                            <div className="absolute -top-3 left-8 text-5xl text-primary/20 font-heading">&ldquo;</div>

                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                                ))}
                            </div>

                            <p className="text-text-light text-sm sm:text-base leading-relaxed mb-6 min-h-[4.5rem]">
                                {testimonials[current].text}
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0">
                                    <SafeImage
                                        src={testimonials[current].image}
                                        alt={testimonials[current].name}
                                        fill
                                        sizes="48px"
                                        className="object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-dark text-sm">{testimonials[current].name}</p>
                                    <p className="text-text-lighter text-xs">{testimonials[current].role}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4 mt-6">
                            <button onClick={prev} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-cream transition-colors" aria-label="Previous testimonial">
                                <ChevronLeft className="w-5 h-5 text-dark" />
                            </button>
                            <div className="flex gap-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-primary-light"
                                            }`}
                                        aria-label={`Go to testimonial ${i + 1}`}
                                    />
                                ))}
                            </div>
                            <button onClick={next} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-cream transition-colors" aria-label="Next testimonial">
                                <ChevronRight className="w-5 h-5 text-dark" />
                            </button>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
