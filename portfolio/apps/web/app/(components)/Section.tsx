export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
