import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CheckIcon } from "@/components/ui/icons";
import { links } from "@/lib/links";

function DashboardTile({
  label,
  value,
  hint,
  hintTone,
}: {
  label: string;
  value: string;
  hint: string;
  hintTone: "accent" | "muted";
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-0.5 rounded-lg bg-paper p-2.5">
      <span className="text-[10px] leading-tight text-muted">{label}</span>
      <span className="font-heading text-xl font-semibold text-ink">{value}</span>
      <span
        className={`text-[10px] ${hintTone === "accent" ? "text-accent" : "text-muted"}`}
      >
        {hint}
      </span>
    </div>
  );
}

function MiniDashboard({ className = "" }: { className?: string }) {
  const bars = [26, 38, 32, 50, 44, 64];

  return (
    <div
      className={`flex flex-col gap-2.5 rounded-xl bg-white p-3.5 shadow-[0px_1px_4px_0px_#00000029] [outline:1px_solid_#E8E8ED] [outline-offset:-0.5px] ${className}`}
    >
      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex items-center gap-[7px]">
          <span className="h-[9px] w-[9px] shrink-0 bg-accent" aria-hidden="true" />
          <span className="text-xs font-semibold text-ink">Panel de operación</span>
        </div>
        <span className="shrink-0 rounded-[20px] px-[9px] py-0.5 text-[10px] text-muted [outline:1px_solid_#E8E8ED] [outline-offset:-0.5px]">
          Hoy
        </span>
      </div>

      <div className="flex w-full gap-2">
        <DashboardTile label="Ventas de hoy" value="$4.82M" hint="+12%" hintTone="accent" />
        <DashboardTile label="Reservas" value="76" hint="hoy" hintTone="muted" />
      </div>

      <div className="flex h-[78px] w-full items-end gap-2 px-0.5" aria-hidden="true">
        {bars.map((height) => (
          <div
            key={height}
            className="flex-1 rounded bg-bar"
            style={{ height: `${height}px` }}
          />
        ))}
        <div className="flex-1 rounded bg-ink" style={{ height: "74px" }} />
      </div>

      <div className="flex w-full items-center justify-between gap-2">
        <span className="text-[11px] text-graphite">FE-2041 · $36.500</span>
        <span className="shrink-0 rounded-[20px] bg-accent-soft px-[9px] py-0.5 text-[10px] font-semibold text-accent">
          DIAN ✓
        </span>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div
      className="relative mx-auto aspect-[30/31] w-full max-w-[420px] sm:max-w-[520px] xl:mx-0 xl:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute left-[6.7%] top-0 h-[87%] w-[86.7%] overflow-hidden rounded-2xl">
        <Image
          src="/images/hero-restaurant.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 1280px) 490px, (min-width: 640px) 520px, 90vw"
          className="object-cover"
        />
      </div>

      <div className="absolute left-0 top-[4.5%] z-[1] flex items-center gap-2 rounded-[20px] bg-white px-3.5 py-[9px] shadow-[0px_1px_4px_0px_#00000029] [outline:1px_solid_#E8E8ED] [outline-offset:-0.5px]">
        <CheckIcon className="h-[13px] w-[13px] shrink-0 text-accent" />
        <span className="whitespace-nowrap text-[12.5px] text-graphite">
          Factura DIAN timbrada · 1.2 s
        </span>
      </div>

      <div className="absolute left-[40%] top-[18%] z-[2] flex items-center gap-2 rounded-[20px] bg-white px-3.5 py-[9px] shadow-[0px_1px_4px_0px_#00000029] [outline:1px_solid_#E8E8ED] [outline-offset:-0.5px] min-[480px]:left-[53%] min-[480px]:top-[15.5%]">
        <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
        <span className="whitespace-nowrap text-[12.5px] text-graphite">
          128 colaboradores
        </span>
      </div>

      <MiniDashboard className="absolute left-0 top-[54%] z-[3] w-[72%] min-w-[230px] max-w-[360px] xl:w-[60%]" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-white">
      <Container className="grid items-center gap-12 pt-14 pb-16 md:pt-20 md:pb-20 xl:grid-cols-[600px_1fr] xl:gap-10 xl:pt-[88px] xl:pb-24">
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-heading text-[44px] leading-[1.15] font-bold tracking-[-0.012em] text-ink sm:text-[56px] sm:leading-[1.17] xl:text-[76px] xl:leading-[1.2]">
            Todo tu negocio.
            <br />
            Un solo sistema.
          </h1>
          <p className="max-w-[520px] text-lg leading-[1.5] text-muted">
            Ventas, facturación electrónica, nómina y reservas conectadas en productos
            que trabajan juntos y crecen contigo.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <Button href={links.contacto}>Empezar ahora</Button>
            <Button href={links.productos} variant="outline">
              Ver productos
            </Button>
          </div>
          <p className="text-[13px] text-muted">
            Facturación DIAN y nómina electrónica incluidas desde el primer día.
          </p>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
