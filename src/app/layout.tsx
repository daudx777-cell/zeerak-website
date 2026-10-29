import type { Metadata, Viewport } from "next";
import { Archivo, Figtree } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#D4141C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ZEERAK SERVICES — Industrial Fire Safety & Compliance Platform",
  description:
    "Supply, installation, refilling, and maintenance of fire safety equipment, fire alarm systems, PPEs, and hydrant networks across Pakistan. Audit compliance and engineering risk analysis.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${figtree.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#14213A] selection:bg-[#FDECEC] selection:text-[#D4141C]">
        {children}
      </body>
    </html>
  );
}
