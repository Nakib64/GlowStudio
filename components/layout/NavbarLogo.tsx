"use client";

import Link from "next/link";
import Image from "next/image";

interface NavbarLogoProps {
    isScrolled: boolean;
}

export default function NavbarLogo({ isScrolled }: NavbarLogoProps) {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-40 h-20 md:w-48 md:h-20">
                <Image
                    src="/logo.png"
                    alt="GlowStudio Logo"
                    fill
                    className="object-contain transition-all duration-300"
                    priority
                />
            </div>
        </Link>
    );
}
