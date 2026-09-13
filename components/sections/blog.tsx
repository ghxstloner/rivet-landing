import Image from "next/image";
import { Container } from "@/components/ui/container";
import { links } from "@/lib/links";

const posts = [
  {
    image: "/images/blog-nomina.jpg",
    imageAlt: "Escritorio con calculadora y documentos de nómina",
    badge: "Nómina & Regulación",
    title: "Nómina electrónica en Colombia: la guía práctica 2025",
    excerpt: "Qué cambia, qué necesitas y cómo prepararte sin frenar tu operación.",
    readingTime: "8 min de lectura",
  },
  {
    image: "/images/blog-pos.jpg",
    imageAlt: "Clientes atendidos en el mostrador de un negocio",
    badge: "Estrategia POS",
    title: "El cierre de caja de diez minutos",
    excerpt: "El checklist que usan los negocios que nunca cuadran a medianoche.",
    readingTime: "5 min de lectura",
  },
  {
    image: "/images/blog-agro.jpg",
    imageAlt: "Vista aérea de una finca ganadera",
    badge: "Operación Agro",
    title: "De la finca a la factura",
    excerpt: "Trazabilidad de peso, lote y venta para operación ganadera.",
    readingTime: "6 min de lectura",
  },
];

export function Blog() {
  return (
    <section id="recursos" className="bg-paper">
      <Container className="flex flex-col gap-10 py-16 md:py-20 xl:py-[88px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-[640px] flex-col gap-3">
            <h2 className="font-heading text-[32px] leading-[1.2] font-bold tracking-[-0.012em] text-ink sm:text-[38px] xl:text-[44px]">
              Recursos para operar mejor.
            </h2>
            <p className="text-base text-muted">
              Guías, regulación y tácticas de operación —escritas desde la trinchera.
            </p>
          </div>
          <a
            href={links.recursos}
            className="w-fit text-[15px] font-semibold whitespace-nowrap text-accent transition-colors hover:text-[#0052cc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Ver todos →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white [outline:1px_solid_#E8E8ED] [outline-offset:-0.5px]"
            >
              <div className="relative h-[200px] w-full">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[9px] px-5 pt-[18px] pb-5">
                <span className="w-fit rounded-[20px] bg-paper px-[11px] py-1 text-[11px] font-semibold text-muted">
                  {post.badge}
                </span>
                <h3 className="text-[17px] leading-[23px] font-semibold text-ink">
                  {post.title}
                </h3>
                <p className="text-[14px] leading-[21px] text-muted">{post.excerpt}</p>
                <p className="mt-auto pt-1 text-xs text-muted">{post.readingTime}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
