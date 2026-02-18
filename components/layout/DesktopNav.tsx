"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";
import { serviceCategories } from "@/data/services";

const serviceLinks = serviceCategories.map((s) => ({
    name: s.name,
    href: `/services/${s.slug}`,
    icon: s.icon,
    tagline: s.tagline,
}));

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

interface DesktopNavProps {
    isScrolled: boolean;
}

export default function DesktopNav({ isScrolled }: DesktopNavProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-2">
                {navLinks.map((link) =>
                    link.hasDropdown ? (
                        <div
                            key={link.name}
                            ref={dropdownRef}
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <Link
                                href={link.href}
                                className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-widest uppercase transition-all duration-300 ${isScrolled
                                    ? "text-dark hover:text-primary hover:bg-primary-light/40"
                                    : "text-white/90 hover:text-white hover:bg-white/15"
                                    }`}
                            >
                                {link.name}
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </Link>

                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 12 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 min-w-[780px] bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-cream-dark/30 overflow-hidden"
                                    >
                                        {/* Arrow indicator */}
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 border-l border-t border-cream-dark/30 rotate-45" />

                                        <div className="relative px-10 pt-8 pb-8">
                                            <p className="text-xs font-bold tracking-[0.2em] uppercase text-text-lighter mb-6">
                                                Our Services
                                            </p>
                                            <div className="grid grid-cols-3 gap-3">
                                                {serviceLinks.map((service, i) => (
                                                    <motion.div
                                                        key={service.name}
                                                        initial={{ opacity: 0, y: 8 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{
                                                            delay: 0.05 * i,
                                                            type: "spring",
                                                            stiffness: 300,
                                                            damping: 24,
                                                        }}
                                                    >
                                                        <Link
                                                            href={service.href}
                                                            className="flex items-center gap-4 px-5 py-5 rounded-2xl transition-all duration-200 group hover:bg-cream"
                                                        >
                                                            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-light/50 to-accent-light/50 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                                                                <service.icon className="w-5 h-5 text-primary" />
                                                            </div>
                                                            <div className="min-w-0">
                                                                <p className="text-[13px] font-semibold text-dark group-hover:text-primary transition-colors">
                                                                    {service.name}
                                                                </p>
                                                                <p className="text-[11px] text-text-lighter mt-0.5 leading-snug">
                                                                    {service.tagline}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="border-t border-cream-dark/30 px-10 py-5 bg-cream/40">
                                            <Link
                                                href="/services"
                                                className="flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group/link"
                                            >
                                                Browse All Services
                                                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-widest uppercase transition-all duration-300 ${isScrolled
                                ? "text-dark hover:text-primary hover:bg-primary-light/40"
                                : "text-white/90 hover:text-white hover:bg-white/15"
                                }`}
                        >
                            {link.name}
                        </Link>
                    )
                )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
                <a
                    href="tel:+1234567890"
                    className={`flex items-center gap-2 text-sm font-semibold transition-colors ${isScrolled ? "text-dark" : "text-white"
                        }`}
                >
                    <Phone className="w-4 h-4" />
                    <span className="hidden xl:inline">(123) 456-7890</span>
                </a>
                <Link href="/contact" className="btn-primary !py-3 !px-6 !text-xs">
                    Book Now
                </Link>
            </div>
        </>
    );
}
