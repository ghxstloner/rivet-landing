import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CheckIcon } from "@/components/ui/icons";
import { links } from "@/lib/links";

const capabilitiesCol1 = [
  "Aplicaciones web",
  "APIs e integraciones",
  "Sistemas empresariales",
];

const capabilitiesCol2 = [
  "Aplicaciones móviles",
  "Automatización de procesos",
  "Modernización de sistemas",
];

const phases = [
  {
    number: "01",
    title: "Entendemos",
    description: "Auditamos tu operación y definimos el problema real.",
  },
  {
    number: "02",
    title: "Diseñamos",
    description: "Arquitectura, alcance y plan por escrito. Sin cajas negras.",
  },
  {
    number: "03",
    title: "Construimos",
    description: "Iteraciones demostrables cada dos semanas.",
  },
  {
    number: "04",
    title: "Operamos",
    description: "Lanzamos, medimos y evolucionamos contigo.",
  },
];

function CapabilityList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-1 flex-col gap-[11px]">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-[9px] text-[13.5px] text-graphite">
          <CheckIcon className="h-3.5 w-3.5 shrink-0 text-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CustomDev() {
  return (
    <section id="a-la-medida" className="bg-white">
      <Container className="grid items-center gap-12 py-16 md:py-20 xl:grid-cols-[520px_1fr] xl:gap-[72px] xl:py-[88px]">
        <div className="flex flex-col items-start gap-[22px]">
          <h2 className="w-full font-heading text-[32px] leading-[1.2] font-bold tracking-[-0.012em] text-ink sm:text-[38px] xl:text-[44px]">
            Lo que no existe, lo construimos.
          </h2>
          <p className="w-full text-base leading-[1.55] text-muted">
            Cuando tu operación necesita algo que ningún producto estándar cubre, Rivet
            lo diseña y lo construye —sobre tu proceso, con tu equipo, con entregas
            visibles desde la primera semana.
          </p>

          <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-5">
            <CapabilityList items={capabilitiesCol1} />
            <CapabilityList items={capabilitiesCol2} />
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button href={links.contacto}>Conversar con el equipo</Button>
            <a
              href={links.mail}
              className="text-[15px] font-semibold whitespace-nowrap text-accent transition-colors hover:text-[#0052cc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              hola@rivet.com.co →
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-0 rounded-2xl bg-paper p-[30px]">
          <h3 className="pb-[18px] text-[17px] font-semibold text-ink">
            Nuestro método
          </h3>
          <ol>
            {phases.map((phase) => (
              <li
                key={phase.number}
                className="flex gap-[18px] border-t border-line py-[18px]"
              >
                <span className="font-heading text-[22px] leading-[1.1] font-bold text-ink">
                  {phase.number}
                </span>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[15px] font-semibold text-ink">{phase.title}</p>
                  <p className="text-[13.5px] leading-[20px] text-muted">
                    {phase.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="border-t border-line pt-[18px] text-[12.5px] leading-relaxed text-muted">
            Alcance, presupuesto y plan por escrito antes de escribir una sola línea de
            código.
          </p>
        </div>
      </Container>
    </section>
  );
}
