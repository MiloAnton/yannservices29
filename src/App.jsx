import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { businessInfo } from "./data/siteData";

function App() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink">
      <Hero />
      <main>
        <Gallery />
        <Testimonials />
        <Partners />
        <Services />
        <Contact />
      </main>
      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-sage/60 bg-white/95 p-3 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <a
            href={`tel:${businessInfo.phoneRaw}`}
            className="flex-1 rounded-xl bg-brand-cta px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Appeler
          </a>
          <a
            href={`mailto:${businessInfo.email}?subject=Demande%20de%20devis%20-%20Yann%20Services%2029`}
            className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-800"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
