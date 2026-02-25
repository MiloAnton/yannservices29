import { services } from "../data/siteData";
import Reveal from "./Reveal";

function ServiceIcon({ icon }) {
  const shared = "h-5 w-5 stroke-[2]";

  switch (icon) {
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
          <path d="M6 20C14 20 19 15 19 7C11 7 6 12 6 20Z" stroke="currentColor" />
          <path d="M6 20C6 14 10 10 16 8" stroke="currentColor" />
        </svg>
      );
    case "wrench":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
          <path d="M14 7L7 14L10 17L17 10" stroke="currentColor" />
          <path d="M20 4L16 8L18 10L22 6V4H20Z" stroke="currentColor" />
          <path d="M4 20L9 15" stroke="currentColor" />
        </svg>
      );
    case "box":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
          <path d="M3 7L12 3L21 7L12 11L3 7Z" stroke="currentColor" />
          <path d="M3 7V17L12 21L21 17V7" stroke="currentColor" />
          <path d="M12 11V21" stroke="currentColor" />
        </svg>
      );
    case "hammer":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
          <path d="M9 4L13 8L10 11L6 7L9 4Z" stroke="currentColor" />
          <path d="M13 8L20 15" stroke="currentColor" />
          <path d="M3 21L10 14" stroke="currentColor" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
          <path d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z" stroke="currentColor" />
        </svg>
      );
    case "truck":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
          <path d="M3 6H15V16H3V6Z" stroke="currentColor" />
          <path d="M15 10H19L21 12V16H15V10Z" stroke="currentColor" />
          <circle cx="7" cy="17" r="2" stroke="currentColor" />
          <circle cx="18" cy="17" r="2" stroke="currentColor" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
          <path d="M3 11L12 4L21 11" stroke="currentColor" />
          <path d="M6 10V20H18V10" stroke="currentColor" />
        </svg>
      );
    case "droplet":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
          <path d="M12 3C9 7 6 10 6 14C6 17.3 8.7 20 12 20C15.3 20 18 17.3 18 14C18 10 15 7 12 3Z" stroke="currentColor" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
          <path d="M13 2L5 13H11L10 22L19 10H13L13 2Z" stroke="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cta">Services</p>
        <h2 className="mt-2 text-3xl font-bold text-brand-ink sm:text-4xl">Prestations proposées</h2>
        <p className="mt-3 max-w-2xl text-slate-700">
          Des interventions utiles pour gagner du temps et garder un logement propre, pratique et fonctionnel.
        </p>
      </Reveal>

      <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, idx) => (
          <Reveal key={service.id} delay={idx * 60} className="group rounded-3xl border border-brand-sage/45 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-cta/70">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-cta">
              <ServiceIcon icon={service.icon} />
            </div>
            <h3 className="text-lg font-semibold text-brand-ink">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{service.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Services;
