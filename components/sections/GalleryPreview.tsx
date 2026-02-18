"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import SafeImage from "@/components/ui/SafeImage";
import { galleryImages } from "@/data/services";

export default function GalleryPreview() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <AnimatedSection>
                    <SectionHeading
                        subtitle="Our Work"
                        title="Beauty Portfolio"
                        description="A glimpse into the transformations and artistry created at our studio."
                    />
                </AnimatedSection>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                    {galleryImages.slice(0, 5).map((img, i) => (
                        <AnimatedSection
                            key={i}
                            delay={i * 0.1}
                            className={`${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative rounded-[var(--radius-lg)] overflow-hidden cursor-pointer group aspect-[4/5] md:aspect-auto h-full min-h-[200px]"
                            >
                                <SafeImage
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes={i === 0 ? "50vw" : "25vw"}
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJYvDbTrLJlEJZZJjHGOrNsNyaKKBRTvSl0Yz//2Q=="
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                                    <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                                        {img.category}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection delay={0.3}>
                    <div className="text-center mt-8 md:mt-10">
                        <Link href="/gallery" className="btn-outline">
                            View Full Gallery
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
