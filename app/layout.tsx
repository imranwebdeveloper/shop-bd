import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { config } from "@/config/env.config";
import ReduxProvider from "@/components/provider/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Home | ${config.logo}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
