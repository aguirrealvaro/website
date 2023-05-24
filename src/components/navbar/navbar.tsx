"use client";

import { FunctionComponent } from "react";
import { MainMenu, ThemeToggle, Burger } from "./common";
import { Wrapper } from "@/components/wrapper";
import { useDisclosure } from "@/hooks";
import { cn } from "@/utils/cn";

const TRANSITION_TIME = 200;

type NavbarProps = {
  id: string;
};

export const Navbar: FunctionComponent<NavbarProps> = ({ id }) => {
  const {
    isOpen: isMobileMenuOpen,
    onToggle: toggleMobileMenu,
    //onClose: closeMobileMenu,
  } = useDisclosure({ timeout: TRANSITION_TIME, closeOnResize: true });

  const burgerId = `${id}-burger`;
  const mobileMenuId = `${id}-mobile-menu`;

  return (
    <header
      className={cn("sticky inset-x-0 top-0 h-20 bg-bg-secondary shadow", "flex items-center")}
    >
      <Wrapper>
        <div className="flex items-center justify-between">
          <h1>Alvaro Aguirre</h1>
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
              <div id={mobileMenuId} role="menu" aria-labelledby={burgerId}>
                mobile menu
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
