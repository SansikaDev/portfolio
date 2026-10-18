import { SITE } from '../lib/site';
import { scrollToId } from '../lib/scroll';

export function Footer() {
  return (
    <footer className="border-t border-pine/10 bg-birch text-pine">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <button type="button" onClick={() => scrollToId('home')} className="font-display text-3xl">
            {SITE.name}
            <span className="text-copper">*</span>
          </button>
          <p className="mt-2 text-sm text-pine/50">
            {SITE.role} · {SITE.city}, {SITE.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-pine/60">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="hover:text-pine">
            GitHub
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-pine">
            LinkedIn
          </a>
          <a href={`mailto:${SITE.email}`} className="hover:text-pine">
            Email
          </a>
          <a href="/CV_Sansika_Kodithuwakku.pdf" download className="hover:text-pine">
            CV
          </a>
        </div>
      </div>
      <div className="border-t border-pine/10 py-5 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-pine/40">
        © {new Date().getFullYear()} {SITE.name}. {SITE.availability}.
      </div>
    </footer>
  );
}
