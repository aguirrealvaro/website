"use client";

import { FunctionComponent } from "react";
import Link from "next/link";
import { MainMenu, ThemeToggle, Burger, MobileMenu } from "./common";
import { NAVBAR_TRANSITION_TIME } from "./constants";
import { Wrapper } from "@/components/wrapper";
import { useDisclosure } from "@/hooks";
import { cn } from "@/utils/cn";

type NavbarProps = {
  id: string;
};

export const Navbar: FunctionComponent<NavbarProps> = ({ id }) => {
  const {
    isOpen: isMobileMenuOpen,
    onToggle: toggleMobileMenu,
    onClose: closeMobileMenu,
    isUnmounting,
  } = useDisclosure({ timeout: NAVBAR_TRANSITION_TIME, closeOnResize: true });

  const burgerId = `${id}-burger`;
  const mobileMenuId = `${id}-mobile-menu`;

  return (
    <header
      className={cn("sticky inset-x-0 top-0 h-20 bg-bg-secondary shadow", "flex items-center")}
    >
      <Wrapper>
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium hover:text-red-500">
            <Link href="/">Alvaro Aguirre</Link>
          </h1>
          <div className="flex items-center gap-4">
            <MainMenu />
            <Burger
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-haspopup="menu"
              aria-controls={mobileMenuId}
            />
            <ThemeToggle />
            {isMobileMenuOpen && (
              <MobileMenu
                isMobileMenuOpen={isMobileMenuOpen}
                navbarHeight={80}
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
        </div>
      </Wrapper>
    </header>
  );
};
