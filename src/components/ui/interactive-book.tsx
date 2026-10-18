import { motion, useAnimationControls } from 'framer-motion';
import { useMemo, useState, type CSSProperties, type KeyboardEvent } from 'react';

export interface BookShadow {
  color?: string;
  opacity?: number;
  blur?: number;
  offsetX?: number;
  offsetY?: number;
  spread?: number;
}

export interface InteractiveBookProps {
  frontCover?: string;
  backCover?: string;
  innerPages?: string[];
  width?: number;
  height?: number;
  borderRadius?: number;
  shadow?: BookShadow;
  /** How far the book slides when the first page opens. 0 keeps it in place (mobile). */
  openShift?: number;
}

function getRgba(color: string | undefined, alpha: number) {
  if (!color) return `rgba(0,0,0,${alpha})`;
  const hex = color.replace('#', '');
  const r = parseInt(hex.length === 3 ? hex[0] + hex[0] : hex.slice(0, 2), 16);
  const g = parseInt(hex.length === 3 ? hex[1] + hex[1] : hex.slice(2, 4), 16);
  const b = parseInt(hex.length === 3 ? hex[2] + hex[2] : hex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const faceStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  backgroundColor: 'transparent',
  overflow: 'hidden',
};

const imgStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};

const spineGradient: CSSProperties = {
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  width: '12%',
  background: 'linear-gradient(to right, rgba(0,0,0,0.1), transparent)',
  pointerEvents: 'none',
};

/**
 * Framer InteractiveBook (https://framer.com/m/InteractiveBook-xGXc.js@uLOYl8huI2w4XDdONaRK)
 * Ported for Vite so the book runs without the Framer editor runtime.
 */
export default function InteractiveBook({
  width = 340,
  height = 510,
  frontCover,
  backCover,
  innerPages = [],
  shadow,
  borderRadius = 10,
  openShift,
}: InteractiveBookProps) {
  const slide = openShift ?? width / 2;
  const shadowColor = shadow?.color ?? '#000';
  const shadowOpacity = shadow?.opacity ?? 0.4;
  const shadowBlur = shadow?.blur ?? 18;
  const shadowX = shadow?.offsetX ?? 8;
  const shadowY = shadow?.offsetY ?? 14;
  const shadowSpread = shadow?.spread ?? 0;

  const leafPairs = useMemo(() => {
    const rawImages = [frontCover, ...innerPages, backCover].filter(Boolean) as string[];
    const allImages = rawImages.length % 2 === 0 ? rawImages : [...rawImages, null];
    const pairs: [string | null, string | null][] = [];
    for (let i = 0; i < allImages.length; i += 2) {
      pairs.push([allImages[i], allImages[i + 1]]);
    }
    return pairs;
  }, [frontCover, backCover, innerPages]);

  const totalLeaves = leafPairs.length;
  const [flippedCount, setFlippedCount] = useState(0);
  const [isBookClosed, setIsBookClosed] = useState(true);
  const [closing, setClosing] = useState(false);
  const bookContainerControls = useAnimationControls();

  const closedBookShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px ${getRgba(
    shadowColor,
    shadowOpacity
  )}`;

  const handleClick = async () => {
    if (closing || totalLeaves === 0) return;

    if (flippedCount === 0) {
      setIsBookClosed(false);
      void bookContainerControls.start({
        x: slide,
        transition: { duration: 0.6, ease: 'easeInOut' },
      });
    }

    if (flippedCount < totalLeaves) {
      setFlippedCount((prev) => prev + 1);
      return;
    }

    setClosing(true);
    void bookContainerControls.start({
      x: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    });
    for (let i = totalLeaves - 1; i >= 0; i -= 1) {
      setFlippedCount(i);
      await new Promise((resolve) => window.setTimeout(resolve, 80));
    }
    setFlippedCount(0);
    setIsBookClosed(true);
    setClosing(false);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Interactive research book. Click to turn the page."
      onClick={handleClick}
      onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          void handleClick();
        }
      }}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        perspective: 2500,
        cursor: 'pointer',
        overflow: 'visible',
      }}
    >
      <motion.div
        animate={bookContainerControls}
        style={{
          width,
          height,
          position: 'relative',
          transformStyle: 'preserve-3d',
          boxShadow: isBookClosed ? closedBookShadow : '0px 0px 0px transparent',
        }}
      >
        {leafPairs.map(([frontSrc, backSrc], index) => {
          const isFlipped = index < flippedCount;
          const isFlipping = index === flippedCount - 1;
          const zOffset = isFlipped ? index * 0.4 : (totalLeaves - index) * 0.4;
          const zIndex = isFlipping ? 100 : isFlipped ? index : totalLeaves - index;
          return (
            <div
              key={`${frontSrc ?? 'blank'}-${index}`}
              style={{
                position: 'absolute',
                inset: 0,
                zIndex,
                transform: `translateZ(${zOffset}px)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? -180 : 0 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  transformOrigin: 'left center',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                }}
              >
                <div
                  style={{
                    ...faceStyle,
                    borderRadius: `0px ${borderRadius}px ${borderRadius}px 0px`,
                  }}
                >
                  {frontSrc && <img src={frontSrc} style={imgStyle} alt="" />}
                  <div style={spineGradient} />
                </div>
                <div
                  style={{
                    ...faceStyle,
                    transform: 'rotateY(180deg) translateZ(0.01px)',
                    borderRadius: `${borderRadius}px 0px 0px ${borderRadius}px`,
                  }}
                >
                  {backSrc && <img src={backSrc} style={imgStyle} alt="" />}
                  <div
                    style={{
                      ...spineGradient,
                      left: 'auto',
                      right: 0,
                      transform: 'scaleX(-1)',
                    }}
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
