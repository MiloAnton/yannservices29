import { useMemo, useState } from "react";
import { photos } from "../data/siteData";
import Reveal from "./Reveal";

function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialCount = 8;
  const visiblePhotos = useMemo(
    () => (isExpanded ? photos : photos.slice(0, initialCount)),
    [isExpanded]
  );

  return (
    <section id="realisations" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
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

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {visiblePhotos.map((photo, idx) => (
          <Reveal
            as="figure"
            key={photo.id}
            delay={idx * 30}
            className="group relative m-0 aspect-[4/3] overflow-hidden rounded-2xl border border-brand-sage/40 bg-white shadow-card"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-2 pt-8 text-[11px] font-medium text-white/95 sm:text-xs">
              {photo.alt}
            </figcaption>
          </Reveal>
        ))}
      </div>

      {!isExpanded && photos.length > initialCount && (
        <Reveal className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="inline-flex items-center justify-center rounded-xl border border-brand-sage bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-brand-cta hover:text-brand-cta"
          >
            Voir plus de réalisations
          </button>
        </Reveal>
      )}
    </section>
  );
}

export default Gallery;
