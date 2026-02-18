import { Scissors, Sparkles, Palette, Heart, Crown, Flower2 } from "lucide-react";

export interface ServiceItem {
    name: string;
    description: string;
    price: string;
    duration: string;
    image: string;
}

export interface ServiceCategory {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    image: string;
    heroImage: string;
    services: ServiceItem[];
    faqs: { question: string; answer: string }[];
}

export const serviceCategories: ServiceCategory[] = [
    {
        slug: "hair-care",
        name: "Hair Care",
        tagline: "Your Crown, Your Glory",
        description:
            "From precision cuts to vibrant color transformations, our expert stylists craft the perfect look that reflects your personality and lifestyle.",
        icon: Scissors,
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
        services: [
            {
                name: "Precision Haircut",
                description: "Custom cut tailored to your face shape and style",
                price: "$45–$85",
                duration: "45 min",
                image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80"
            },
            {
                name: "Blowout & Styling",
                description: "Professional blowout with heat styling",
                price: "$35–$55",
                duration: "30 min",
                image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80"
            },
            {
                name: "Color & Highlights",
                description: "Full color, balayage, or highlight techniques",
                price: "$120–$250",
                duration: "2–3 hrs",
                image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80"
            },
            {
                name: "Keratin Treatment",
                description: "Smoothing treatment for frizz-free, shiny hair",
                price: "$200–$350",
                duration: "2–3 hrs",
                image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=600&q=80"
            },
            {
                name: "Deep Conditioning",
                description: "Intensive moisture treatment for damaged hair",
                price: "$40–$60",
                duration: "30 min",
                image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80"
            },
            {
                name: "Updo & Special Styling",
                description: "Elegant updos for events and special occasions",
                price: "$75–$150",
                duration: "1 hr",
                image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80"
            },
        ],
        faqs: [
            { question: "How often should I get a haircut?", answer: "We recommend every 6–8 weeks for most styles. If you're growing out your hair, every 8–12 weeks for a trim to maintain healthy ends." },
            { question: "How do I maintain my color at home?", answer: "Use sulfate-free shampoo, avoid hot water, and apply color-safe conditioner. We also offer take-home treatments." },
            { question: "Do you offer consultations?", answer: "Yes! We offer free 15-minute consultations to discuss your desired look before booking a full appointment." },
        ],
    },
    {
        slug: "skin-care",
        name: "Skin Care",
        tagline: "Reveal Your Natural Glow",
        description:
            "Advanced skincare treatments using premium products to cleanse, rejuvenate, and protect your skin for a radiant, youthful complexion.",
        icon: Sparkles,
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80",
        services: [
            {
                name: "Classic Facial",
                description: "Deep cleansing facial with extraction and mask",
                price: "$75–$95",
                duration: "60 min",
                image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?w=600&q=80"
            },
            {
                name: "Anti-Aging Facial",
                description: "Targeted treatment to reduce fine lines and wrinkles",
                price: "$120–$160",
                duration: "75 min",
                image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80"
            },
            {
                name: "Hydra Facial",
                description: "Multi-step treatment for deep hydration and glow",
                price: "$150–$200",
                duration: "60 min",
                image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80"
            },
            {
                name: "Chemical Peel",
                description: "Exfoliating treatment for smoother, brighter skin",
                price: "$100–$180",
                duration: "45 min",
                image: "https://images.unsplash.com/photo-1596755094514-f87034a264c6?w=600&q=80"
            },
            {
                name: "Microdermabrasion",
                description: "Crystal exfoliation for refined skin texture",
                price: "$90–$130",
                duration: "45 min",
                image: "https://images.unsplash.com/photo-1505944270255-bd2b68af6422?w=600&q=80"
            },
            {
                name: "LED Light Therapy",
                description: "Non-invasive therapy for acne and anti-aging",
                price: "$60–$80",
                duration: "30 min",
                image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?w=600&q=80"
            },
        ],
        faqs: [
            { question: "How often should I get a facial?", answer: "For optimal results, we recommend a professional facial every 4–6 weeks to align with your skin's natural renewal cycle." },
            { question: "Which facial is right for my skin type?", answer: "During your appointment, our esthetician will perform a skin analysis and recommend the best treatment for your specific concerns." },
            { question: "Is there any downtime after a chemical peel?", answer: "Mild peels have minimal downtime — slight redness for 1–2 days. Medium peels may require 3–5 days of recovery." },
        ],
    },
    {
        slug: "makeup",
        name: "Makeup",
        tagline: "Artistry That Inspires",
        description:
            "Professional makeup services for every occasion, from subtle everyday glam to bold editorial looks, using luxury cosmetic brands.",
        icon: Palette,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=1200&q=80",
        services: [
            {
                name: "Everyday Glam",
                description: "Natural, polished look for daily wear",
                price: "$55–$75",
                duration: "45 min",
                image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80"
            },
            {
                name: "Evening & Party",
                description: "Glamorous look for nights out and events",
                price: "$75–$100",
                duration: "60 min",
                image: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80"
            },
            {
                name: "Editorial & Creative",
                description: "Bold, artistic looks for photoshoots",
                price: "$120–$200",
                duration: "75 min",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80"
            },
            {
                name: "Makeup Lesson",
                description: "One-on-one tutorial with your own products",
                price: "$90–$120",
                duration: "90 min",
                image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80"
            },
            {
                name: "Lash Application",
                description: "Individual or strip lash application",
                price: "$25–$45",
                duration: "20 min",
                image: "https://images.unsplash.com/photo-1591360236480-9c6a4cb3a6de?w=600&q=80"
            },
            {
                name: "Airbrush Makeup",
                description: "Flawless, long-lasting airbrushed finish",
                price: "$100–$150",
                duration: "60 min",
                image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80"
            },
        ],
        faqs: [
            { question: "Should I bring my own makeup?", answer: "No need! We use high-end brands like MAC, Charlotte Tilbury, and NARS. For makeup lessons, you can bring your own products." },
            { question: "How long will my makeup last?", answer: "Our professional makeup typically lasts 8–12 hours. Airbrush makeup can last up to 16 hours." },
            { question: "Can I do a trial before my event?", answer: "Absolutely! We highly recommend a trial, especially for bridal or special event makeup." },
        ],
    },
    {
        slug: "nail-art",
        name: "Nail Art",
        tagline: "Express Yourself, Tip to Toe",
        description:
            "Creative nail designs and luxurious manicure-pedicure services using top-quality products for beautiful, long-lasting results.",
        icon: Heart,
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1610992015732-2449b0ae4bf6?w=1200&q=80",
        services: [
            {
                name: "Classic Manicure",
                description: "Nail shaping, cuticle care, and polish",
                price: "$25–$35",
                duration: "30 min",
                image: "https://images.unsplash.com/photo-1629135096537-8324e934336c?w=600&q=80"
            },
            {
                name: "Gel Manicure",
                description: "Long-lasting, chip-resistant gel polish",
                price: "$40–$55",
                duration: "45 min",
                image: "https://images.unsplash.com/photo-1610992015732-2449b0ae4bf6?w=600&q=80"
            },
            {
                name: "Luxury Pedicure",
                description: "Full foot treatment with scrub and mask",
                price: "$55–$75",
                duration: "60 min",
                image: "https://images.unsplash.com/photo-1519415598372-e523074648ca?w=600&q=80"
            },
            {
                name: "Nail Art Design",
                description: "Custom artistic designs and embellishments",
                price: "$15–$50+",
                duration: "30+ min",
                image: "https://images.unsplash.com/photo-1629135096537-8324e934336c?w=600&q=80"
            },
            {
                name: "Acrylic Extensions",
                description: "Full set of acrylic nail extensions",
                price: "$65–$100",
                duration: "90 min",
                image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80"
            },
            {
                name: "Dip Powder",
                description: "Durable, lightweight dip powder nails",
                price: "$45–$65",
                duration: "45 min",
                image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80"
            },
        ],
        faqs: [
            { question: "How long do gel nails last?", answer: "Gel manicures typically last 2–3 weeks without chipping. We recommend removal and reapplication every 2–3 weeks." },
            { question: "Is dip powder better than gel?", answer: "Both are great options! Dip powder tends to be more durable and doesn't require UV light, while gel offers more variety in finishes." },
            { question: "Do you offer vegan/cruelty-free products?", answer: "Yes! We carry several vegan and cruelty-free polish lines. Just let your technician know your preference." },
        ],
    },
    {
        slug: "bridal",
        name: "Bridal",
        tagline: "Your Perfect Day, Perfected",
        description:
            "Comprehensive bridal beauty packages including hair styling, makeup, skincare prep, and nail services to make you glow on your special day.",
        icon: Crown,
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=80",
        services: [
            {
                name: "Bridal Makeup",
                description: "Luxe bridal makeup with trial included",
                price: "$250–$400",
                duration: "2 hrs",
                image: "https://images.unsplash.com/photo-1546707012-c51f33032672?w=600&q=80"
            },
            {
                name: "Bridal Hair Styling",
                description: "Elegant bridal updo or styling with trial",
                price: "$200–$350",
                duration: "2 hrs",
                image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80"
            },
            {
                name: "Complete Bridal Package",
                description: "Hair, makeup, nails, and facial combo",
                price: "$500–$800",
                duration: "Full day",
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80"
            },
            {
                name: "Bridesmaid Package",
                description: "Hair and makeup for the bridal party",
                price: "$120–$180/person",
                duration: "90 min",
                image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=600&q=80"
            },
            {
                name: "Pre-Wedding Skin Prep",
                description: "Series of facials leading up to the big day",
                price: "$300–$500",
                duration: "4 sessions",
                image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?w=600&q=80"
            },
            {
                name: "Mehndi & Henna",
                description: "Traditional or modern henna application",
                price: "$100–$300",
                duration: "1–3 hrs",
                image: "https://images.unsplash.com/photo-1582230007399-4d29388147d1?w=600&q=80"
            },
        ],
        faqs: [
            { question: "How far in advance should I book?", answer: "We recommend booking 3–6 months ahead, especially for peak wedding season (May–October). Trial appointments should be done 1–2 months before." },
            { question: "Do you travel to wedding venues?", answer: "Yes! We offer on-location services for an additional travel fee based on distance." },
            { question: "What's included in the trial?", answer: "The trial includes a full application of your chosen look, consultation on style preferences, and photos for reference on the wedding day." },
        ],
    },
    {
        slug: "spa-massage",
        name: "Spa & Massage",
        tagline: "Unwind, Relax, Rejuvenate",
        description:
            "Indulge in our therapeutic spa treatments and massage therapies designed to melt stress away and restore your body and mind.",
        icon: Flower2,
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200&q=80",
        services: [
            {
                name: "Swedish Massage",
                description: "Classic relaxation massage for full body",
                price: "$80–$120",
                duration: "60 min",
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80"
            },
            {
                name: "Deep Tissue Massage",
                description: "Focused pressure on muscle tension areas",
                price: "$100–$140",
                duration: "60 min",
                image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80"
            },
            {
                name: "Hot Stone Therapy",
                description: "Heated stones for deep muscle relaxation",
                price: "$120–$160",
                duration: "75 min",
                image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80"
            },
            {
                name: "Aromatherapy",
                description: "Essential oil massage for holistic wellness",
                price: "$90–$130",
                duration: "60 min",
                image: "https://images.unsplash.com/photo-1515600334475-258ca83d09a2?w=600&q=80"
            },
            {
                name: "Body Wrap",
                description: "Detoxifying or hydrating full body wrap",
                price: "$100–$150",
                duration: "75 min",
                image: "https://images.unsplash.com/photo-1591343395902-1adcb454c2e4?w=600&q=80"
            },
            {
                name: "Couples Massage",
                description: "Side-by-side massage for two",
                price: "$180–$260",
                duration: "60 min",
                image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80"
            },
        ],
        faqs: [
            { question: "What should I wear to a massage?", answer: "You'll be provided with a robe and slippers. You undress to your comfort level — you'll be draped with sheets throughout." },
            { question: "Can I request a specific therapist?", answer: "Absolutely! If you have a preferred therapist, mention it when booking and we'll do our best to accommodate." },
            { question: "Are there any health conditions to note?", answer: "Please inform us of any medical conditions, allergies, or pregnancies before your treatment so we can tailor the service safely." },
        ],
    },
];

