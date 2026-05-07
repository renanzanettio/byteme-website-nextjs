import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteMe",
  description: "Somos a ByteMe! Uma equipe de desenvolvedores de software que une tecnologia, criatividade e propósito para criar soluções que impactam vidas!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
