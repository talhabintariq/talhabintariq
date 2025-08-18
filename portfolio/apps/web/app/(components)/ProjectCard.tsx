import { Card, CardContent } from "@/components/ui/card";

export default function ProjectCard(props: { title: string; desc: string; tags?: string[]; href?: string }) {
  const { title, desc, tags = [], href } = props;
  const Wrapper: any = href ? "a" : "div";
  return (
    <Wrapper href={href} target={href ? "_blank" : undefined}>
      <Card className="rounded-2xl border-white/15 bg-white/[0.03] backdrop-blur transition hover:border-white/25 hover:bg-white/[0.06]">
        <CardContent className="p-6">
          <div className="font-medium">{title}</div>
          <p className="mt-2 text-sm text-white/80">{desc}</p>
          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map(t => (
                <span key={t} className="text-xs rounded-full border border-white/20 px-2 py-1 text-white/80">
                  {t}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Wrapper>
  );
}
