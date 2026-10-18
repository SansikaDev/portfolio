import { ArrowUpRight } from 'lucide-react';
import { CLIENT_PRODUCTS, PROJECTS, PROJECT_SWATCHES } from '../lib/site';
import SwatchAccordion from './ui/swatch-accordion';

export function Projects() {
  return (
    <section id="work" className="pine-grain w-full py-24 text-birch sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper">03 - Work</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl sm:text-5xl">Shipped for customers.</h2>
          <p className="max-w-sm text-sm text-birch/60">
            Travel and trade live first - then the production desks behind them. Hover a strip,
            or tap a bar on a phone.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {CLIENT_PRODUCTS.map((product) => (
            <article
              key={product.title}
              className="overflow-hidden rounded-[1.5rem] border border-birch/10 bg-birch/[0.04]"
            >
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={`${product.title} homepage`}
                  className="h-52 w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03] sm:h-64"
                />
              </a>
              <div className="p-5 sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-wider text-copper">
                  {product.kicker}
                </p>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl">{product.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-birch/65">{product.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-birch/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-birch/55"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm text-birch transition-colors duration-200 hover:text-copper focus-visible:text-copper"
                >
                  {product.hrefLabel} <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[1.6rem]">
          <SwatchAccordion
            items={[...PROJECT_SWATCHES]}
            openItem={1}
            trigger="hover"
            direction="auto"
            numbers
            scrim
            textColor="#141414"
            buttonColor="#12141A"
            buttonTextColor="#F2F3F6"
          />
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper">Side rooms</p>
        <h3 className="mt-3 font-display text-3xl leading-[0.95] sm:text-4xl">Papers and personal work</h3>
        <p className="mt-3 max-w-xl text-sm text-birch/55">
          IEEE, a live board, an LMS, a shop — the rooms I keep next to the job. Same desk. Same
          way of writing.
        </p>
        <ol className="mt-10">
          {PROJECTS.map((project, index) => (
            <li key={project.title} className="border-t border-birch/10 last:border-b">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 py-6 sm:gap-6 sm:py-7"
              >
                <span className="mt-1 shrink-0 font-mono text-[11px] tabular-nums text-copper">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="font-display text-2xl leading-tight tracking-[-0.03em] transition-colors duration-200 group-hover:text-copper group-focus-visible:text-copper sm:text-[1.75rem]">
                      {project.title}
                    </h4>
                    <p className="font-display text-lg text-copper/90 sm:text-xl">{project.year}</p>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-birch/65">{project.description}</p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-birch/40">
                    {project.technologies.join(' · ')}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-birch/70 transition-colors duration-200 group-hover:text-copper group-focus-visible:text-copper">
                    {project.hrefLabel}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
