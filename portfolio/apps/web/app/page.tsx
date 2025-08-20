import Hero from "./(components)/Hero";
import Section from "./(components)/Section";
import ProjectCard from "./(components)/ProjectCard";

export const revalidate = 180; // ISR

export default function Home() {
  return (
    <>
      <Hero />
      <Section title="Featured Projects">
        <div className="container grid gap-4 md:grid-cols-2">
          <ProjectCard
            title="Ghar Ka Khana"
            desc="Marketplace for home-cooked meals."
            tags={["Next.js", "FastAPI", "Postgres"]}
          />
          <ProjectCard
            title="Chat with Web (RAG)"
            desc="LangChain-based web RAG chat app."
            tags={["Next.js", "LangChain", "ChromaDB"]}
          />
        </div>
      </Section>
    </>
  );
}
