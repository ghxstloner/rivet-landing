"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "@/components/ui/icons";

interface MobileNavItem {
  label: string;
  href: string;
  hasChevron: boolean;
}

interface MobileNavProps {
  items: MobileNavItem[];
  ctaHref: string;
}

export function MobileNav({ items, ctaHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-50 border-b border-line bg-white px-6 pb-6 pt-1 shadow-[0_16px_32px_rgba(0,0,0,0.08)] md:px-12"
        >
          <nav aria-label="Navegación móvil" className="flex flex-col">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-between border-b border-line text-[15px] text-graphite transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {item.label}
                {item.hasChevron && (
                  <ChevronDownIcon className="h-4 w-4 text-muted" />
                )}
              </a>
            ))}
          </nav>
          <Button
            href={ctaHref}
            size="md"
            className="mt-5 w-full"
            onClick={() => setOpen(false)}
          >
            Hablar con ventas
          </Button>
        </div>
      )}
    </div>
  );
}
