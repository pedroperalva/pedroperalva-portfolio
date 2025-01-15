import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { Quicksand } from "next/font/google";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const quicksand = Quicksand({
  weight: "300",
  subsets: ["latin"],
  style: "normal",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={quicksand.className}>
        <ChakraProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
