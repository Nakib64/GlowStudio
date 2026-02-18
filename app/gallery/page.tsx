"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import SafeImage from "@/components/ui/SafeImage";
import { galleryImages } from "@/data/services";

const categories = ["All", "Hair", "Skin", "Nails", "Bridal"];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [lightbox, setLightbox] = useState<number | null>(null);

    const filtered =
        activeCategory === "All"
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeCategory);

    return (
        <>
            {/* Hero */}
            <section className="relative h-[50svh] min-h-[320px] flex items-center justify-center overflow-hidden">
                <SafeImage
                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1400&q=80"
                    alt="Our gallery"
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
                        Our Portfolio
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                    >
                        Gallery
                    </motion.h1>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    {/* Filters */}
                    <AnimatedSection>
                        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat
                                        ? "bg-primary text-white shadow-md"
                                        : "bg-white text-text-light hover:bg-cream-dark"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 grid-auto-flow-dense">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((img, i) => {
                                // Bento spans logic (only when "All" is selected for best visual pattern)
                                const isAll = activeCategory === "All";
                                let spanClass = "";
                                if (isAll) {
                                    if (i === 0 || i === 9 || i === 17) spanClass = "md:col-span-2 md:row-span-2";
                                    else if (i === 3 || i === 12) spanClass = "md:row-span-2";
                                    else if (i === 5 || i === 14) spanClass = "md:col-span-2";
                                }

                                return (
                                    <motion.div
                                        key={img.src}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                        className={`${spanClass}`}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            onClick={() => setLightbox(i)}
                                            className="relative rounded-[var(--radius-lg)] overflow-hidden cursor-pointer group h-full min-h-[200px] sm:min-h-[250px]"
                                        >
                                            <SafeImage
                                                src={img.src}
                                                alt={img.alt}
                                                fill
                                                sizes={spanClass.includes("col-span-2") ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"}
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                                placeholder="blur"
                                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJYvDbTrLJlEJZZJjHGOrNsNyaKKBRTvSl0Yz//2Q=="
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                                <span className="text-primary-light text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                                                    {img.category}
                                                </span>
                                                <h3 className="text-white text-base font-semibold">
                                                    {img.alt}
                                                </h3>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-dark/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setLightbox(null)}
                    >
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                            aria-label="Close lightbox"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-3xl aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <SafeImage
                                src={filtered[lightbox].src.replace("w=600", "w=1200")}
                                alt={filtered[lightbox].alt}
                                fill
                                sizes="90vw"
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
