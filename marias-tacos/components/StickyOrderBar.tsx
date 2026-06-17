"use client";

import DoorDashOrderButton from "@/components/ui/DoorDashOrderButton";

export default function StickyOrderBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-accent/10 bg-background/95 px-4 py-3 shadow-[0_-8px_24px_rgba(44,24,16,0.12)] backdrop-blur-md md:hidden"
      role="region"
      aria-label="Order now"
    >
      <DoorDashOrderButton size="sticky" className="w-full" />
    </div>
  );
}
