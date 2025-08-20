export default function Footer() {
  return (
    <footer className="border-t border-white/10 text-sm">
      <div className="container py-8 opacity-80">
        © {new Date().getFullYear()} Talha Tariq · Built with Next.js & FastAPI
      </div>
    </footer>
  );
}
