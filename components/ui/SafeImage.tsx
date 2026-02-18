"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
    fallbackSrc?: string;
}

export default function SafeImage({
    src,
    fallbackSrc = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80", // Default salon fallback
    alt,
    ...props
}: SafeImageProps) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setImgSrc(src);
        setHasError(false);
    }, [src]);

    return (
        <div className={`relative w-full h-full bg-cream-dark/50 ${hasError ? "animate-pulse" : ""}`}>
            <Image
                {...props}
                src={imgSrc}
                alt={alt}
                onError={() => {
                    setHasError(true);
                    setImgSrc(fallbackSrc);
                }}
                className={`transition-opacity duration-300 ${props.className || ""} ${hasError ? "opacity-90" : "opacity-100"}`}
            />
        </div>
    );
}
