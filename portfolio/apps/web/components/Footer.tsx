import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Talha Tariq
        </p>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/about" className="text-white/60 hover:text-white hover:underline">About</Link>
          <Link href="/contact" className="text-white/60 hover:text-white hover:underline">Contact</Link>
          <a
            href="mailto:talhabintariq@gmail.com"
            className="text-white/60 hover:text-white hover:underline"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/ta1ha"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-white hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/talhabintariq"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-white hover:underline"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  )
}
