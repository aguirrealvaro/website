import "@/styles/globals.css";
import { FunctionComponent, ReactNode } from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/providers";
import { cn } from "@/utils/cn";
import { raleway } from "@/utils/fonts";
import { getSession } from "@/utils/get-session";
import prisma from "@/utils/prisma";

export const metadata: Metadata = {
  title: "Alvaro Aguirre",
  description: "Description",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {
  createSession();

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
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

export const dynamic = "force-dynamic";

const createSession = async () => {
  const currentSessionId = getSession();

  const sessionExists = await prisma.session.findUnique({ where: { id: currentSessionId } });

  if (sessionExists) return;

  //creates new session
  await prisma.session.create({
    data: {
      id: currentSessionId,
    },
  });
};
