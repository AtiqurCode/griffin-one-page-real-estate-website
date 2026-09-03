import Image from "next/image";
import Link from "next/link";
import s from "./Gallery.module.css";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import { gallery } from "@/lib/site";

export const metadata = {
  title: "Gallery",
  description:
    "Buildings Griffin Brothers Properties owns and manages across the Shoals, and moments from running the business.",
};

export default function GalleryPage() {
  return (
    <div className={s.root}>
      <ScrollReveal />

      <header className={s.header}>
        <div className={s.headerRow}>
          <div className={s.headerLeft}>
            <Link href="/" className={s.back}>
              &larr; Home
            </Link>
            <Link href="/" className={s.brand} aria-label="Griffin Brothers Properties — home">
              <span className={s.brandChip}>
                <Image
                  src="/brand/griffin-gold.png"
                  alt=""
                  width={258}
                  height={268}
                  aria-hidden
                />
              </span>
              <span className={s.brandName}>Griffin Brothers</span>
            </Link>
          </div>
          <div className={s.headerRight}>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section className={s.intro} data-reveal-group>
        <p className={s.kicker} data-reveal>
          Gallery
        </p>
        <h1 className={s.title} data-reveal>
          Properties &amp; the work behind them.
        </h1>
        <p className={s.lede} data-reveal>
          Buildings we own and manage across the Shoals, plus a few moments from
          running the business. This page grows as projects are finished and new
          photos come in.
        </p>
      </section>

      <div className={`${s.slats} gb-slats`} />

      <div className={s.grid}>
        {gallery.map((g, i) => (
          <figure className={s.item} key={g.src} data-reveal="scale">
            <div className={s.frame}>
              <Image
                src={g.src}
                alt={g.caption}
                width={g.w}
                height={g.h}
                sizes="(max-width: 560px) 92vw, (max-width: 900px) 46vw, 30vw"
                loading={i < 3 ? "eager" : "lazy"}
              />
            </div>
            <figcaption className={s.caption}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {g.caption}
            </figcaption>
          </figure>
        ))}
        <div className={s.note} data-reveal="scale">
          <b>More on the way</b>
          <p>
            This gallery fills out as projects finish and new photos come in —
            properties, tenants, and the day-to-day of running the business.
          </p>
        </div>
      </div>

      <footer className={s.footer}>
        <div className={s.footerRow}>
          <span>© {new Date().getFullYear()} Griffin Brothers Properties</span>
          <span>
            <Link href="/">Home</Link> &nbsp;·&nbsp; <Link href="/#divisions">Divisions</Link>{" "}
            &nbsp;·&nbsp; <Link href="/#contact">Contact</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
