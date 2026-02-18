import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

const serviceLinks = [
    { name: "Hair Care", href: "/services/hair-care" },
    { name: "Skin Care", href: "/services/skin-care" },
    { name: "Makeup", href: "/services/makeup" },
    { name: "Nail Art", href: "/services/nail-art" },
    { name: "Bridal", href: "/services/bridal" },
    { name: "Spa & Massage", href: "/services/spa-massage" },
];

export default function Footer() {
    return (
        <footer className="bg-dark text-white/80">
            {/* Main Footer */}
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="relative w-40 h-10">
                                <Image
                                    src="/logo.png"
                                    alt="GlowStudio Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-white/60 mb-5 max-w-xs">
                            Where beauty meets elegance. Experience luxury treatments crafted to enhance your natural radiance.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: Instagram, href: "#" },
                                { icon: Facebook, href: "#" },
                                { icon: Youtube, href: "#" },
                            ].map(({ icon: Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                                    aria-label="Social media"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-white/60 hover:text-primary-light transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-heading text-lg font-semibold text-white mb-4">Our Services</h4>
                        <ul className="space-y-2.5">
                            {serviceLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-white/60 hover:text-primary-light transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading text-lg font-semibold text-white mb-4">Get in Touch</h4>
                        <ul className="space-y-3.5">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-primary-light mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-white/60">123 Beauty Lane, Suite 100, Los Angeles, CA 90001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-primary-light flex-shrink-0" />
                                <a href="tel:+1234567890" className="text-sm text-white/60 hover:text-primary-light transition-colors">
                                    (123) 456-7890
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary-light flex-shrink-0" />
                                <a href="mailto:hello@glowstudio.com" className="text-sm text-white/60 hover:text-primary-light transition-colors">
                                    hello@glowstudio.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="w-4 h-4 text-primary-light mt-0.5 flex-shrink-0" />
                                <div className="text-sm text-white/60">
                                    <p>Mon–Fri: 9AM – 8PM</p>
                                    <p>Sat–Sun: 10AM – 6PM</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-white/40">
                        © {new Date().getFullYear()} GlowStudio. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
