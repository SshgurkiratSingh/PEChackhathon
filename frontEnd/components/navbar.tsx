"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { ThemeSwitch } from "./theme-switch";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const items = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Page 1", href: "/page1" },
    { name: "Page 2", href: "/page2" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="rounded-xl shadow-lg bg-white dark:bg-gray-900"
    >
      {/* Left side (Logo) */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <p className="font-bold text-inherit gradient-text text-2xl">
            Hackathon
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Centered Menu Items */}
      <NavbarContent className="hidden sm:flex gap-8 px-4 justify-center w-full">
        {items.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link href={item.href} passHref>
            <Button
  light
  color="primary"
  className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 before:absolute before:-inset-0.5 before:bg-gradient-to-r before:from-purple-500 before:to-blue-600 before:rounded-full before:blur-md before:opacity-0 hover:before:opacity-100"
>
  {item.name}
</Button>

            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right side (Theme Icon) */}
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {items.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link href={item.href} passHref>
              <Button
                auto
                light
                className={`w-full hover:bg-gray-200 dark:hover:bg-gray-800 ${
                  index === 2
                    ? "text-warning"
                    : index === items.length - 1
                    ? "text-danger"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Button>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationBar;
