"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavbarLogo from "./NavbarLogo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 py-2 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-white/95 backdrop-blur-2xl shadow-lg "
                    : "bg-transparent  md:py-6"
                    }`}
            >
                <div className="container-custom flex items-center justify-between h-20">
                    {/* Logo */}
                    <NavbarLogo isScrolled={isScrolled} />

                    {/* Desktop Navigation */}
                    <DesktopNav isScrolled={isScrolled} />

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className={`lg:hidden p-2 rounded-xl transition-colors ${isScrolled ? "text-dark hover:bg-primary-light/20" : "text-white hover:bg-white/10"
                            }`}
                        aria-label="Toggle menu"
                    >
                        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileOpen}
                onClose={() => setIsMobileOpen(false)}
            />
        </>
    );
}
