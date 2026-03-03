import { businessInfo, navLinks } from "../data/siteData";

function Footer() {
  return (
    <footer className="bg-[#182213] px-4 pb-24 pt-10 text-brand-cream md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:px-2 lg:px-0">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold">{businessInfo.brand}</p>
            <p className="mt-2 max-w-md text-sm text-brand-cream/80">
              Homme à services de proximité pour particuliers à Trégunc et alentours.
            </p>
          </div>

          <div className="text-sm text-brand-cream/90">
            <p>{businessInfo.phoneDisplay}</p>
            <p>{businessInfo.email}</p>
          </div>
        </div>

        <nav aria-label="Liens de section" className="flex flex-wrap gap-4 text-sm text-brand-cream/85">
          <a className="hover:text-white" href="#accueil">
            Accueil
          </a>
          {navLinks.map((link) => (
            <a key={link.href} className="hover:text-white" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <p className="border-t border-white/15 pt-4 text-xs text-brand-cream/70">
          © {new Date().getFullYear()} {businessInfo.brand}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
