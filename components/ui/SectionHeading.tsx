interface SectionHeadingProps {
    subtitle?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    light?: boolean;
}

export default function SectionHeading({
    subtitle,
    title,
    description,
    align = "center",
    light = false,
}: SectionHeadingProps) {
    return (
        <div className={`mb-10 md:mb-14 ${align === "center" ? "text-center" : "text-left"}`}>
            {subtitle && (
                <span
                    className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 ${light ? "text-primary-light" : "text-primary"
                        }`}
                >
                    {subtitle}
                </span>
            )}
            <h2
                className={`font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-dark"
                    }`}
            >
                {title}
            </h2>
            {description && (
                <p
                    className={`mt-3 text-sm sm:text-base max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""
                        } ${light ? "text-white/70" : "text-text-light"}`}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
