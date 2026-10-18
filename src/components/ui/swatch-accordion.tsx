import { useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from 'react';
import './swatch-accordion.css';

export interface SwatchItem {
  title: string;
  description?: string;
  tags?: string;
  color?: string;
  focus?: number;
  button?: string;
  link?: string;
  image?: { src: string };
}

export interface SwatchAccordionProps {
  items: SwatchItem[];
  openItem?: number;
  activeIndex?: number;
  trigger?: 'hover' | 'click';
  direction?: 'auto' | 'horizontal' | 'vertical';
  stripWidth?: number;
  barHeight?: number;
  numbers?: boolean;
  scrim?: boolean;
  autoplay?: boolean;
  interval?: number;
  textColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
}

function pad2(index: number) {
  return index < 9 ? `0${index + 1}` : `${index + 1}`;
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 2.5V11.5M2.5 7H11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SplitTitle({ text }: { text: string }) {
  const words = text.split(/\s+/).filter(Boolean);
  let charIndex = 0;
  return (
    <span aria-hidden="true">
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`}>
          <span className="swa-w" style={{ ['--wi' as string]: String(wordIndex) }}>
            {Array.from(word).map((ch, i) => {
              const c = charIndex;
              charIndex += 1;
              return (
                <span key={`${ch}-${i}`} className="swa-c" style={{ ['--c' as string]: String(c) }}>
                  {ch}
                </span>
              );
            })}
          </span>
          {wordIndex < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </span>
  );
}

/**
 * Framer Swatch Accordion
 * https://framer.com/m/SwatchAccordion-NZuH6I.js@NcRy9vzSYWTyUTYPEJzZ
 */
export default function SwatchAccordion({
  items,
  openItem = 1,
  activeIndex,
  trigger = 'hover',
  direction = 'auto',
  stripWidth = 92,
  barHeight = 64,
  numbers = true,
  scrim = true,
  autoplay = false,
  interval = 5,
  textColor = '#141414',
  buttonColor = '#141414',
  buttonTextColor = '#FFFFFF',
}: SwatchAccordionProps) {
  const count = items.length;
  const reduced = !!useReducedMotion();
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const rootRef = useRef<HTMLDivElement>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const hoverTimer = useRef<number | null>(null);
  const initial = Math.min(Math.max(Math.round(openItem) - 1, 0), Math.max(count - 1, 0));
  const [{ active, prev }, setOpenState] = useState({ active: initial, prev: initial });
  const controlled = typeof activeIndex === 'number';
  const current = controlled ? Math.min(Math.max(activeIndex, 0), Math.max(count - 1, 0)) : active;

  useEffect(() => {
    if (!controlled) return;
    setOpenState((state) =>
      current === state.active ? state : { active: current, prev: state.active }
    );
  }, [controlled, current]);

  const open = useCallback(
    (index: number) => {
      if (controlled) return;
      setOpenState((state) => (index === state.active ? state : { active: index, prev: state.active }));
    },
    [controlled]
  );

  useEffect(() => {
    if (!autoplay || reduced || controlled || count < 2) return undefined;
    const id = window.setInterval(() => {
      setOpenState((state) => ({ active: (state.active + 1) % count, prev: state.active }));
    }, Math.max(2, interval) * 1000);
    return () => window.clearInterval(id);
  }, [autoplay, reduced, controlled, count, interval]);

  const onStripEnter = (event: PointerEvent<HTMLDivElement>, index: number) => {
    if (trigger !== 'hover' || event.pointerType !== 'mouse') return;
    if (hoverTimer.current !== null) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      hoverTimer.current = null;
      open(index);
    }, 110);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = -1;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % count;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + count) % count;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = count - 1;
    if (next < 0) return;
    event.preventDefault();
    triggers.current[next]?.focus();
    open(next);
  };

  const rootStyle = {
    color: textColor,
    '--swa-n': String(count),
    '--swa-closed': `${Math.max(40, stripWidth)}px`,
    '--swa-bar': `${Math.max(40, barHeight)}px`,
    '--swa-gap': '8px',
    '--swa-gap-row': '8px',
    '--swa-radius': '24px',
    '--swa-pt': '28px',
    '--swa-pr': '28px',
    '--swa-pb': '28px',
    '--swa-pl': '28px',
    '--swa-text': textColor,
    '--swa-btn': buttonColor,
    '--swa-btn-text': buttonTextColor,
    '--swa-title-size': '52px',
    '--swa-strip-size': '22px',
    '--swa-body-size': '16px',
    '--swa-label-size': '12px',
    '--swa-dur': reduced ? '0.01s' : '0.75s',
    '--swa-delay': '0s',
    '--swa-ease': 'cubic-bezier(0.22, 1, 0.36, 1)',
  } as CSSProperties;

  return (
    <div
      ref={rootRef}
      className="swa"
      data-dir={direction}
      data-auto-height=""
      data-scrim={scrim ? '' : undefined}
      style={rootStyle}
    >
      <div className="swa-track">
        {items.map((item, index) => {
          const isOpen = index === current;
          const pinEnd = (isOpen && index > prev) || (index === prev && !isOpen && index > current);
          const focus = Math.min(100, Math.max(0, item.focus ?? 50)) / 100;
          const tags = String(item.tags ?? '')
            .split(',')
            .map((tag) => tag.trim())
            .filter(Boolean);
          return (
            <div
              key={item.title}
              className="swa-strip"
              data-open={isOpen ? '' : undefined}
              data-pin={pinEnd ? 'end' : undefined}
              style={
                {
                  '--swa-color': item.color ?? '#E9E7E1',
                  '--swa-focus': String(focus),
                } as CSSProperties
              }
              onPointerEnter={(event) => onStripEnter(event, index)}
            >
              <div className="swa-media" aria-hidden="true">
                {item.image?.src && <img className="swa-img" src={item.image.src} alt="" draggable={false} />}
                <div className="swa-scrim" />
              </div>
              <button
                ref={(node) => {
                  triggers.current[index] = node;
                }}
                id={`swa-${uid}-t${index}`}
                type="button"
                className="swa-trigger"
                aria-label={item.title}
                aria-expanded={isOpen}
                aria-controls={`swa-${uid}-p${index}`}
                onClick={() => open(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
              />
              <div className="swa-closed" aria-hidden="true">
                {numbers ? <span className="swa-num">{pad2(index)}</span> : <span />}
                <span className="swa-vt">
                  <span className="swa-vtitle">{item.title}</span>
                </span>
                <span className="swa-plw">
                  <span className="swa-plus">
                    <PlusIcon />
                    <span className="swa-pf">
                      <PlusIcon />
                    </span>
                  </span>
                </span>
              </div>
              <div
                id={`swa-${uid}-p${index}`}
                role="region"
                className="swa-open"
                aria-hidden={!isOpen}
              >
                <div className="swa-top">
                  {numbers ? (
                    <span className="swa-rv swa-rv-num">
                      <span className="swa-num">{pad2(index)}</span>
                    </span>
                  ) : (
                    <span />
                  )}
                  {tags.length > 0 && (
                    <ul className="swa-tags" aria-label="Stack">
                      {tags.map((tag, tagIndex) => (
                        <li
                          key={tag}
                          className="swa-tag"
                          style={{ ['--i' as string]: String(tagIndex) }}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="swa-content">
                  <h3 className="swa-title">
                    <span className="sr-only">{item.title}</span>
                    <SplitTitle text={item.title} />
                  </h3>
                  {item.description && (
                    <div className="swa-rv swa-rv-desc">
                      <p className="swa-desc">{item.description}</p>
                    </div>
                  )}
                  {item.button && (
                    <div className="swa-rc">
                      {item.link ? (
                        <a
                          className="swa-cta"
                          href={item.link}
                          {...(item.link.startsWith('http')
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          <span>{item.button}</span>
                          <ArrowIcon />
                        </a>
                      ) : (
                        <span className="swa-cta">{item.button}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
