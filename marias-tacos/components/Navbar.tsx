"use client";

import {
  IconButton,
  NavLink,
} from "@/components/ui/AnimatedButton";
import CallToOrderButton from "@/components/ui/CallToOrderButton";
import DoorDashOrderButton from "@/components/ui/DoorDashOrderButton";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-40 border-b border-accent/15 bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="min-w-0 font-serif text-lg font-bold leading-tight text-primary transition-all duration-150 ease-in-out hover:scale-105 hover:text-secondary active:scale-95 sm:text-2xl md:text-3xl"
          onClick={() => setIsOpen(false)}
        >
          Maria&apos;s Tacos
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          ))}
          <div className="flex items-center gap-2">
            <CallToOrderButton size="navbar" />
            <DoorDashOrderButton size="navbar" />
          </div>
        </nav>

        <IconButton
          type="button"
          className="md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          )}
        </IconButton>
      </div>

      {isOpen && (
        <nav className="border-t border-accent/10 bg-background px-4 py-4 sm:px-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <NavLink
                  href={href}
                  size="sm"
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="flex flex-col gap-2 sm:flex-row">
              <DoorDashOrderButton
                size="navbar"
                className="text-center"
                onClick={() => setIsOpen(false)}
              />
              <CallToOrderButton
                size="navbar"
                className="text-center"
                onClick={() => setIsOpen(false)}
              />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
