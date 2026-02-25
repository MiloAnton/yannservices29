import { businessInfo, heroContent, navLinks } from "../data/siteData";
import Reveal from "./Reveal";

function Hero() {
  return (
    <header id="accueil" className="relative overflow-hidden border-b border-brand-sage/50">
      <div className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-brand-cta/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-brand-sage/45 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-20">
        <nav className="mb-10 flex items-center justify-between gap-4 rounded-2xl bg-white/80 px-4 py-3 shadow-card backdrop-blur-sm">
          <a href="#accueil" className="flex items-center gap-2 font-semibold text-brand-ink">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-cta text-sm font-bold text-white">Y</span>
            <span>{businessInfo.brand}</span>
          </a>

          <ul className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-brand-cta" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`tel:${businessInfo.phoneRaw}`}
            className="rounded-full bg-brand-cta px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Appeler
          </a>
        </nav>

        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="mb-4 inline-flex rounded-full border border-brand-sage bg-white/85 px-3 py-1 text-sm font-medium text-slate-700">
              {businessInfo.owner} • {businessInfo.availability}
            </p>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-brand-ink sm:text-5xl">
              {heroContent.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              {heroContent.subtitle}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="inline-flex items-center justify-center rounded-2xl bg-brand-cta px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Appeler maintenant
              </a>
              <a
                href={`mailto:${businessInfo.email}?subject=Demande%20de%20devis%20-%20Yann%20Services%2029`}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-brand-cta hover:text-brand-cta"
              >
                Demander un devis
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {businessInfo.trustBadges.map((badge) => (
                <div key={badge} className="rounded-xl border border-brand-sage/60 bg-white/80 px-3 py-2 text-center text-sm font-medium text-slate-700">
                  {badge}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:justify-self-end">
            <aside className="rounded-3xl border border-brand-sage/60 bg-white p-6 shadow-card">
              <h2 className="text-lg font-semibold text-brand-ink">Intervention locale, simple et rapide</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Basé près de Concarneau, Yann Services 29 intervient chez les particuliers avec des solutions adaptées à vos besoins du quotidien.
              </p>

              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
                  <dt className="font-medium text-slate-600">Zone</dt>
                  <dd className="max-w-[72%] text-right font-semibold text-slate-800">{businessInfo.zone}</dd>
                </div>
                <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
                  <dt className="font-medium text-slate-600">Horaires</dt>
                  <dd className="font-semibold text-slate-800">{businessInfo.hours}</dd>
                </div>
                <div className="flex items-start justify-between gap-3 pb-1">
                  <dt className="font-medium text-slate-600">Réponse</dt>
                  <dd className="font-semibold text-slate-800">{businessInfo.responseDelay}</dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </div>
    </header>
  );
}

export default Hero;
