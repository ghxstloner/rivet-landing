"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Container } from "@/components/ui/container";
import { links } from "@/lib/links";

interface Industry {
  id: string;
  label: string;
  title: string;
  description: string;
  modules: string[];
  cta: string;
  image: string;
  imageAlt: string;
  ticket: {
    title: string;
    rows: { item: string; amount: string }[];
    totalLabel: string;
    total: string;
    button: string;
  };
  stat: string;
}

const industries: Industry[] = [
  {
    id: "gastronomia",
    label: "Gastronomía & Retail",
    title: "Del pedido a la factura, sin papel.",
    description:
      "Comandas que llegan directo a cocina, inventario que se descuenta solo y facturación DIAN al cerrar la mesa. Tu equipo sirve; Rivet se encarga del resto.",
    modules: ["Rivet POS", "Inventario", "Facturación DIAN", "Rivet Reservations"],
    cta: "Explorar solución para Gastronomía & Retail",
    image: "/images/industry-restaurant.jpg",
    imageAlt: "Mesa de restaurante atendida con pedidos servidos",
    ticket: {
      title: "Mesa 12 · 3 personas",
      rows: [
        { item: "2× Bandeja paisa", amount: "$58.000" },
        { item: "3× Limonada", amount: "$21.000" },
      ],
      totalLabel: "Total",
      total: "$79.000",
      button: "Cobrar y facturar",
    },
    stat: "Ocupación · 82%",
  },
  {
    id: "servicios",
    label: "Servicios & Citas",
    title: "Agenda llena y siempre cobrada.",
    description:
      "Reservas online, recordatorios automáticos y facturación al terminar el servicio. Cada cita confirmada, cada pago registrado, sin llamadas de control.",
    modules: ["Rivet Reservations", "Facturación DIAN", "Rivet POS", "Inventario"],
    cta: "Explorar solución para Servicios & Citas",
    image: "/images/blog-pos.jpg",
    imageAlt: "Clientes siendo atendidos en un mostrador de servicios",
    ticket: {
      title: "Cita · 10:30 a. m.",
      rows: [
        { item: "1× Corte y barba", amount: "$45.000" },
        { item: "1× Tinte", amount: "$90.000" },
      ],
      totalLabel: "Total",
      total: "$135.000",
      button: "Confirmar y facturar",
    },
    stat: "Agenda de hoy · 92%",
  },
  {
    id: "agro",
    label: "Agro & Ganadería",
    title: "De la finca a la factura, sin fricción.",
    description:
      "Peso, lote y venta registrados en el momento. Cada animal, cada carga y cada factura quedan trazados sin planillas ni cuentas a mano.",
    modules: ["Rivet Agro", "Facturación DIAN", "Inventario", "Rivet POS"],
    cta: "Explorar solución para Agro & Ganadería",
    image: "/images/blog-agro.jpg",
    imageAlt: "Vista aérea de una finca ganadera",
    ticket: {
      title: "Lote 27 · 8 reses",
      rows: [
        { item: "4.200 kg en pie", amount: "$9.660.000" },
        { item: "Comisión de feria", amount: "$290.000" },
      ],
      totalLabel: "Total",
      total: "$9.950.000",
      button: "Facturar partida",
    },
    stat: "Registros hoy · 214",
  },
  {
    id: "finanzas",
    label: "Finanzas & Contabilidad",
    title: "Los números cuadrados, todos los días.",
    description:
      "Cada venta, gasto y nómina queda contabilizado al instante. Cierras el mes sin sorpresas y con todo listo para el contador.",
    modules: ["Rivet Contabilidad", "Nómina & HR", "Facturación DIAN", "Rivet POS"],
    cta: "Explorar solución para Finanzas & Contabilidad",
    image: "/images/blog-nomina.jpg",
    imageAlt: "Escritorio con calculadora y documentos contables",
    ticket: {
      title: "Cierre · Septiembre",
      rows: [
        { item: "Ventas del mes", amount: "$128.4M" },
        { item: "IVA por pagar", amount: "$20.3M" },
      ],
      totalLabel: "Utilidad",
      total: "$18.7M",
      button: "Exportar a mi contador",
    },
    stat: "Cierre contable · 3 días antes",
  },
];

