"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import SafeImage from "@/components/ui/SafeImage";
import { serviceCategories } from "@/data/services";

export default function ServicesGrid() {
    return (
        <section className="section-padding">
            <div className="container-custom">
                <AnimatedSection>
                    <SectionHeading
                        subtitle="What We Offer"
                        title="Our Premium Services"
                        description="From head to toe, we offer a full spectrum of beauty services tailored to your unique needs."
                    />
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {serviceCategories.map((service, i) => (
                        <AnimatedSection key={service.slug} delay={i * 0.1}>
                            <Link href={`/services/${service.slug}`} className="block h-full">
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    className="group relative h-full rounded-[var(--radius-lg)] overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer"
                                >
                                    <div className="aspect-[4/3] relative overflow-hidden">
                                        <SafeImage
                                            src={service.image}
                                            alt={service.name}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                            placeholder="blur"
                                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJYvDbTrLJlEJZZJjHGOrNsNyaKKBRTvSl0Yz//2Q=="
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                                    </div>

                                    <div className="p-8 sm:p-10 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-9 h-9 rounded-full bg-primary-light/50 flex items-center justify-center">
                                                    <service.icon className="w-4 h-4 text-primary" />
                                                </div>
                                                <h3 className="font-heading text-lg font-semibold text-dark group-hover:text-primary transition-colors">
                                                    {service.name}
                                                </h3>
                                            </div>
                                            <p className="text-text-light text-sm leading-relaxed line-clamp-2">
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="mt-4 flex items-center text-primary text-sm font-semibold">
                                            Explore
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
    );
}
