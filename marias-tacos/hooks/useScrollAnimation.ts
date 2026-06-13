"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";

export type ScrollAnimationVariant =
  | "fade-up"
  | "section-header"
  | "menu-card"
  | "price-badge"
  | "emoji-spin"
  | "hero-headline"
  | "hero-cta"
  | "slide-left"
  | "slide-right";

const variantClasses: Record<ScrollAnimationVariant, string> = {
  "fade-up": "scroll-fade-up",
  "section-header": "scroll-section-header",
  "menu-card": "scroll-menu-card",
  "price-badge": "scroll-price-badge",
  "emoji-spin": "scroll-emoji",
  "hero-headline": "scroll-hero-headline",
  "hero-cta": "scroll-hero-cta",
  "slide-left": "scroll-slide-left",
  "slide-right": "scroll-slide-right",
};

export type UseScrollAnimationOptions = {
  variant?: ScrollAnimationVariant;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  triggerOnMount?: boolean;
};

function getReducedMotionPreference() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>({
  variant = "fade-up",
  delay = 0,
  threshold = 0.12,
  rootMargin = "0px 0px -48px 0px",
  triggerOnce = true,
  triggerOnMount = false,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (getReducedMotionPreference()) {
      setIsVisible(true);
      return;
    }

    if (triggerOnMount) {
      const timer = window.setTimeout(() => setIsVisible(true), delay);
      return () => window.clearTimeout(timer);
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, threshold, rootMargin, triggerOnce, triggerOnMount]);

  const style =
    delay > 0 && !triggerOnMount
      ? ({ "--scroll-delay": `${delay}ms` } as CSSProperties)
      : undefined;

  const className = [
    variantClasses[variant],
    isVisible ? "scroll-visible" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return { ref, isVisible, className, style };
}