export function IndustryTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const industry = industries[active];

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number | null = null;
    if (event.key === "ArrowRight") next = (index + 1) % industries.length;
    if (event.key === "ArrowLeft") next = (index - 1 + industries.length) % industries.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = industries.length - 1;
    if (next !== null) {
      event.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <div className="flex w-full flex-col gap-9">
      <div
        role="tablist"
        aria-label="Industrias"
        className="flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {industries.map((item, index) => {
          const isActive = index === active;
          return (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`industry-tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={`industry-panel-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`shrink-0 rounded-[20px] px-[18px] py-2.5 text-sm whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                isActive
                  ? "bg-ink font-semibold text-white"
                  : "bg-white font-normal text-graphite [outline:1px_solid_#E8E8ED] [outline-offset:-0.5px] hover:bg-paper"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        key={industry.id}
        role="tabpanel"
        id={`industry-panel-${industry.id}`}
        aria-labelledby={`industry-tab-${industry.id}`}
        className="grid w-full overflow-hidden rounded-2xl bg-white [outline:1px_solid_#E8E8ED] [outline-offset:-0.5px] lg:h-[540px] lg:grid-cols-[480px_1fr]"
      >
        <div className="flex flex-col items-start gap-[18px] p-6 sm:p-8 lg:p-9">
          <h3 className="w-full font-heading text-2xl leading-[1.2] font-bold tracking-[-0.012em] text-ink sm:text-[28px] xl:text-[30px]">
            {industry.title}
          </h3>
          <p className="w-full text-[15px] leading-[1.55] text-muted">
            {industry.description}
          </p>
          <p className="text-[11px] font-semibold tracking-[1.2px] text-muted">
            MÓDULOS CLAVE
          </p>
          <div className="flex flex-wrap gap-2">
            {industry.modules.map((module) => (
              <span
                key={module}
                className="rounded-[20px] px-3.5 py-[7px] text-[13px] text-graphite [outline:1px_solid_#E8E8ED] [outline-offset:-0.5px]"
              >
                {module}
              </span>
            ))}
          </div>
          <a
            href={links.contacto}
            className="pt-1 text-[15px] font-semibold whitespace-nowrap text-accent transition-colors hover:text-[#0052cc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {industry.cta} →
          </a>
        </div>

        <div className="relative aspect-[4/3] bg-paper lg:aspect-auto lg:h-full">
          <Image
            src={industry.image}
            alt={industry.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-5 left-5 z-[1] w-[64%] max-w-[250px] rounded-xl bg-white p-4 shadow-[0px_2px_12px_0px_#0000001F] lg:bottom-auto lg:left-7 lg:top-[61%]">
            <p className="text-xs font-semibold text-ink">{industry.ticket.title}</p>
            {industry.ticket.rows.map((row) => (
              <div key={row.item} className="mt-1.5 flex items-center justify-between gap-3">
                <span className="text-[11px] text-graphite">{row.item}</span>
                <span className="text-[11px] text-muted">{row.amount}</span>
              </div>
            ))}
            <div className="my-2 h-px w-full bg-line" />
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] text-muted">{industry.ticket.totalLabel}</span>
              <span className="text-[13px] font-semibold text-ink">
                {industry.ticket.total}
              </span>
            </div>
            <div className="mt-2 rounded-md bg-ink py-[7px] text-center text-[11px] text-white">
              {industry.ticket.button}
            </div>
          </div>
          <div className="absolute top-5 right-5 z-[2] flex items-center gap-2 rounded-[20px] bg-white px-3.5 py-2 shadow-[0px_1px_4px_0px_#00000029] lg:top-6 lg:right-auto lg:left-[66%]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="whitespace-nowrap text-xs text-graphite">
              {industry.stat}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Industries() {
  return (
    <section id="industrias" className="bg-paper">
      <Container className="flex flex-col gap-9 py-16 md:py-20 xl:py-[88px]">
        <div className="flex max-w-[720px] flex-col gap-3.5">
          <h2 className="font-heading text-[32px] leading-[1.2] font-bold tracking-[-0.012em] text-ink sm:text-[38px] xl:text-[44px]">
            Hecho para tu rubro.
          </h2>
          <p className="text-base leading-relaxed text-muted">
            Cada industria tiene su flujo. Rivet se adapta al tuyo, no al revés.
          </p>
        </div>
        <IndustryTabs />
      </Container>
    </section>
  );
}
