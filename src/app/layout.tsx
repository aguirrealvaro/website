import "@/styles/globals.css";
import { FunctionComponent, ReactNode } from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/providers";
import { cn } from "@/utils/cn";
import { raleway } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Alvaro Aguirre",
  description: "Description",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-bg-primary text-text-primary antialiased",
          `${raleway.variable} font-body`
        )}
      >
        <ThemeProvider>
          <div className="flex h-screen flex-col">
            <Navbar id="navbar" />
            <main className="flex-1">{children}</main>
            <footer>Footer</footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
