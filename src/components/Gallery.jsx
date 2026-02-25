import { photos } from "../data/siteData";
import Reveal from "./Reveal";

function Gallery() {
  return (
    <section id="realisations" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <Reveal>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cta">Réalisations</p>
            <h2 className="mt-2 text-3xl font-bold text-brand-ink sm:text-4xl">Travaux réalisés récemment</h2>
            <p className="mt-3 max-w-2xl text-slate-700">
              Un aperçu concret de chantiers du quotidien : propres, efficaces et adaptés à chaque logement.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>figure:not(:first-child)]:mt-4">
        {photos.map((photo, idx) => (
          <Reveal as="figure" key={photo.id} delay={idx * 35} className="group relative m-0 break-inside-avoid overflow-hidden rounded-3xl border border-brand-sage/40 bg-white shadow-card">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-3 pt-8 text-xs font-medium text-white/95">
              {photo.alt}
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
