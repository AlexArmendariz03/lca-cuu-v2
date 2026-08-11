"use client";

import React from "react";
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

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isBlurred
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 z-50 border-b border-white/10 bg-blue-950/85 text-white backdrop-blur-xl"
      maxWidth="xl"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} className="text-white" />
      </NavbarContent>

      <NavbarBrand className="gap-3">
        <Image
          width={180}
          alt="Logo LCA"
          src="/logoLCA.png"
          className="transition-transform duration-300 hover:scale-105"
        />
      </NavbarBrand>

      <NavbarContent className="hidden gap-6 sm:flex" justify="center">
        <NavbarItem>
          <Link href="/#inicio" className="font-semibold text-white/90 transition hover:text-white">
            Inicio
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button disableRipple className="p-0 font-semibold text-white/90 hover:bg-transparent hover:text-white" radius="sm" variant="light">
                Quiénes somos
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="Quiénes somos" className="w-[340px]" itemClasses={{ base: "gap-4" }}>
            <DropdownItem key="historia" href="/nuestra-historia" description="Cómo comenzó nuestro movimiento">
              Nuestra historia
            </DropdownItem>
            <DropdownItem key="organigrama" href="/organigrama" description="Árbol de iglesias y pastores">
              Organigrama
            </DropdownItem>
            <DropdownItem key="creemos" href="/lo-que-creemos" description="Nuestra declaración de fe">
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

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="https://www.youtube.com/@LaCasadelAlfareroChihuahuaChih"
            className="bg-red-600 font-bold text-white shadow-lg shadow-red-950/30 transition hover:bg-red-500"
            radius="full"
          >
            YouTube
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-blue-950/95 pt-8 text-white backdrop-blur-xl">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link className="w-full py-2 text-lg font-bold text-white" href={item.href} onPress={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