export const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Regular Client",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
        text: "GlowStudio has completely transformed my self-care routine. The atmosphere is so calming and the results are always amazing. My skin has never looked better!",
        rating: 5,
    },
    {
        name: "Emily Rodriguez",
        role: "Bridal Client",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
        text: "They made me feel like a queen on my wedding day. The bridal package was worth every penny. My bridesmaids all looked stunning too!",
        rating: 5,
    },
    {
        name: "Jessica Thompson",
        role: "Monthly Subscriber",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
        text: "I've been coming here for over a year now and the quality is consistently exceptional. The team truly cares about each client. Highly recommend!",
        rating: 5,
    },
    {
        name: "Aisha Patel",
        role: "First-time Client",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
        text: "Walked in stressed, walked out feeling like a whole new person. The hot stone massage and facial combo was absolutely heavenly.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Groom Package",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
        text: "Professional, clean, and top-tier service. The stylist knew exactly what would suit me. Definitely coming back for my regular cuts.",
        rating: 5,
    },
    {
        name: "Sophie Laurent",
        role: "VIP Member",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
        text: "The membership is the best investment I've made for my skin. Every aesthetician is knowledgeable and the premium products are incredible.",
        rating: 5,
    },
    {
        name: "David Wilson",
        role: "Executive Styling",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
        text: "The attention to detail here is unmatched. They don't just give you a haircut; they provide a full luxury experience. 10/10.",
        rating: 5,
    },
    {
        name: "Elena Petrov",
        role: "Skincare Addict",
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&q=80",
        text: "I've tried many luxury salons, but GlowStudio is in a league of its own. The HydraFacial results were instant and lasting.",
        rating: 5,
    },
    {
        name: "Olivia Brooks",
        role: "Frequent Flyer",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
        text: "Whenever I'm in town, this is my first stop. The staff are so welcoming and the service is always efficient yet pampering.",
        rating: 5,
    },
    {
        name: "Marcus Thorne",
        role: "Corporate Client",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80",
        text: "Excellent service and a modern, high-end atmosphere. It's the perfect place to unwind after a busy week of meetings.",
        rating: 5,
    },
];

