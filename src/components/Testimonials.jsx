import { testimonials } from "../data/siteData";
import Reveal from "./Reveal";

function Testimonials() {
  return (
    <section id="avis" className="border-y border-brand-sage/50 bg-white/70">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cta">Avis clients</p>
          <h2 className="mt-2 text-3xl font-bold text-brand-ink sm:text-4xl">Ce que disent les clients</h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            Des retours concrets sur la ponctualité, la qualité du travail et la réactivité de Yann Services 29.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 80} className="rounded-3xl border border-brand-sage/40 bg-white p-6 shadow-card">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="font-semibold text-brand-ink">{item.name}</p>
                <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-slate-700">{item.service}</span>
              </div>

              <div className="mb-3 flex" aria-label={`${item.rating} étoiles sur 5`}>
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <span key={`${item.id}-${starIdx}`} className={starIdx < item.rating ? "text-amber-500" : "text-slate-300"}>
                    ★
                  </span>
                ))}
              </div>

              <p className="text-sm leading-relaxed text-slate-700">“{item.comment}”</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
