import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

// --- BEGIN: helpers ---
type Props = Omit<ImageProps, "src"> & { srcLight: string; srcDark: string };

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;
  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

// Resolve API base URL (env or sensible local default)
function getApiBase() {
  const fromEnv = process.env.API_BASE_URL; // server-only env in app router
  return fromEnv && fromEnv.length > 0 ? fromEnv : "http://localhost:8000";
}

async function fetchHealth(): Promise<{ ok?: boolean; error?: string }> {
  const base = getApiBase();
  try {
    const res = await fetch(`${base}/v1/healthz`, { cache: "no-store" });
    if (!res.ok) return { error: `HTTP ${res.status}` };
    return (await res.json()) as { ok: boolean };
  } catch (e: any) {
    return { error: e?.message ?? "unknown error" };
  }
}
// --- END: helpers ---

export default async function Home() {
  const health = await fetchHealth();
  const buildStamp = new Date().toLocaleString(); // visible canary

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ThemeImage
          className={styles.logo}
          srcLight="/turborepo-dark.svg"   // use leading slash for /public
          srcDark="/turborepo-light.svg"
          alt="Turborepo logo"
          width={180}
          height={38}
          priority
        />

        <ol>
          <li>
            <code>apps/web/app/page.tsx</code> — <b>Last build:</b> {buildStamp}
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new/clone?demo-description=Learn+to+implement+a+monorepo+with+a+two+Next.js+sites+that+has+installed+three+local+packages.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F4K8ZISWAzJ8X1504ca0zmC%2F0b21a1c6246add355e55816278ef54bc%2FBasic.png&demo-title=Monorepo+with+Turborepo&demo-url=https%3A%2F%2Fexamples-basic-web.vercel.sh%2F&from=templates&project-name=Monorepo+with+Turborepo&repository-name=monorepo-turborepo&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fturborepo%2Ftree%2Fmain%2Fexamples%2Fbasic&root-directory=apps%2Fdocs&skippable-integrations=1&teamSlug=vercel&utm_source=create-turbo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className={styles.logo} src="/vercel.svg" alt="Vercel" width={20} height={20} />
            Deploy now
          </a>

          <a href="https://turborepo.com/docs?utm_source" target="_blank" rel="noopener noreferrer" className={styles.secondary}>
            Read our docs
          </a>
        </div>

        <Button appName="web" className={styles.secondary}>
          Open alert
        </Button>

        {/* Backend status */}
        <div style={{ marginTop: 24, fontSize: 14, opacity: 0.85 }}>
          <b>API health:</b>{" "}
          {"ok" in health ? (health.ok ? "OK ✅" : "Not OK ❌") : `Error: ${health.error}`}
          <span style={{ marginLeft: 12, opacity: 0.7 }}>
            (base: {getApiBase()})
          </span>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a href="https://turborepo.com?utm_source=create-turbo" target="_blank" rel="noopener noreferrer">
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to turborepo.com →
        </a>
      </footer>
    </div>
  );
}
