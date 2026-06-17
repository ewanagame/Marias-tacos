"use client";

import { AnimatedAnchor, DoorDashIcon } from "@/components/ui/AnimatedButton";
import { siteConfig } from "@/lib/site";
import type { ComponentProps } from "react";

type DoorDashSize = "hero" | "navbar" | "footer" | "sticky";

const sizeVariants = {
  hero: "doordash",
  navbar: "doordash-navbar",
  footer: "doordash-footer",
  sticky: "doordash-sticky",
} as const;

type DoorDashOrderButtonProps = Omit<
  ComponentProps<typeof AnimatedAnchor>,
  "href" | "variant" | "cta" | "icon" | "children" | "target" | "rel"
> & {
  size?: DoorDashSize;
};

export default function DoorDashOrderButton({
  size = "hero",
  className,
  ...props
}: DoorDashOrderButtonProps) {
  const iconSize =
    size === "footer" ? "h-4 w-4" : size === "sticky" ? "h-5 w-5" : "h-5 w-5";

  return (
    <AnimatedAnchor
      href={siteConfig.doorDashUrl}
      variant={sizeVariants[size]}
      cta
      icon={<DoorDashIcon className={iconSize} />}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${siteConfig.doorDashLabel} on DoorDash`}
      className={className}
      {...props}
    >
      {siteConfig.doorDashLabel}
    </AnimatedAnchor>
  );
}
