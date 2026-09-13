"use client";

import { useRef, useState } from "react";
import type { ComponentType, FocusEvent, SVGProps } from "react";
import {
  CalculatorIcon,
  CalendarIcon,
  ChevronDownIcon,
  ShoppingCartIcon,
  SproutIcon,
  UserIcon,
} from "@/components/ui/icons";
import { links } from "@/lib/links";

type NavIcon = ComponentType<SVGProps<SVGSVGElement>>;

interface ProductMenuItem {
  label: string;
  description: string;
  href: string;
  Icon: NavIcon;
}

const CLOSE_DELAY_MS = 150;

const menuItems: ProductMenuItem[] = [
  {
    label: "Rivet HR",
    description: "Nómina, asistencia y talento",
    href: links.productos,
    Icon: UserIcon,
  },
  {
    label: "Rivet POS",
    description: "Ventas y facturación DIAN",
    href: links.productos,
    Icon: ShoppingCartIcon,
  },
  {
    label: "Rivet Reservations",
    description: "Citas, agendas y disponibilidad",
    href: links.productos,
    Icon: CalendarIcon,
  },
  {
    label: "Rivet Contabilidad",
    description: "Contabilidad conectada",
    href: links.productos,
    Icon: CalculatorIcon,
  },
  {
    label: "Rivet Agro",
    description: "Operación de finca y ganadería",
    href: links.productos,
    Icon: SproutIcon,
  },
];

export function ProductsMenu() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!containerRef.current?.contains(event.relatedTarget as Node)) {
      cancelClose();
      setOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlur={handleBlur}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="products-menu"
        onClick={() => setOpen((value) => !value)}
        onFocus={() => setOpen(true)}
        className="flex items-center gap-[5px] rounded-sm text-sm text-graphite transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        Productos
        <ChevronDownIcon
          className={`h-[13px] w-[13px] text-muted transition-transform duration-150 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          id="products-menu"
          className="animate-menu-in absolute left-0 top-full z-50 mt-3 flex w-[320px] flex-col gap-1 rounded-2xl bg-white p-2 shadow-lg ring-1 ring-black/5"
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl p-2.5 transition-colors duration-150 hover:bg-[#F3F4F6] focus-visible:bg-[#F3F4F6] focus-visible:outline-none"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8FAFC]">
                <item.Icon className="h-5 w-5 text-graphite" />
              </span>
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="text-[15px] leading-tight font-semibold text-[#111827]">
                  {item.label}
                </span>
                <span className="text-[13px] leading-tight text-[#6B7280]">
                  {item.description}
                </span>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
