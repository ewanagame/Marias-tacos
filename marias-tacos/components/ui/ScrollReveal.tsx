"use client";

import {
  type ElementType,
  type Ref,
} from "react";
import {
  useScrollAnimation,
  type ScrollAnimationVariant,
} from "@/hooks/useScrollAnimation";

type ScrollRevealProps<T extends ElementType> = {
  as?: T;
  variant?: ScrollAnimationVariant;
  delay?: number;
  triggerOnMount?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "style">;

export function ScrollReveal<T extends ElementType = "div">({
  as,
  variant = "fade-up",
  delay = 0,
  triggerOnMount = false,
  className = "",
  style,
  children,
  ...props
}: ScrollRevealProps<T>) {
  const Component = as ?? "div";
  const { ref, className: animationClass, style: delayStyle } =
    useScrollAnimation({
      variant,
      delay,
      triggerOnMount,
    });

  return (
    <Component
      ref={ref as Ref<never>}
      className={[animationClass, className].filter(Boolean).join(" ")}
      style={{ ...delayStyle, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}
