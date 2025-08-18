"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="container flex h-14 items-center justify-between">
      <Link href="/" className="font-semibold tracking-tight">talhabintariq</Link>
      <div className="flex gap-6 text-sm">
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className={`${path === l.href ? "text-white" : "text-white/70 hover:text-white"} transition`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
