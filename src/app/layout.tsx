import "@/styles/globals.css";
import { FunctionComponent, ReactNode } from "react";
import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SessionFetch } from "@/components/session-fetch";
import { QueryProvider, ThemeProvider } from "@/providers";
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
        <QueryProvider>
          <ThemeProvider>
            <SessionFetch />
            <div className="flex h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
