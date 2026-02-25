import { partners } from "../data/siteData";
import Reveal from "./Reveal";

function Partners() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12" aria-label="Types de clients">
      <Reveal className="rounded-3xl border border-brand-sage/50 bg-white px-6 py-8 shadow-card">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cta">Accompagnement</p>
        <h2 className="mt-2 text-2xl font-bold text-brand-ink sm:text-3xl">Interventions adaptées à votre quotidien</h2>
        <p className="mt-3 text-slate-700">
          Chaque prestation est ajustée sur place selon vos besoins. Service sur demande pour les cas spécifiques.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {partners.map((partner) => (
            <span key={partner} className="rounded-full border border-brand-sage/60 bg-brand-soft px-4 py-2 text-sm font-medium text-slate-700">
              {partner}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Partners;
