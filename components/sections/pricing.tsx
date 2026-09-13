import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CheckIcon } from "@/components/ui/icons";
import { links } from "@/lib/links";

interface Plan {
  name: string;
  description: string;
  price: string;
  compactPrice?: boolean;
  period?: string;
  features: string[];
  cta: string;
  ctaVariant: "outline" | "white";
  featured?: boolean;
}

const plans: Plan[] = [
  {
    name: "Esencial",
    description: "Para negocios que empiezan con orden.",
    price: "$99.000",
    period: "COP / mes",
    features: [
      "1 producto a elección",
      "Hasta 10 usuarios",
      "Facturación electrónica DIAN",
      "Soporte por correo",
      "Actualizaciones incluidas",
    ],
    cta: "Empezar con Esencial",
    ctaVariant: "outline",
  },
  {
    name: "Ecosistema",
    description: "La operación completa, conectada.",
    price: "$249.000",
    period: "COP / mes",
    features: [
      "Los 3 productos conectados",
      "Usuarios ilimitados",
      "Nómina electrónica",
      "Integraciones y API",
      "Soporte prioritario",
    ],
    cta: "Empezar con Ecosistema",
    ctaVariant: "white",
    featured: true,
  },
  {
    name: "Corporativo",
    description: "Desarrollo a la medida y escala.",
    price: "Conversemos",
    compactPrice: true,
    features: [
      "Equipo dedicado",
      "Soporte y SLA definidos",
      "Desarrollo a la medida",
      "On-premise o cloud",
      "Integración con sistemas actuales",
    ],
    cta: "Hablar con ventas",
    ctaVariant: "outline",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl p-7 ${
        plan.featured
          ? "bg-ink text-white"
          : "bg-white [outline:1px_solid_#E8E8ED] [outline-offset:-0.5px]"
      }`}
    >
      {plan.featured && (
        <span className="w-fit rounded-[20px] bg-accent px-3 py-1 text-[10px] font-semibold tracking-[1px] text-white">
          MÁS ELEGIDO
        </span>
      )}

      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold">{plan.name}</h3>
        <p className={`text-[13.5px] ${plan.featured ? "text-muted-dark" : "text-muted"}`}>
          {plan.description}
        </p>
      </div>

      <div className="flex items-end gap-1.5">
        <span
          className={`font-heading font-bold ${
            plan.compactPrice
              ? "text-[30px] leading-[36px]"
              : "text-[36px] leading-[40px]"
          }`}
        >
          {plan.price}
        </span>
        {plan.period && (
          <span
            className={`pb-1 text-[13px] ${plan.featured ? "text-muted-dark" : "text-muted"}`}
          >
            {plan.period}
          </span>
        )}
      </div>

      <ul className="flex flex-col gap-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-[9px] text-[13.5px]">
            <CheckIcon className="h-3.5 w-3.5 shrink-0 text-accent" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        href={links.contacto}
        variant={plan.ctaVariant}
        size="block"
        className="mt-auto"
      >
        {plan.cta}
      </Button>
    </div>
  );
}

export function Pricing() {
  return (
    <section className="border-t border-line bg-white">
      <Container className="flex flex-col gap-11 py-16 md:py-20 xl:py-[88px]">
        <div className="flex max-w-[720px] flex-col gap-3.5">
          <h2 className="font-heading text-[32px] leading-[1.2] font-bold tracking-[-0.012em] text-ink sm:text-[38px] xl:text-[44px]">
            Precios claros, sin letra pequeña.
          </h2>
          <p className="text-base leading-relaxed text-muted">
            Empieza con lo que necesitas. Crece cuando lo necesites. Sin cláusulas de
            permanencia.
          </p>
        </div>

        <div className="grid w-full gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="text-[12.5px] text-muted">
          Precios en COP por sede · IVA no incluido · Facturación electrónica DIAN en
          todos los planes
        </p>
      </Container>
    </section>
  );
}
