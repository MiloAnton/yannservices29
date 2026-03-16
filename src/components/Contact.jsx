import { businessInfo } from "../data/siteData";
import Reveal from "./Reveal";

function Contact() {
  return (
    <section id="contact" className="border-y border-brand-sage/50 bg-gradient-to-b from-brand-soft/40 to-brand-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal className="rounded-[2rem] border border-brand-sage/60 bg-white p-7 shadow-card sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cta">Contact</p>
          <h2 className="mt-2 text-3xl font-bold text-brand-ink sm:text-4xl">Besoin d'un service rapidement ?</h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            Expliquez votre besoin en quelques mots et recevez un retour rapide. Déplacement local et devis gratuit.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-2xl bg-brand-cta px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Téléphone : {businessInfo.phoneDisplay}
            </a>
            <a
              href={`mailto:${businessInfo.email}?subject=Demande%20de%20devis%20-%20TyBricolage`}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-brand-cta hover:text-brand-cta"
            >
              Email : {businessInfo.email}
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-brand-sage/60 bg-brand-soft/55 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Horaires</p>
              <p className="mt-2 font-semibold text-brand-ink">{businessInfo.hours}</p>
            </div>
            <div className="rounded-2xl border border-brand-sage/60 bg-brand-soft/55 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Zone d'intervention</p>
              <p className="mt-2 font-semibold text-brand-ink">{businessInfo.zone}</p>
            </div>
            <div className="rounded-2xl border border-brand-sage/60 bg-brand-soft/55 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Délai de réponse</p>
              <p className="mt-2 font-semibold text-brand-ink">{businessInfo.responseDelay}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
