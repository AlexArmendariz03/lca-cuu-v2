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
  DropdownItem
} from "@nextui-org/react";

export default function Navigation() {
  return (
    <Navbar className="bg-blue-950 text-white" shouldHideOnScroll>
      <NavbarBrand>
        <Image
          width={200}
          alt="Logo LCA"
          src="/logoLCA.png"
          className="transition-transform transform hover:scale-105"
        />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4 justify-center">
        <NavbarItem>
          <Link href="#inicio" className="text-white">
            Inicio
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="#quienes-somos" className="text-white">
            Quiénes Somos
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 hover:bg-transparent text-white"
                radius="sm"
                variant="light"
              >
                Ministerios
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Ministerios"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem description="Conciertos y adoración" />
            <DropdownItem description="Jóvenes y adolescentes" />
            <DropdownItem description="Nuevos conversos" />
            <DropdownItem description="Ministerios de barrio" />
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link href="#eventos" className="text-white">
            Eventos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#contacto" className="text-white">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="danger"
            href="https://www.youtube.com/@LaCasadelAlfareroChihuahuaChih"
            variant="flat"
          >
            Youtube
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
