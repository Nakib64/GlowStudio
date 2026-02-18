"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Phone, Sparkles } from "lucide-react";
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

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-40 lg:hidden"
                >
                    <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" onClick={onClose} />

                    <motion.nav
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
                    >
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between p-6 border-b border-cream-dark">
                            <Link href="/" className="flex items-center gap-2" onClick={onClose}>
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                    <Sparkles className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-heading text-lg font-bold text-dark">
                                    Glow<span className="text-primary font-light">Studio</span>
                                </span>
                            </Link>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-xl hover:bg-cream transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5 text-dark" />
                            </button>
                        </div>

                        {/* Mobile Links */}
                        <div className="flex-1 overflow-y-auto pt-20 px-4">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                >
                                    {link.hasDropdown ? (
                                        <div>
                                            <button
                                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                                className="flex items-center justify-between w-full px-5 py-4 rounded-xl text-base font-semibold text-dark hover:bg-cream transition-colors"
                                            >
                                                {link.name}
                                                <ChevronDown
                                                    className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {isServicesOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pl-4 pb-2 space-y-2">
                                                            {serviceLinks.map((service) => (
                                                                <Link
                                                                    key={service.name}
                                                                    href={service.href}
                                                                    onClick={onClose}
                                                                    className="flex items-center gap-3 px-5 py-3 rounded-lg text-sm text-text-light hover:text-primary hover:bg-cream-dark transition-all"
                                                                >
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                                                                    {service.name}
                                                                </Link>
                                                            ))}
                                                            <Link
                                                                href="/services"
                                                                onClick={onClose}
                                                                className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-primary hover:bg-primary-light/30 transition-all"
                                                            >
                                                                View All Services →
                                                            </Link>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={onClose}
                                            className="block px-5 py-4 rounded-xl text-base font-semibold text-dark hover:bg-cream hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Footer */}
                        <div className="p-6 border-t border-cream-dark space-y-3">
                            <a
                                href="tel:+1234567890"
                                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-cream text-dark font-semibold text-sm"
                            >
                                <Phone className="w-4 h-4" />
                                (123) 456-7890
                            </a>
                            <Link
                                href="/contact"
                                onClick={onClose}
                                className="btn-primary w-full text-center"
                            >
                                Book Appointment
                            </Link>
                        </div>
                    </motion.nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
