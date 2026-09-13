import Image from "next/image";
import { Container } from "@/components/ui/container";
import { FileCheckIcon } from "@/components/ui/icons";

function LedgerRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-line py-2.5">
      <span className="text-xs text-graphite">{label}</span>
      <span className="text-xs font-semibold text-ink">{value}</span>
    </div>
  );
}

function FlowStep({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-[7px] rounded-lg bg-coal px-[13px] py-[9px]">
      <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-accent" aria-hidden="true" />
      <span className="text-[12.5px] whitespace-nowrap text-white">{label}</span>
    </div>
  );
}

export function Ecosystem() {
  return (
    <section id="productos" className="bg-white">
      <Container className="flex flex-col gap-10 py-16 md:py-20 xl:py-[88px]">
        <div className="flex max-w-[760px] flex-col gap-3.5">
          <h2 className="font-heading text-[32px] leading-[1.2] font-bold tracking-[-0.012em] text-ink sm:text-[38px] xl:text-[44px]">
            Un ecosistema que trabaja junto.
          </h2>
          <p className="text-base leading-relaxed text-muted">
            Cada módulo alimenta al siguiente: una venta se vuelve factura, registro
            contable y nómina —sin digitar nada dos veces.
          </p>
        </div>

        <div className="flex w-full flex-col gap-5">
          <div className="grid gap-5 xl:grid-cols-[730px_1fr]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/9] xl:aspect-[73/36]">
              <Image
                src="/images/ecosystem-terminal.jpg"
                alt="Punto de venta Rivet en el mostrador de un negocio"
                fill
                sizes="(min-width: 1280px) 730px, 100vw"
                className="object-cover"
              />
              <div className="absolute top-5 right-5 z-[1] rounded-[20px] bg-white px-3.5 py-2 shadow-[0px_1px_4px_0px_#00000029] sm:left-[76.7%] sm:right-auto sm:top-[5.5%]">
                <span className="text-xs font-semibold whitespace-nowrap text-ink">
                  $4.8M hoy
                </span>
              </div>
              <div className="absolute bottom-5 left-5 z-[2] flex w-[70%] max-w-[320px] flex-col gap-0.5 rounded-xl bg-white p-3 px-4 shadow-[0px_2px_12px_0px_#0000001F]">
                <span className="text-xs font-semibold text-ink">
                  Rivet POS · Terminal 2
                </span>
                <span className="text-[11px] text-muted">
                  Venta #2041 · $36.500 · factura al correo
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2.5 rounded-2xl bg-white p-5 [outline:1px_solid_#E8E8ED] [outline-offset:-0.5px] xl:h-[170px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg bg-paper">
                    <FileCheckIcon className="h-4 w-4 text-ink" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[15px] leading-tight font-semibold text-ink">
                      Factura electrónica DIAN
                    </p>
                    <p className="text-xs leading-tight text-muted">
                      Timbrado automático al cerrar la venta
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-[20px] bg-accent-soft px-2.5 py-[3px] text-[11px] font-semibold text-accent">
                    Timbrada · 1.2 s
                  </span>
                  <span className="text-xs text-muted">
                    CUFE generado sin intervención
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 rounded-2xl bg-white p-5 [outline:1px_solid_#E8E8ED] [outline-offset:-0.5px] xl:h-[170px]">
                <div className="flex items-center gap-1.5">
                  {["CM", "JR", "LP", "+9"].map((initials) => (
                    <span
                      key={initials}
                      className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-paper text-[9px] font-semibold text-ink"
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <p className="text-[15px] font-semibold text-ink">Nómina & HR</p>
                <p className="text-xs leading-[1.5] text-muted">
                  Turnos, novedades y asistencia sincronizados con la operación del día.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-[450px_1fr]">
            <div className="flex flex-col gap-2 rounded-2xl bg-white p-5 [outline:1px_solid_#E8E8ED] [outline-offset:-0.5px] xl:h-[220px]">
              <p className="text-[15px] font-semibold text-ink">Contabilidad</p>
              <LedgerRow label="Ventas POS · hoy" value="$4.82M" />
              <LedgerRow label="IVA por pagar" value="$764K" />
              <LedgerRow label="Provisión de nómina" value="$31.2M" />
            </div>

            <div className="flex flex-col gap-3.5 rounded-2xl bg-ink p-6 xl:h-[220px]">
              <p className="text-[15px] font-semibold text-white">
                Una venta actualiza todo.
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                <FlowStep label="Venta POS" />
                <span aria-hidden="true" className="text-sm text-steel">
                  →
                </span>
                <FlowStep label="Factura DIAN" />
                <span aria-hidden="true" className="text-sm text-steel">
                  →
                </span>
                <FlowStep label="Registro contable" />
                <span aria-hidden="true" className="text-sm text-steel">
                  →
                </span>
                <FlowStep label="Nómina & HR" />
              </div>
              <p className="text-xs text-steel-dark">
                Sin exportar hojas de cálculo. Sin digitar dos veces.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
