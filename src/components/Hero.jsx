import { businessInfo, heroContent, navLinks, services } from "../data/siteData";
import Reveal from "./Reveal";

function Icon({ name, className = "h-4 w-4" }) {
  switch (name) {
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M6 20C14 20 19 15 19 7C11 7 6 12 6 20Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M6 20C6 14 10 10 16 8" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "wrench":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M14 7L7 14L10 17L17 10" stroke="currentColor" strokeWidth="1.8" />
          <path d="M20 4L16 8L18 10L22 6V4H20Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 20L9 15" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "box":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M3 7L12 3L21 7L12 11L3 7Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 7V17L12 21L21 17V7" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 11V21" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "hammer":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M9 4L13 8L10 11L6 7L9 4Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M13 8L20 15" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 21L10 14" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "truck":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M3 6H15V16H3V6Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M15 10H19L21 12V16H15V10Z" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="18" cy="17" r="2" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M3 11L12 4L21 11" stroke="currentColor" strokeWidth="1.8" />
          <path d="M6 10V20H18V10" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "droplet":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M12 3C9 7 6 10 6 14C6 17.3 8.7 20 12 20C15.3 20 18 17.3 18 14C18 10 15 7 12 3Z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M13 2L5 13H11L10 22L19 10H13L13 2Z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 8V12L15 14" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M12 21C16 16.8 18 13.8 18 10.7C18 7.5 15.3 5 12 5C8.7 5 6 7.5 6 10.7C6 13.8 8 16.8 12 21Z" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="10.5" r="2.3" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8.5 12.5L10.8 14.8L15.7 9.9" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "flash":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M13 2L6 13H11L10 22L18 10H13V2Z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    default:
      return null;
  }
}

function Hero() {
  const infoItems = [
    { label: businessInfo.availability, icon: "clock" },
    { label: businessInfo.hours, icon: "clock" },
    { label: businessInfo.responseDelay, icon: "flash" },
    { label: "Trégunc + 10 km", icon: "map" },
  ];

  return (
    <header id="accueil" className="relative overflow-hidden border-b border-brand-sage/50">
      <div className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-brand-cta/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-brand-sage/45 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 pb-12 pt-3 sm:px-6 lg:px-8 lg:pb-20">
        <nav className="mb-6 flex items-center justify-between gap-4 rounded-2xl bg-white/80 px-4 py-3 shadow-card backdrop-blur-sm sm:mb-10">
          <a href="#accueil" className="flex items-center gap-2 font-semibold text-brand-ink">
            <img
              src={businessInfo.logoPath}
              alt={`Logo ${businessInfo.brand}`}
              className="h-9 w-9 rounded-full object-cover"
            />
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
            {businessInfo.phoneDisplay}
          </a>
        </nav>

        <Reveal className="mx-auto max-w-5xl text-center">
          <div className="relative mx-auto mb-3 w-44 sm:mb-4 sm:w-60">
            <img
              src={businessInfo.logoPath}
              alt={`Logo ${businessInfo.brand}`}
              className="w-full aspect-video rounded-[1.5rem] bg-white object-cover p-1.5 shadow-card sm:rounded-[2rem] sm:p-2"
            />
            {/* <img
              src="/Bretagne.png"
              alt="Drapeau breton"
              className="absolute -top-3 -left-28 h-[62px] w-auto rounded-xl shadow-card -rotate-6 sm:h-[90px] sm:-left-30"
            /> */}
          </div>

          <p className="mb-3 inline-flex rounded-full border border-brand-sage bg-white/85 px-3 py-1 text-xs font-medium text-slate-700 sm:mb-4 sm:text-sm">
            {businessInfo.owner} • Intervention locale pour particuliers
          </p>

          <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-brand-ink sm:text-5xl">
            {heroContent.title}
          </h1>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:mt-5 sm:text-lg">
            {heroContent.subtitle}
          </p>

          <div className="mt-5 flex flex-col justify-center gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-2xl bg-brand-cta px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 sm:px-6 sm:text-base"
            >
              Appeler maintenant
            </a>
            <a
              href={`mailto:${businessInfo.email}?subject=Demande%20de%20devis%20-%20TyBricolage`}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-cta hover:text-brand-cta sm:px-6 sm:text-base"
            >
              Demander un devis
            </a>
          </div>

          <div className="mx-auto mt-5 grid max-w-4xl grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3 sm:grid-cols-4">
            {infoItems.map((item) => (
              <div
                key={`${item.icon}-${item.label}`}
                className="flex items-center justify-center gap-2 rounded-2xl border border-brand-sage/60 bg-white/90 px-2.5 py-2.5 text-xs font-semibold text-slate-700 sm:px-3 sm:py-3 sm:text-sm"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-brand-soft text-brand-cta sm:h-8 sm:w-8">
                  <Icon name={item.icon} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-5 max-w-5xl rounded-3xl border border-brand-sage/50 bg-white/85 p-3 shadow-card sm:mt-8 sm:p-5">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-sage/50 bg-brand-cream text-brand-cta sm:h-12 sm:w-12"
                  aria-label={service.title}
                  title={service.title}
                >
                  <Icon name={service.icon} className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                  <span className="sr-only">{service.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-600 sm:mt-6 sm:text-sm">
            {businessInfo.trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 font-medium"
              >
                <span className="text-brand-cta">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {badge}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </header>
  );
}

export default Hero;
