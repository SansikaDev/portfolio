import { useReducedMotion, useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export type ScrollSyncMode = 'fade-in' | 'spotlight';

interface ScrollSyncedTextProps {
  prefix: string;
  items: readonly string[];
  mode?: ScrollSyncMode;
  inactiveOpacity?: number;
}

interface SyncedWordProps {
  text: string;
  mode: ScrollSyncMode;
  inactive: number;
  isFirst: boolean;
  isLast: boolean;
  reduced: boolean;
}

function SyncedWord({ text, mode, inactive, isFirst, isLast, reduced }: SyncedWordProps) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: mode === 'spotlight' ? ['center 70%', 'center 30%'] : ['center 68%', 'center 48%'],
  });

  const fadeOpacity = useTransform(scrollYProgress, [0, 1], [isFirst ? 1 : inactive, 1]);
  const spotOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isFirst ? 1 : inactive, 1, isLast ? 1 : inactive]
  );

  return (
    <motion.li
      ref={ref}
      style={{ opacity: reduced ? 1 : mode === 'spotlight' ? spotOpacity : fadeOpacity }}
      className="sst-word"
    >
      {text}
    </motion.li>
  );
}

/**
 * Framer ScrollSyncedText / ScrollWordHighlight
 * https://framer.com/m/ScrollSyncedText-pi0Rnq.js@zmg67DaPFjJjIzaxKHok
 */
export function ScrollSyncedText({
  prefix,
  items,
  mode = 'fade-in',
  inactiveOpacity = 0.16,
}: ScrollSyncedTextProps) {
  const reduced = !!useReducedMotion();
  const words = items.filter(Boolean);
  const spoken = `${prefix} ${words.join(', ')}`;

  return (
    <div className="sst">
      <h3 className="sst-prefix">
        <span aria-hidden="true">{prefix}</span>
        <span className="sr-only">{spoken}</span>
      </h3>
      <ul className="sst-list" aria-hidden="true">
        {words.map((word, index) => (
          <SyncedWord
            key={`${prefix}-${word}`}
            text={word}
            mode={mode}
            inactive={inactiveOpacity}
            isFirst={index === 0}
            isLast={index === words.length - 1}
            reduced={reduced}
          />
        ))}
      </ul>
    </div>
  );
}
