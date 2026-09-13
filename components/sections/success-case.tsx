import Image from "next/image";
import { Container } from "@/components/ui/container";

const metrics = [
  { value: "−60%", label: "tiempo administrativo" },
  { value: "0", label: "descuadres en 14 meses" },
  { value: "+128", label: "colaboradores en 3 sedes" },
];

export function SuccessCase() {
  return (
    <section className="bg-ink text-white">
      <Container className="grid items-center gap-10 py-16 md:py-20 xl:grid-cols-[600px_1fr] xl:gap-16 xl:py-24">
        <div className="relative aspect-[15/14] overflow-hidden rounded-2xl">
          <Image
            src="/images/case-cafe.jpg"
            alt="Gerente de Café Ámbar en su negocio"
            fill
            sizes="(min-width: 1280px) 600px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-7">
          <blockquote className="font-heading text-[26px] leading-[1.25] font-bold tracking-[-0.012em] sm:text-[30px] xl:text-[32px]">
            “Pasamos de cuadrar caja los domingos por la noche a cerrar en diez
            minutos.”
          </blockquote>
          <p className="text-sm text-muted-dark">
            Camila Rey — Gerente — Café Ámbar, Bogotá
          </p>

          <dl className="grid grid-cols-3 gap-5 sm:gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="border-t border-coal-line pt-4">
                <dt className="sr-only">{metric.label}</dt>
                <dd className="font-heading text-[26px] leading-[1.1] font-bold sm:text-[36px] xl:text-[42px] xl:leading-[46px]">
                  {metric.value}
                </dd>
                <dd className="mt-1.5 text-[12.5px] leading-snug text-muted-dark">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
