"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

interface NavbarLogoProps {
    isScrolled: boolean;
}

export default function NavbarLogo({ isScrolled }: NavbarLogoProps) {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md shadow-primary/20">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
                <span
                    className={`font-heading text-xl md:text-2xl font-bold tracking-tight transition-colors ${isScrolled ? "text-dark" : "text-white"
                        }`}
                >
                    Glow
                </span>
                <span
                    className={`font-heading text-xl md:text-2xl font-light transition-colors ${isScrolled ? "text-primary" : "text-primary-light"
                        }`}
                >
                    Studio
                </span>
            </div>
        </Link>
    );
}
