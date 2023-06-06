"use client";

import { FunctionComponent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MainMenu, ThemeToggle, Burger, MobileMenu, MediaLinks } from "./common";
import { NAVBAR_TRANSITION_TIME } from "./constants";
import { Wrapper } from "@/components";
import { useDisclosure } from "@/hooks";
import { cn } from "@/utils/cn";

type NavbarProps = {
  id: string;
};

const Navbar: FunctionComponent<NavbarProps> = ({ id }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState<number | undefined>(0);

  const {
    isOpen: isMobileMenuOpen,
    onToggle: toggleMobileMenu,
    onClose: closeMobileMenu,
    isUnmounting,
  } = useDisclosure({ timeout: NAVBAR_TRANSITION_TIME, closeOnResize: true });

  useEffect(() => {
    if (!containerRef.current) return;
    setNavbarHeight(containerRef.current?.offsetHeight);
  }, []);

  const burgerId = `${id}-burger`;
  const mobileMenuId = `${id}-mobile-menu`;

  return (
    <header
      ref={containerRef}
      className={cn("fixed inset-x-0 top-0 h-20 bg-bg-secondary shadow", "flex items-center")}
    >
      <Wrapper>
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium">
            <Link href="/">Alvaro Aguirre</Link>
          </h1>
          <MainMenu />
          <div className="flex items-center gap-4">
            <MediaLinks />
            <ThemeToggle />
            <Burger
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
              id={burgerId}
              aria-expanded={isMobileMenuOpen}
              aria-haspopup="menu"
              aria-controls={mobileMenuId}
            />
          </div>
          {isMobileMenuOpen && (
            <MobileMenu
              isMobileMenuOpen={isMobileMenuOpen}
              navbarHeight={navbarHeight}
              closeMobileMenu={closeMobileMenu}
              isUnmounting={isUnmounting}
              id={mobileMenuId}
              role="menu"
              aria-labelledby={burgerId}
            >
              mobile menu
            </MobileMenu>
          )}
        </div>
      </Wrapper>
    </header>
  );
};

export { Navbar };
