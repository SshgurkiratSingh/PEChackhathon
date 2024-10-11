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
      className="rounded-xl shadow-lg bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      {/* Left side (Logo) */}
      <NavbarContent justify="end" className="pl-4">
        <NavbarBrand>
          <p className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Hackathon
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden" justify="end" aria-label="Menu toggle">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="transition-transform duration-500 ease-in-out transform hover:scale-110 focus:outline-none"

        />
      </NavbarContent>

      {/* Centered Menu Items */}
      <NavbarContent className="hidden sm:flex gap-8 px-4 justify-center w-full">
        {items.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link href={item.href} passHref>
              <Button
                light
                className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full px-6 py-3 shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50"
              >
                {item.name}
              </Button>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right side (Theme Icon) */}
      <NavbarContent justify="end" className="pr-4">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-gray-100 dark:bg-gray-800">
        {items.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link href={item.href} passHref>
              <Button
                auto
                light
                className={`w-full py-3 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-700 ${
                  index === 2
                    ? "text-yellow-500"
                    : index === items.length - 1
                    ? "text-red-500"
                    : "text-gray-800 dark:text-gray-200"
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