export const galleryImages = [
    { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80", alt: "Hair styling session", category: "Hair" },
    { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", alt: "Facial treatment", category: "Skin" },
    { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80", alt: "Nail art design", category: "Nails" },
    { src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80", alt: "Makeup application", category: "Hair" },
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", alt: "Bridal beauty", category: "Bridal" },
    { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80", alt: "Spa treatment", category: "Skin" },
    { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80", alt: "Skincare routine", category: "Skin" },
    { src: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80", alt: "Makeup brushes", category: "Hair" },
    { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80", alt: "Bridal preparation", category: "Bridal" },
    { src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80", alt: "Relaxing spa", category: "Skin" },
    { src: "https://images.unsplash.com/photo-1610992015732-2449b0ae4bf6?w=600&q=80", alt: "Nail polish collection", category: "Nails" },
    { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80", alt: "Hair coloring", category: "Hair" },
    { src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80", alt: "Modern Hairstyle", category: "Hair" },
    { src: "https://images.unsplash.com/photo-1620331311520-246422ff82f9?w=600&q=80", alt: "Luxury Nails", category: "Nails" },
    { src: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?w=600&q=80", alt: "Professional Facials", category: "Skin" },
    { src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80", alt: "Bridal Makeup", category: "Bridal" },
    { src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80", alt: "Hair Care Products", category: "Hair" },
    { src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?w=600&q=80", alt: "Skin rejuvenation", category: "Skin" },
    { src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80", alt: "Gel Nails", category: "Nails" },
    { src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80", alt: "Party Makeup", category: "Bridal" },
];

export const teamMembers = [
    {
        name: "Isabella Rose",
        role: "Founder & Lead Stylist",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
        description: "15+ years of experience in hair artistry and salon management.",
    },
    {
        name: "Maya Chen",
        role: "Senior Esthetician",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
        description: "Certified in advanced skincare with a passion for holistic beauty.",
    },
    {
        name: "Sophia Laurent",
        role: "Makeup Artist",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
        description: "Editorial and bridal makeup specialist with international experience.",
    },
    {
        name: "Priya Sharma",
        role: "Nail Art Specialist",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
        description: "Award-winning nail artist known for intricate, custom designs.",
    },
];
