export default function About() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-white">About</h1>

      <p className="text-lg leading-relaxed text-white/80">
        I&apos;m <span className="font-semibold text-white">Talha B. Tariq</span> — a software engineer and consultant with over 7 years of experience 
        building modern web applications and practical AI solutions. 
      </p>

      <p className="text-lg leading-relaxed text-white/80">
        My journey has taken me through roles at <span className="font-medium text-white">Sony PlayStation</span>, 
        <span className="font-medium text-white"> Robinhood</span>, and <span className="font-medium text-white">NTT Data</span>, 
        where I worked on projects ranging from enterprise-scale applications to fast-moving product launches. 
      </p>

      <p className="text-lg leading-relaxed text-white/80">
        I specialize in <span className="font-medium text-white">React, Next.js, and FastAPI</span>, with a growing focus on 
        <span className="font-medium text-white"> AI systems</span> such as RAG chatbots, agents, and automation workflows. 
        My approach is simple: build things that look clean, scale well, and deliver real results. 
      </p>

      <p className="text-lg leading-relaxed text-white/80">
        Outside of engineering, I&apos;m also a digital artist, blending creativity and technology into everything I do. 
      </p>

      <div className="pt-4">
        <a
          href="/contact"
          className="inline-block rounded bg-white px-5 py-2 text-black font-medium transition hover:bg-white/90"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
