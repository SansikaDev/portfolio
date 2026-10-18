import { EXPERIENCE } from '../lib/site';

type Job = (typeof EXPERIENCE)[number];

function CompanyMark({ job }: { job: Job }) {
  if (job.logo) {
    return (
      <div className="mt-5 inline-flex max-w-full items-center rounded-2xl border border-pine/10 bg-white px-4 py-3 sm:px-5 sm:py-4">
        <img
          src={job.logo}
          alt={job.company}
          className="h-10 w-auto max-w-[220px] object-contain object-left sm:h-12 sm:max-w-[260px]"
        />
      </div>
    );
  }

  return (
    <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
      {job.headline || job.company}
    </h3>
  );
}

function CompanyChapter({ job }: { job: Job }) {
  return (
    <article className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper">{job.kicker}</p>
        <CompanyMark job={job} />
        {job.logo && job.headline ? (
          <p className="mt-5 font-display text-2xl leading-[1.15] sm:text-3xl">{job.headline}</p>
        ) : null}
        <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-moss">{job.dates}</p>
        <p className="mt-2 text-sm text-pine/80">{job.role}</p>
        <p className="mt-1 text-sm text-pine/50">
          {[job.logo ? null : job.company, job.location, job.note].filter(Boolean).join(' · ')}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-pine/65">{job.summary}</p>
      </div>

      <ol className="lg:col-span-8">
        {job.projects.map((project, index) => (
          <li
            key={project.title}
            className="group border-t border-pine/10 py-6 first:border-t-0 first:pt-0 sm:py-7"
          >
            <div className="flex gap-4 sm:gap-6">
              <span className="mt-1 shrink-0 font-mono text-[11px] tabular-nums text-copper">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-2xl leading-tight tracking-[-0.03em] sm:text-[1.75rem]">
                    {project.title}
                  </h3>
                  <p className="font-display text-lg text-copper sm:text-xl">{project.metric}</p>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-pine/70">{project.detail}</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-pine/40">
                  {project.status} · {project.stack}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="paper-grain w-full py-24 text-pine sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper">02 - Experience</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[0.95] sm:text-5xl">
          Same craft. New floor.
        </h2>
        <p className="mt-4 max-w-2xl text-pine/65">
          I pick up a domain the way I picked up a licensed lender, a tourism shop, and two live
          client sites - sit with the floor, learn the rules, ship what it runs on. The same
          path I want on a software or AI engineering desk.
        </p>
        <div className="mt-14 space-y-20 sm:mt-16 sm:space-y-24">
          {EXPERIENCE.map((job) => (
            <CompanyChapter key={job.company} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
