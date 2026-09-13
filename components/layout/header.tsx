import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ChevronDownIcon } from "@/components/ui/icons";
import { links } from "@/lib/links";
import { MobileNav } from "./mobile-nav";
import { ProductsMenu } from "./products-menu";

const navItems = [
  { label: "Industrias", href: links.industrias, hasChevron: true },
  { label: "A la medida", href: links.aLaMedida, hasChevron: false },
  { label: "Recursos", href: links.recursos, hasChevron: true },
];

const mobileNavItems = [
  { label: "Productos", href: links.productos, hasChevron: true },
  ...navItems,
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white relative">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href={links.top}
          className="flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Rivet — ir al inicio"
        >
          <span className="h-[13px] w-[13px] bg-accent" aria-hidden="true" />
          <span className="font-heading text-xl font-semibold tracking-[-0.3px] text-ink">
            Rivet
          </span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 lg:flex"
        >
          <ProductsMenu />
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-[5px] rounded-sm text-sm text-graphite transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {item.label}
              {item.hasChevron && (
                <ChevronDownIcon className="h-[13px] w-[13px] text-muted" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button href={links.contacto} size="sm">
            Hablar con ventas
          </Button>
        </div>

        <MobileNav items={mobileNavItems} ctaHref={links.contacto} />
      </Container>
    </header>
  );
}
