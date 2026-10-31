import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { type CSSProperties } from 'react';
import profileImage from '../../assets/images/me.webp';
import { FIGURES, SITE } from '../../lib/site';
import { scrollToId } from '../../lib/scroll';

const COMPANION_SPRING = { stiffness: 140, damping: 28, mass: 0.35, restDelta: 0.001 };

function ScrollCompanion() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const rawX = useTransform(scrollY, [0, 200, 480, 780], [0, 10, 36, 90]);
  const rawY = useTransform(scrollY, [0, 200, 480, 780], [0, 36, 110, 220]);
  const rawScale = useTransform(scrollY, [0, 520], [1, 0.88]);
  const rawOpacity = useTransform(scrollY, [0, 360, 680], [1, 1, 0]);
  const x = useSpring(rawX, COMPANION_SPRING);
  const y = useSpring(rawY, COMPANION_SPRING);
  const scale = useSpring(rawScale, COMPANION_SPRING);
  const opacity = useSpring(rawOpacity, COMPANION_SPRING);

  return (
    <motion.div
      className="companion-layer pointer-events-none fixed inset-x-0 bottom-0 z-20 flex h-[46svh] items-end justify-center overflow-visible sm:h-[50svh] lg:inset-x-auto lg:right-[max(-2.5rem,calc((100vw-72rem)/2-12rem))] lg:h-[min(82vh,780px)] lg:justify-end"
      style={reduceMotion ? { opacity } : { x, y, scale, opacity }}
    >
      <img
        src={profileImage}
        alt="Sansika Kodithuwakku, software engineer"
        className={`h-[calc(100%-0.75rem)] w-auto max-w-none select-none object-contain object-bottom ${
          reduceMotion ? '' : 'companion-float'
        }`}
        draggable={false}
        decoding="async"
      />
    </motion.div>
  );
}

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: CSSProperties;
}

export const WordsPullUp = ({
  text,
  className = '',
  showAsterisk = false,
  style,
}: WordsPullUpProps) => {
  const reduceMotion = useReducedMotion();
  const words = text.split(' ');

  return (
    <div className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={`${word}-${i}`}
            initial={reduceMotion ? { opacity: 1, y: 0 } : { y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block"
            style={{ marginRight: isLast ? 0 : '0.25em' }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute -right-[0.28em] top-[0.55em] text-[0.32em] text-copper">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: CSSProperties;
}

export const WordsPullUpMultiStyle = ({
  segments,
  className = '',
  style,
}: WordsPullUpMultiStyleProps) => {
  const reduceMotion = useReducedMotion();
  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(' ').forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={`${w.word}-${i}`}
          initial={reduceMotion ? { opacity: 1, y: 0 } : { y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className ?? ''}`}
          style={{ marginRight: '0.25em' }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

const PrismaHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="paper-grain relative w-full overflow-visible pt-24">
      <div className="mx-auto grid min-h-[100svh] max-w-6xl items-start gap-4 px-4 pb-[48svh] pt-2 sm:px-6 lg:min-h-[calc(100svh-6rem)] lg:items-center lg:gap-12 lg:pb-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-2xl italic text-copper sm:text-4xl"
          >
            Hi
          </motion.p>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 font-mono text-[11px] uppercase tracking-[0.24em] text-moss sm:mt-3"
          >
            {SITE.role} · {SITE.focus} · {SITE.city}
          </motion.p>
          <h1 className="mt-2 font-display text-[clamp(2.6rem,11vw,6.4rem)] leading-[0.88] tracking-[-0.04em] text-pine sm:mt-4">
            <WordsPullUp text={SITE.firstName} />
            <span className="mt-1 block italic text-pine/80">
              <WordsPullUp text={SITE.lastName} showAsterisk />
            </span>
          </h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-6 hidden max-w-xl text-base leading-relaxed text-pine/70 md:block md:text-lg"
          >
            {SITE.tagline} {SITE.availability}.
          </motion.p>
          <div className="mt-5 flex flex-wrap items-center gap-4 sm:mt-8">
            <button
              type="button"
              onClick={() => scrollToId('work')}
              className="btn-press group inline-flex items-center gap-2 rounded-full bg-pine py-2 pl-5 pr-1.5 text-sm font-medium text-birch hover:gap-3"
            >
              See the systems
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-copper text-birch transition-transform duration-200 group-hover:scale-110">
                <ArrowRight size={16} />
              </span>
            </button>
            <a
              href={SITE.cvHref}
              download
              className="text-sm text-pine/70 underline decoration-pine/20 underline-offset-4 hover:text-pine"
            >
              Download CV
            </a>
            <a
              href={SITE.vcardHref}
              className="text-sm text-pine/70 underline decoration-pine/20 underline-offset-4 hover:text-pine"
            >
              Save contact
            </a>
          </div>
          <p className="mt-8 hidden font-mono text-[11px] uppercase tracking-[0.18em] text-pine/45 lg:block">
            {SITE.stackLine}
          </p>
          <div className="mt-8 hidden max-w-md grid-cols-2 gap-3 lg:grid">
            {FIGURES.slice(0, 2).map((item) => (
              <div key={item.label} className="rounded-xl border border-pine/10 bg-white/70 px-3 py-2">
                <p className="font-display text-2xl text-copper">
                  {item.prefix}
                  {item.value}
                  {item.suffix}
                </p>
                <p className="text-[11px] leading-snug text-pine/55">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:col-span-5 lg:block" aria-hidden="true" />
      </div>
      <ScrollCompanion />

      <button
        type="button"
        onClick={() => scrollToId('about')}
        className="mx-auto mb-8 hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-pine/50 hover:text-pine lg:flex"
      >
        Scroll
        <ArrowDown size={14} className="animate-bounce" />
      </button>
    </section>
  );
};

export { PrismaHero };
