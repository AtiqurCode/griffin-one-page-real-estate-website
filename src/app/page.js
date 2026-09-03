import Image from "next/image";
import Link from "next/link";
import s from "./Timber.module.css";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import { company, divisions, locations, nav } from "@/lib/site";

function Brand() {
  return (
    <Link href="#top" className={s.brand} aria-label="Griffin Brothers Properties — home">
      <span className={s.brandChip}>
        <Image
          className={s.brandMark}
          src="/brand/griffin-gold.png"
          alt=""
          width={258}
          height={268}
          aria-hidden
        />
      </span>
      <span className={s.brandText}>
        <span className={s.brandName}>Griffin Brothers</span>
        <span className={s.brandSub}>Properties</span>
      </span>
    </Link>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={s.root} id="top">
      <ScrollReveal />

      <header className={s.header}>
        <div className={s.headerRow}>
          <Brand />

          <div className={s.headerRight}>
            <nav className={s.nav} aria-label="Primary">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className={s.navLink}>
                  {n.label}
                </a>
              ))}
            </nav>

            <ThemeToggle />

            <details className={s.menu}>
              <summary className={s.menuSummary} aria-label="Menu">
                <MenuIcon />
              </summary>
              <div className={s.menuPanel}>
                {nav.map((n) => (
                  <a key={n.label} href={n.href} className={s.navLink}>
                    {n.label}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* ------------------------------ hero ----------------------------- */}
      <section className={s.hero}>
        <Image
          className={s.heroImg}
          src="/photos/hero.jpg"
          alt="A Griffin Brothers commercial building in the Shoals with a wood-slat facade"
          fill
          priority
          sizes="100vw"
        />
        <div className={s.heroInner} data-reveal-group>
          <p className={s.heroKicker} data-reveal>
            Family-owned · {company.regionLong}
          </p>
          <h1 className={s.heroLines} data-reveal>
            <span>We own it.</span>
            <span>We build it.</span>
            <span>We make it work.</span>
          </h1>
          <div className={s.heroRule} data-reveal="grow" />
          <p className={s.heroSub} data-reveal>
            {company.heroSub}
          </p>
          <div className={s.heroBtns} data-reveal>
            <a href="#locations" className={`${s.btn} ${s.btnSolid}`}>
              View our properties
            </a>
            <a href="#divisions" className={`${s.btn} ${s.btnGhost}`}>
              Explore our divisions
            </a>
          </div>
        </div>
        <div className={`${s.heroSlats} gb-slats`} />
      </section>

      {/* ----------------------------- family ---------------------------- */}
      <section className={s.family}>
        <div className={s.familyGrid} data-reveal-group>
          <div className={s.familyFrame} data-reveal="left">
            <Image
              src="/photos/founders-illustration.jpg"
              alt="Ink illustration of Jeff and Lynn in front of a Griffin Brothers building"
              fill
              sizes="(max-width: 900px) 90vw, 40vw"
            />
          </div>
          <div data-reveal="right">
            <p className={s.familyStatement}>{company.familyStatement}</p>
            <p className={s.familyMeta}>
              <span aria-hidden /> {company.founders} · {company.values}
            </p>
          </div>
        </div>
        <Image
          className={s.familyWatermark}
          src="/brand/griffin-ink.png"
          alt=""
          width={258}
          height={268}
          aria-hidden
        />
      </section>

      {/* ---------------------------- divisions -------------------------- */}
      <section className={s.divisions} id="divisions">
        <div className={s.divisionsHead}>
          <div className={s.sectionHead} data-reveal>
            <span className={s.sectionIndex}>Divisions</span>
            <h2 className={s.sectionTitle}>
              Five divisions, one family running all of them.
            </h2>
          </div>
        </div>

        {divisions.map((d, i) => (
          <article className={s.divRow} key={d.id}>
            {d.image ? (
              <div className={s.divMedia} data-reveal="scale">
                <Image
                  src={d.image}
                  alt={d.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 52vw"
                />
              </div>
            ) : (
              <div className={`${s.divPanel} gb-planks`} data-reveal="scale">
                <Image
                  className={s.divPanelMark}
                  src="/brand/griffin-cream.png"
                  alt=""
                  width={258}
                  height={268}
                  aria-hidden
                />
                <span className={s.divPanelNote}>Photography coming soon</span>
              </div>
            )}
            <div className={s.divText} data-reveal>
              <span className={s.divNo}>
                {String(i + 1).padStart(2, "0")} / 05
              </span>
              <h3 className={s.divName}>{d.name}</h3>
              <p className={s.divBlurb}>{d.blurb}</p>
            </div>
          </article>
        ))}
      </section>

      {/* ---------------------------- locations -------------------------- */}
      <section className={s.section} id="locations">
        <div className={s.sectionHead} data-reveal>
          <span className={s.sectionIndex}>Property Locations</span>
          <h2 className={s.sectionTitle}>Where you&rsquo;ll find us.</h2>
        </div>
        <div className={s.locGrid} data-reveal-group>
          {locations.map((l) => (
            <div className={s.locCard} key={l.name} data-reveal>
              <div className={s.locLogo}>
                <Image src={l.logo} alt={`${l.name} logo`} fill sizes="220px" />
              </div>
              <span className={s.locName}>{l.name}</span>
              <span className={s.locKind}>{l.kind}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------ about ---------------------------- */}
      <section className={s.about} id="about">
        <div className={s.aboutGrid} data-reveal-group>
          <div className={s.aboutText} data-reveal="left">
            <div className={s.sectionHead}>
              <span className={s.sectionIndex}>About</span>
              <h2 className={s.sectionTitle}>A small company, on purpose.</h2>
            </div>
            <p>{company.aboutStatement}</p>
            <p className={s.aboutValues}>{company.values}</p>
            <Link href="/gallery" className={`${s.btn} ${s.btnSolid}`}>
              See the gallery
            </Link>
          </div>
          <div className={s.aboutPhoto} data-reveal="right">
            <Image
              src="/photos/founders-photo.jpg"
              alt="Jeff and Lynn outside one of their buildings"
              fill
              sizes="(max-width: 900px) 92vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* ----------------------------- contact --------------------------- */}
      <section className={s.contact} id="contact">
        <div className={`${s.contactSlats} gb-slats`} />
        <Image
          className={s.contactWatermark}
          src="/brand/griffin-gold.png"
          alt=""
          width={258}
          height={268}
          aria-hidden
        />
        <div className={s.contactInner} data-reveal-group>
          <h2 className={s.contactTitle} data-reveal>
            Talk to us.
          </h2>
          <p className={s.contactLede} data-reveal>
            We answer our own phones. Tell us what you&rsquo;re looking for and
            we&rsquo;ll tell you straight whether we have it.
          </p>
          <div className={s.contactList} data-reveal>
            <div className={s.contactItem}>
              <span>Phone</span>
              <a href={company.contact.phoneHref}>{company.contact.phone}</a>
            </div>
            <div className={s.contactItem}>
              <span>Email</span>
              <a href={`mailto:${company.contact.email}`}>
                {company.contact.email}
              </a>
            </div>
            <div className={s.contactItem}>
              <span>Where</span>
              <p>{company.contact.address.join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- footer ---------------------------- */}
      <footer className={s.footer}>
        <div className={s.footerRow}>
          <span className={s.footerBrand}>
            <Image
              src="/brand/griffin-gold.png"
              alt=""
              width={258}
              height={268}
              aria-hidden
            />
            Griffin Brothers Properties
          </span>
          <nav className={s.footerNav} aria-label="Footer">
            {nav.map((n) => (
              <a key={n.label} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <span>© {new Date().getFullYear()} Griffin Brothers Properties</span>
        </div>
      </footer>
    </div>
  );
}
