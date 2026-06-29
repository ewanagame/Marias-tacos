"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// === CONFIG: fill these in after EmailJS setup ===
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function LeadPopup({
  headline = "Sign up & save! Limited-time offer.",
  subtext = "Fill out this quick form and we'll get back to you ASAP.",
  businessName = "Maria's Tacos",
  delayMs = 4000,
}) {
  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "I want to know more",
    consent: true,
  });

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delayMs);
    return () => clearTimeout(t);
  }, [delayMs]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) return;
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_phone: form.phone,
          from_email: form.email,
          message: form.message,
          business: businessName,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[340px] rounded-xl shadow-2xl bg-zinc-900 border border-zinc-700 overflow-hidden">
      <div
        className="bg-amber-500 text-zinc-900 px-4 py-3 flex items-center justify-between cursor-pointer"
        onClick={() => setCollapsed((c) => !c)}
      >
        <span className="font-bold text-sm leading-tight">{headline}</span>
        <span className="ml-2 text-lg">{collapsed ? "▾" : "▴"}</span>
      </div>

      {!collapsed && (
        <div className="p-4">
          {status === "sent" ? (
            <div className="text-center py-6">
              <p className="text-green-400 font-semibold">Thanks! We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <>
              <p className="text-zinc-300 text-sm mb-4">{subtext}</p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  name="name"
                  placeholder="Name *"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white text-sm border border-zinc-600 focus:outline-none focus:border-amber-500"
                />
                <input
                  name="phone"
                  placeholder="Phone *"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white text-sm border border-zinc-600 focus:outline-none focus:border-amber-500"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="E-mail *"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white text-sm border border-zinc-600 focus:outline-none focus:border-amber-500"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 rounded-md bg-zinc-800 text-white text-sm border border-zinc-600 focus:outline-none focus:border-amber-500"
                />
                <label className="flex items-start gap-2 text-xs text-zinc-400">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-0.5"
                  />
                  By submitting you agree to receive SMS or e-mails. Rates may apply.
                </label>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-900 font-bold py-2 rounded-md text-sm transition disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                {status === "error" && (
                  <p className="text-red-400 text-xs">Something went wrong. Try again.</p>
                )}
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}
