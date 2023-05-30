"use client";

import { FunctionComponent, ReactNode } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </NextThemeProvider>
  );
};

export { ThemeProvider };
