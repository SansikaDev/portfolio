import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SITE } from '../lib/site';

const ease = [0.16, 1, 0.3, 1] as const;

const GREETINGS = [
  { text: 'Hola', lang: 'es' },
  { text: 'Bonjour', lang: 'fr' },
  { text: 'Ciao', lang: 'it' },
  { text: 'Hallo', lang: 'de' },
  { text: '你好', lang: 'zh' },
  { text: 'こんにちは', lang: 'ja' },
  { text: 'Hei', lang: 'fi' },
  { text: 'Hi', lang: 'en' },
] as const;

const STEP_MS = [150, 160, 170, 190, 220, 280, 400];

interface LoaderProps {
  onDone: () => void;
}

export function Loader({ onDone }: LoaderProps) {
  const reduceMotion = useReducedMotion();
  const last = GREETINGS.length - 1;
  const [index, setIndex] = useState(reduceMotion ? last : 0);
  const [docked, setDocked] = useState(!!reduceMotion);

  useEffect(() => {
    document.body.classList.add('portfolio-booting');
    return () => document.body.classList.remove('portfolio-booting');
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      const id = window.setTimeout(onDone, 280);
      return () => window.clearTimeout(id);
    }

    if (index < last) {
      const id = window.setTimeout(() => setIndex((value) => value + 1), STEP_MS[index] ?? 180);
      return () => window.clearTimeout(id);
    }

    const dock = window.setTimeout(() => setDocked(true), 280);
    const done = window.setTimeout(onDone, 980);
    return () => {
      window.clearTimeout(dock);
      window.clearTimeout(done);
    };
  }, [index, last, onDone, reduceMotion]);

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[100] bg-pine text-birch"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease }}
    >
      <span className="sr-only">Loading {SITE.name}</span>
      <motion.div
        className="pointer-events-none absolute inset-x-0 flex justify-center"
        initial={false}
        animate={
          docked
            ? { top: '5.5rem', y: 0 }
            : { top: '50%', y: '-50%' }
        }
        transition={{ duration: 0.7, ease }}
      >
        <div className="relative h-[1.2em] w-full font-display text-[clamp(3.2rem,9vw,6.2rem)] leading-none tracking-[-0.04em]">
          {GREETINGS.map((greeting, greetingIndex) => {
            const offset = greetingIndex - index;
            const hidden = Math.abs(offset) > 3 || (docked && offset !== 0);
            return (
              <motion.p
                key={greeting.lang}
                lang={greeting.lang}
                aria-hidden={offset !== 0}
                className="absolute inset-x-0 text-center"
                style={{
                  fontFamily:
                    '"Plus Jakarta Sans", "Hiragino Sans", "Noto Sans JP", "Noto Sans SC", system-ui, sans-serif',
                }}
                initial={false}
                animate={{
                  y: `${offset * 1.15}em`,
                  opacity: hidden ? 0 : offset === 0 ? 1 : Math.max(0.08, 1 - Math.abs(offset) * 0.38),
                  filter: docked || offset === 0 ? 'blur(0px)' : `blur(${Math.min(10, Math.abs(offset) * 3.2)}px)`,
                }}
                transition={{ duration: 0.38, ease }}
              >
                {greeting.text}
              </motion.p>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PortfolioGate({
  children,
  onReady,
}: {
  children: ReactNode;
  onReady?: () => void;
}) {
  const [ready, setReady] = useState(false);

  const finish = () => {
    document.body.classList.remove('portfolio-booting');
    setReady(true);
    onReady?.();
  };

  return (
    <>
      <AnimatePresence>{!ready && <Loader onDone={finish} />}</AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.45, delay: ready ? 0.05 : 0 }}
      >
        {children}
      </motion.div>
    </>
  );
}
