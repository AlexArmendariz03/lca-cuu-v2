"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
  DropdownMenu,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

type MenuItem = {
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Nuestra historia", href: "/nuestra-historia" },
  { label: "Organigrama", href: "/organigrama" },
  { label: "Lo que creemos", href: "/lo-que-creemos" },
  { label: "Galería", href: "/#galeria" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Eventos", href: "/#eventos" },
  { label: "Contacto", href: "/#contacto" },
];

const YOUTUBE_URL = "https://www.youtube.com/@LaCasadelAlfareroChihuahuaChih";
const SUB_ROUTES = ["/nuestra-historia", "/organigrama", "/lo-que-creemos"];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const isInicioActive = pathname === "/";
  const isQuienesSomosActive = SUB_ROUTES.includes(pathname);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      isBlurred
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed top-0 z-50 border-b text-white backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? "border-white/15 bg-blue-950/95 shadow-lg shadow-blue-950/30" : "border-white/10 bg-blue-950/85"
      }`}
      maxWidth="xl"
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} className="text-white" />
      </NavbarContent>

      <NavbarBrand className="absolute inset-x-0 top-1/2 mx-auto w-fit -translate-y-1/2 justify-center gap-3 lg:static lg:inset-x-auto lg:top-auto lg:mx-0 lg:w-auto lg:translate-y-0 lg:basis-0 lg:flex-grow lg:justify-start">
        <Image
          width={180}
          alt="Logo LCA"
          src="/logoLCA.png"
          className="max-w-[130px] transition-transform duration-300 hover:scale-105 sm:max-w-none"
        />
      </NavbarBrand>

      <NavbarContent className="hidden gap-6 lg:flex" justify="center">
        <NavbarItem>
          <Link
            href="/#inicio"
            aria-current={isInicioActive ? "page" : undefined}
            className={`font-semibold transition hover:text-white ${isInicioActive ? "text-white" : "text-white/90"}`}
          >
            Inicio
          </Link>
        </NavbarItem>

        <Dropdown classNames={{ content: "rounded-3xl border border-blue-100 bg-white p-2 shadow-2xl shadow-blue-950/10" }}>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={`p-0 font-semibold hover:bg-transparent hover:text-white ${isQuienesSomosActive ? "text-white" : "text-white/90"}`}
                radius="sm"
                variant="light"
              >
                Quiénes somos
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Quiénes somos"
            className="w-[340px]"
            itemClasses={{ base: "gap-4 rounded-2xl data-[hover=true]:bg-blue-50 data-[hover=true]:text-blue-950" }}
          >
            <DropdownItem
              key="historia"
              href="/nuestra-historia"
              description="Cómo comenzó nuestro movimiento"
              className={pathname === "/nuestra-historia" ? "bg-blue-50 text-blue-950" : ""}
            >
              Nuestra historia
            </DropdownItem>
            <DropdownItem
              key="organigrama"
              href="/organigrama"
              description="Árbol de iglesias y pastores"
              className={pathname === "/organigrama" ? "bg-blue-50 text-blue-950" : ""}
            >
              Organigrama
            </DropdownItem>
            <DropdownItem
              key="creemos"
              href="/lo-que-creemos"
              description="Nuestra declaración de fe"
              className={pathname === "/lo-que-creemos" ? "bg-blue-50 text-blue-950" : ""}
            >
              Lo que creemos
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link href="/#galeria" className="font-semibold text-white/90 transition hover:text-white">
            Galería
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/#servicios" className="font-semibold text-white/90 transition hover:text-white">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/#eventos" className="font-semibold text-white/90 transition hover:text-white">
            Eventos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/#contacto" className="font-semibold text-white/90 transition hover:text-white">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href={YOUTUBE_URL}
            className="bg-red-600 font-bold text-white shadow-lg shadow-red-950/30 transition hover:bg-red-500"
            radius="full"
          >
            YouTube
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-blue-950/95 pt-8 text-white backdrop-blur-xl">
        {menuItems.map((item) => {
          const isCleanRouteActive = !item.href.includes("#") && pathname === item.href;
          const isHomeActive = item.href === "/#inicio" && pathname === "/";
          const active = isCleanRouteActive || isHomeActive;

          return (
            <NavbarMenuItem key={item.href}>
              <Link
                className={`flex w-full items-center gap-2 py-2 text-lg font-bold transition ${active ? "text-red-300" : "text-white"}`}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onPress={() => setIsMenuOpen(false)}
              >
                {active ? <span className="h-2 w-2 rounded-full bg-red-400" aria-hidden="true" /> : null}
                {item.label}
              </Link>
            </NavbarMenuItem>
          );
        })}
        <NavbarMenuItem className="mt-4">
          <Button
            as={Link}
            href={YOUTUBE_URL}
            className="w-full bg-red-600 font-bold text-white shadow-lg shadow-red-950/30 transition hover:bg-red-500"
            radius="full"
            onPress={() => setIsMenuOpen(false)}
          >
            Ver en YouTube
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
