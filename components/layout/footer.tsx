import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LinkedInIcon, MailIcon, SendIcon } from "@/components/ui/icons";
import { links } from "@/lib/links";

const footerColumns = [
  {
    title: "Productos",
    items: [
      { label: "Rivet HR", href: links.productos },
      { label: "Rivet POS", href: links.productos },
      { label: "Rivet Reservations", href: links.productos },
      { label: "Rivet Contabilidad", href: links.productos },
      { label: "Rivet Agro", href: links.productos },
    ],
  },
  {
    title: "Compañía",
    items: [
      { label: "Nosotros", href: links.top },
      { label: "Industrias", href: links.industrias },
      { label: "A la medida", href: links.aLaMedida },
      { label: "Blog", href: links.recursos },
    ],
  },
  {
    title: "Contacto",
    items: [
      { label: "hola@rivet.com.co", href: links.mail },
      { label: "Bogotá, Colombia", href: links.contacto },
      { label: "LinkedIn", href: links.contacto },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contacto" className="bg-ink text-white">
      <Container className="flex flex-col gap-14 pt-16 pb-10 md:pt-20 xl:pt-24">
        <div className="flex flex-col items-start gap-[22px]">
          <h2 className="w-full font-heading text-[36px] leading-[1.15] font-bold tracking-[-0.012em] sm:text-[44px] xl:text-[52px] xl:leading-[60px]">
            ¿Tienes un problema que el software puede resolver?
          </h2>
          <p className="max-w-[540px] text-base leading-[1.55] text-muted-dark">
            Cuéntanos cómo opera tu empresa. Te decimos, con honestidad, si podemos
            ayudarte —y exactamente cómo.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <Button href={links.mail} variant="white">
              Hablemos
            </Button>
            <Button href={links.mail} variant="outlineWhite">
              hola@rivet.com.co
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-2">
            <a
              href={links.mail}
              aria-label="Escríbenos por correo"
              className="text-white transition-colors hover:text-muted-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <MailIcon className="h-[30px] w-[30px]" />
            </a>
            <a
              href={links.mail}
              aria-label="Envíanos un mensaje"
              className="text-white transition-colors hover:text-muted-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <SendIcon className="h-[30px] w-[30px]" />
            </a>
            <a
              href={links.contacto}
              aria-label="Rivet en LinkedIn"
              className="text-white transition-colors hover:text-muted-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <LinkedInIcon className="h-[30px] w-[30px]" />
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-coal-line" />

        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-[260px_repeat(3,1fr)] xl:gap-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <span className="h-[13px] w-[13px] bg-accent" aria-hidden="true" />
              <span className="font-heading text-xl font-semibold tracking-[-0.3px]">
                Rivet
              </span>
            </div>
            <p className="text-[13px] leading-5 text-muted-dark">
              Software para empresas que construyen.
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold text-white">{column.title}</h3>
              <ul className="flex flex-col gap-3">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`text-[13.5px] text-muted-dark transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                        item.href.startsWith("mailto:") ? "" : "whitespace-nowrap"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="h-px w-full bg-coal-line" />

        <div className="flex flex-col gap-2 text-xs text-muted-dark sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Rivet S.A.S. — Bogotá, Colombia</p>
          <p className="flex flex-wrap gap-x-2">
            <a href={links.contacto} className="transition-colors hover:text-white">
              Privacidad
            </a>
            <span aria-hidden="true">·</span>
            <a href={links.contacto} className="transition-colors hover:text-white">
              Términos
            </a>
            <span aria-hidden="true">·</span>
            <a href={links.contacto} className="transition-colors hover:text-white">
              Tratamiento de datos
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
