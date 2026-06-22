"use client";

import { AnimatedAnchor, PhoneIcon } from "@/components/ui/AnimatedButton";
import { siteConfig } from "@/lib/site";
import type { ComponentProps } from "react";

type CallToOrderSize = "navbar" | "footer" | "hero";

const sizeVariants = {
  navbar: "call-to-order-navbar",
  footer: "call-to-order-footer",
  hero: "call-to-order-hero",
} as const;

const iconSizes = {
  navbar: "h-4 w-4",
  footer: "h-3.5 w-3.5",
  hero: "h-4 w-4",
} as const;

type CallToOrderButtonProps = Omit<
  ComponentProps<typeof AnimatedAnchor>,
  "href" | "variant" | "icon" | "children"
> & {
  size?: CallToOrderSize;
};

export default function CallToOrderButton({
  size = "navbar",
  className,
  ...props
}: CallToOrderButtonProps) {
  return (
    <AnimatedAnchor
      href={siteConfig.orderUrl}
      variant={sizeVariants[size]}
      icon={<PhoneIcon className={iconSizes[size]} />}
      aria-label={`${siteConfig.orderLabel} at ${siteConfig.phone}`}
      className={className}
      {...props}
    >
      {siteConfig.orderLabel}
    </AnimatedAnchor>
  );
}
