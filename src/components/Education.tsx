import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS, EDUCATION, LEADERSHIP, PUBLICATIONS } from '../lib/site';
import InteractiveBook from './ui/interactive-book';

export function Education() {
  const [bookWidth, setBookWidth] = useState(220);
  const [openShift, setOpenShift] = useState(0);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      if (vw < 640) {
        const width = Math.min(168, Math.max(140, Math.floor((vw - 40) / 2)));
        setBookWidth(width);
        setOpenShift(width);
      } else if (vw < 1024) {
        setBookWidth(230);
        setOpenShift(115);
      } else {
        setBookWidth(340);
        setOpenShift(170);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const bookHeight = Math.round(bookWidth * 1.5);

  return (
    <section id="papers" className="paper-grain w-full overflow-x-hidden py-24 text-pine sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper">05 - Papers & path</p>
        <h2 className="mt-4 font-display text-4xl leading-[0.95] sm:text-5xl">
          Two publications. Open the book.
        </h2>
        <p className="mt-4 max-w-xl text-pine/65">
          Tap the volume. Each tap turns a leaf - IEEE ICAC 2024, then the 2023 retail paper. Tap
          through the last page to close it.
        </p>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex min-h-[20rem] items-center justify-center overflow-visible sm:min-h-[28rem] lg:col-span-6">
            <div
              className="flex w-full items-center justify-center"
              style={{ height: bookHeight + 28 }}
            >
              <InteractiveBook
                width={bookWidth}
                height={bookHeight}
                openShift={openShift}
                borderRadius={8}
                frontCover="/papers/cover.jpg"
                innerPages={[
                  '/papers/ieee-1.jpg',
                  '/papers/ieee-2.jpg',
                  '/papers/retail-1.jpg',
                  '/papers/retail-2.jpg',
                ]}
                backCover="/papers/back.jpg"
                shadow={{ color: '#12141A', opacity: 0.35, blur: 22, offsetX: 10, offsetY: 16, spread: 0 }}
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-pine/40">The leaves</h3>
            <ul className="mt-5 space-y-4">
              {PUBLICATIONS.map((paper) => (
                <li key={paper.title} className="rounded-2xl border border-pine/10 bg-white/50 p-5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-copper">{paper.venue}</p>
                  <p className="mt-2 font-display text-xl leading-snug">{paper.title}</p>
                  {paper.href && (
                    <a
                      href={paper.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm text-moss hover:text-pine"
                    >
                      IEEE Xplore <ArrowUpRight size={14} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-pine/40">Education</h3>
            <div className="mt-5 space-y-8">
              {EDUCATION.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="border-l-2 border-copper pl-5"
                >
                  <p className="font-mono text-[11px] text-pine/40">{item.dates}</p>
                  <h4 className="mt-1 font-display text-2xl leading-tight">{item.title}</h4>
                  <p className="mt-1 text-sm text-pine/70">{item.detail}</p>
                  <p className="text-sm text-pine/50">{item.place}</p>
                  <p className="mt-2 text-sm text-moss">{item.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="space-y-10 lg:col-span-7">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-pine/40">Leadership</h3>
              <ul className="mt-4 space-y-3">
                {LEADERSHIP.map((item) => (
                  <li key={item.title} className="rounded-xl border border-pine/10 bg-white/40 px-4 py-3">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-pine/55">
                      {item.place} · {item.dates}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-pine/40">Certifications</h3>
              <ul className="mt-4 divide-y divide-pine/10">
                {CERTIFICATIONS.map((item) => (
                  <li key={item.title} className="flex justify-between gap-4 py-3 text-sm">
                    <span>{item.title}</span>
                    <span className="shrink-0 text-pine/45">{item.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
