"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Star, Clock, Award, Users, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { serviceCategories, testimonials, galleryImages } from "@/data/services";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&q=80"
        alt="Beauty salon interior"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJYvDbTrLJlEJZZJjHGOrNsNyaKKBRTvSl0Yz//2Q=="
      />
      <div className="overlay-gradient" />

      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-block text-primary-light text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-4">
            Premium Beauty & Wellness
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
        >
          Where Beauty
          <br />
          <span className="gradient-text">Meets Elegance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Experience luxury beauty treatments crafted to enhance your natural radiance.
          Your journey to a more beautiful you starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link href="/contact" className="btn-primary w-full sm:w-auto">
            Book Appointment
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/services" className="btn-outline !border-white/40 !text-white hover:!bg-white/10 w-full sm:w-auto">
            Our Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── About Preview ─── */
function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="rounded-[var(--radius-lg)] overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                  alt="Our salon"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJYvDbTrLJlEJZZJjHGOrNsNyaKKBRTvSl0Yz//2Q=="
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-[var(--radius-lg)] -z-10" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
              About Us
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-dark leading-tight mb-4">
              A Sanctuary of Beauty <br className="hidden md:block" />
              <span className="text-primary">Since 2010</span>
            </h2>
            <p className="text-text-light text-sm sm:text-base leading-relaxed mb-4">
              At GlowStudio, we believe that beauty is more than skin deep. Founded over a decade ago,
              our mission has been to create a welcoming space where you can relax, rejuvenate, and
              rediscover your inner glow.
            </p>
            <p className="text-text-light text-sm sm:text-base leading-relaxed mb-6">
              Our team of certified professionals uses only premium products and the latest
              techniques to deliver results that exceed expectations.
            </p>
            <Link href="/about" className="btn-primary">
              Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── Services Grid ─── */
function ServicesGrid() {
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
              <Link href={`/services/${service.slug}`}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative rounded-[var(--radius-lg)] overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
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

                  <div className="p-8 sm:p-10">
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
                    <div className="mt-3 flex items-center text-primary text-sm font-semibold">
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

/* ─── Stats / Why Choose Us ─── */
function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".stat-number").forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0");
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Users, number: 5000, suffix: "+", label: "Happy Clients" },
    { icon: Award, number: 15, suffix: "+", label: "Years Experience" },
    { icon: Sparkles, number: 50, suffix: "+", label: "Beauty Services" },
    { icon: Clock, number: 98, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            subtitle="Why Choose Us"
            title="Beauty You Can Trust"
            description="We're committed to delivering exceptional results with every visit."
            light
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center p-6 sm:p-8">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary-light" />
                </div>
                <div className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
                  <span className="stat-number" data-target={stat.number}>0</span>
                  <span className="text-primary-light">{stat.suffix}</span>
                </div>
                <p className="text-white/60 text-xs sm:text-sm">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery Preview ─── */
function GalleryPreview() {
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.slice(0, 4).map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-[var(--radius-md)] overflow-hidden cursor-pointer group ${i === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-auto md:h-full" : "aspect-square"
                  }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJYvDbTrLJlEJZZJjHGOrNsNyaKKBRTvSl0Yz//2Q=="
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

/* ─── Testimonials ─── */
function Testimonials() {
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
                  <Image
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

/* ─── CTA Banner ─── */
function CTABanner() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200&q=80"
        alt="Spa background"
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJYvDbTrLJlEJZZJjHGOrNsNyaKKBRTvSl0Yz//2Q=="
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/70 to-dark/80" />

      <div className="container-custom relative z-10 text-center">
        <AnimatedSection>
          <span className="inline-block text-primary-light text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Ready to Glow?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Book Your Appointment Today
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Let our experts create a personalized beauty experience just for you.
            Your transformation awaits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Book Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+1234567890" className="btn-outline !border-white/40 !text-white hover:!bg-white/10 w-full sm:w-auto">
              Call Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}
