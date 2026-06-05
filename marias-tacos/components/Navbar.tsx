"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-40 border-b border-accent/15 bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="min-w-0 font-serif text-lg font-bold leading-tight text-primary sm:text-2xl md:text-3xl"
          onClick={() => setIsOpen(false)}
        >
          Maria&apos;s Tacos
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-sans text-sm font-medium text-accent transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://ordermariastacos.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-secondary px-4 py-2 font-sans text-sm font-semibold text-white transition-colors hover:bg-secondary/90"
          >
            Order Online
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-md p-2 text-accent transition-colors hover:text-primary md:hidden"
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
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-accent/10 bg-background px-4 py-4 sm:px-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block font-sans text-base font-medium text-accent transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://ordermariastacos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-secondary px-4 py-2 font-sans text-sm font-semibold text-white transition-colors hover:bg-secondary/90"
                onClick={() => setIsOpen(false)}
              >
                Order Online
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
