import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { GlobalProvider } from "@/context/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pamebo | Soluções em pinturas e texturas especiais.",
  description: "SOLUÇÕES EM PINTURAS E TEXTURAS ESPECIAIS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />
      <link rel="shortcut icon" href="favicon.png" />
      <meta
        name="description"
        content="PAMEBO SOLUÇÕES EM PINTURAS E TEXTURAS ESPECIAIS"
      ></meta>
      <body className={inter.className}>
        <GlobalProvider>
          <Header />
          {children}
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
