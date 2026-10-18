import { motion } from 'framer-motion';
import { FIGURES, LANGUAGES, SITE } from '../lib/site';

function HighlightIAm({ text }: { text: string }) {
  return (
    <>
      {text.split(/(I am)/g).map((part, index) =>
        part === 'I am' ? (
          <em key={index} className="font-display italic tracking-normal text-copper">
            I am
          </em>
        ) : (
          part
        )
      )}
    </>
  );
}

export function About() {
  return (
    <section id="about" className="pine-grain relative w-full py-24 text-birch sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper">01 - About</p>
        <div className="mt-6 grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">
              Software and AI. Same way of working.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-birch/72 sm:text-lg">
              <HighlightIAm text={SITE.about[0]} />
            </p>
            <p className="mt-4 text-base leading-relaxed text-birch/72 sm:text-lg">
              <HighlightIAm text={SITE.about[1]} /> {SITE.availability}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang.name}
                  className="rounded-full border border-birch/15 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-birch/80"
                >
                  {lang.name} · {lang.level}
                </span>
              ))}
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-3 lg:col-span-5">
            {FIGURES.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-birch/10 bg-birch/[0.04] p-5"
              >
                <p className="font-display text-3xl text-copper sm:text-4xl">
                  {item.prefix}
                  {item.value}
                  {item.suffix}
                </p>
                <p className="mt-2 text-sm text-birch/65">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
