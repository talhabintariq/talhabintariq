import "./globals.css";
import type { Metadata } from "next";
import Nav from "./(components)/Nav";
import Footer from "./(components)/Footer";

export const metadata: Metadata = {
  title: "Talha Tariq — Software Engineer",
  description: "React/Next.js · FastAPI · AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-[radial-gradient(60rem_60rem_at_30%_-10%,rgba(59,130,246,.15),transparent),radial-gradient(40rem_40rem_at_110%_10%,rgba(14,165,233,.12),transparent)] text-foreground antialiased">
        {/* subtle grid overlay */}
        <div className="pointer-events-none fixed inset-0 bg-grid-s bg-[length:16px_16px]" />
        <div className="relative flex min-h-dvh flex-col">
          <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/30">
            <Nav />
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
