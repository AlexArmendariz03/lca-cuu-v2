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

const menuItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Conócenos", href: "#conocenos" },
  { label: "Ministerios", href: "#ministerios" },
  { label: "Galería", href: "#galeria" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
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
          <Link href="#inicio" className="font-semibold text-white/90 transition hover:text-white">
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
            <DropdownItem key="historia" description="Nuestra historia" />
            <DropdownItem key="creemos" description="Lo que creemos" />
            <DropdownItem key="vision" description="Nuestra visión" />
            <DropdownItem key="pastores" description="Pastores y equipo" />
            <DropdownItem key="lideres" description="Líderes" />
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button disableRipple className="p-0 font-semibold text-white/90 hover:bg-transparent hover:text-white" radius="sm" variant="light">
                Ministerios
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="Ministerios" className="w-[340px]" itemClasses={{ base: "gap-4" }}>
            <DropdownItem key="conciertos" description="Conciertos" />
            <DropdownItem key="jovenes" description="Jóvenes" />
            <DropdownItem key="nuevos" description="Nuevos conversos" />
            <DropdownItem key="barrios" description="Ministerios de barrio" />
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link href="#galeria" className="font-semibold text-white/90 transition hover:text-white">
            Galería
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#servicios" className="font-semibold text-white/90 transition hover:text-white">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#contacto" className="font-semibold text-white/90 transition hover:text-white">
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
