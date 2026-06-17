"use client";

import Link from "next/link";
import {
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
  useState,
} from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline-primary"
  | "outline-light"
  | "outline-white"
  | "navbar-outline"
  | "navbar-secondary"
  | "footer-outline"
  | "footer-secondary"
  | "menu-pill"
  | "doordash"
  | "doordash-navbar"
  | "doordash-footer"
  | "doordash-sticky";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary-filled",
  "outline-primary": "btn-outline-primary",
  "outline-light": "btn-outline-light",
  "outline-white": "btn-outline-white",
  "navbar-outline": "btn-navbar-outline",
  "navbar-secondary": "btn-navbar-secondary",
  "footer-outline": "btn-footer-outline",
  "footer-secondary": "btn-footer-secondary",
  "menu-pill": "btn-menu-pill",
  doordash: "btn-doordash",
  "doordash-navbar": "btn-doordash-navbar",
  "doordash-footer": "btn-doordash-footer",
  "doordash-sticky": "btn-doordash-sticky",
};

const doorDashVariants = new Set<ButtonVariant>([
  "doordash",
  "doordash-navbar",
  "doordash-footer",
  "doordash-sticky",
]);

type SharedProps = {
  variant: ButtonVariant;
  cta?: boolean;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

function useRipple(enabled: boolean) {
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  const addRipple = (event: MouseEvent<HTMLElement>) => {
    if (!enabled) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const ripple = {
      id: Date.now(),
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    setRipples((current) => [...current, ripple]);
    window.setTimeout(() => {
      setRipples((current) => current.filter((item) => item.id !== ripple.id));
    }, 600);
  };

  return { ripples, addRipple };
}

function ButtonInner({
  children,
  icon,
  ripples,
}: {
  children: ReactNode;
  icon?: ReactNode;
  ripples: { id: number; x: number; y: number }[];
}) {
  return (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple-span"
          style={{ left: ripple.x, top: ripple.y }}
          aria-hidden="true"
        />
      ))}
      {icon ? <span className="btn-icon shrink-0">{icon}</span> : null}
      <span className="relative z-[1]">{children}</span>
    </>
  );
}

function buildClassName(
  variant: ButtonVariant,
  cta: boolean | undefined,
  className?: string,
) {
  const isDoorDash = doorDashVariants.has(variant);

  return [
    variantClasses[variant],
    isDoorDash ? "btn-doordash-pulse" : cta ? "btn-cta-pulse" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function DoorDashIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 7V5.5A4 4 0 0 1 16 5.5V7h3a1 1 0 0 1 1 1v10.5A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5V8a1 1 0 0 1 1-1h3zm2 0h4V5.5a2 2 0 0 0-4 0V7zm-1 5.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm8 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
    </svg>
  );
}

type AnimatedLinkProps = SharedProps &
  Omit<ComponentProps<typeof Link>, "className" | "children">;

export function AnimatedLink({
  variant,
  cta,
  icon,
  className,
  children,
  onClick,
  ...props
}: AnimatedLinkProps) {
  const { ripples, addRipple } = useRipple(!!cta || doorDashVariants.has(variant));

  return (
    <Link
      {...props}
      className={buildClassName(variant, cta, className)}
      onClick={(event) => {
        addRipple(event);
        onClick?.(event);
      }}
    >
      <ButtonInner icon={icon} ripples={ripples}>
        {children}
      </ButtonInner>
    </Link>
  );
}

type AnimatedAnchorProps = SharedProps &
  Omit<ComponentProps<"a">, "className" | "children">;

export function AnimatedAnchor({
  variant,
  cta,
  icon,
  className,
  children,
  onClick,
  ...props
}: AnimatedAnchorProps) {
  const { ripples, addRipple } = useRipple(!!cta || doorDashVariants.has(variant));

  return (
    <a
      {...props}
      className={buildClassName(variant, cta, className)}
      onClick={(event) => {
        addRipple(event);
        onClick?.(event);
      }}
    >
      <ButtonInner icon={icon} ripples={ripples}>
        {children}
      </ButtonInner>
    </a>
  );
}

type NavLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  className?: string;
  size?: "sm" | "md";
};

export function NavLink({
  className,
  size = "md",
  children,
  ...props
}: NavLinkProps) {
  return (
    <Link
      {...props}
      className={`nav-link ${size === "sm" ? "nav-link-sm" : "nav-link-md"} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}

type NavAnchorProps = Omit<ComponentProps<"a">, "className"> & {
  className?: string;
  size?: "sm" | "md";
};

export function NavAnchor({
  className,
  size = "md",
  children,
  ...props
}: NavAnchorProps) {
  return (
    <a
      {...props}
      className={`nav-link ${size === "sm" ? "nav-link-sm" : "nav-link-md"} ${className ?? ""}`}
    >
      {children}
    </a>
  );
}

export function IconButton({
  className,
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button {...props} className={`btn-icon-button ${className ?? ""}`}>
      {children}
    </button>
  );
}
