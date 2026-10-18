import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV, SITE } from '../lib/site';
import { scrollToId } from '../lib/scroll';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const ids = ['home', ...NAV.map((item) => item.id)];
      const marker = window.scrollY + 120;
      let current = ids[0];
      for (const id of ids) {
        const node = document.getElementById(id);
        if (node && node.offsetTop <= marker) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    window.setTimeout(() => scrollToId(id), 80);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        open
          ? 'bg-birch'
          : scrolled
            ? 'border-b border-pine/10 bg-birch/90 backdrop-blur-xl'
            : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between overflow-hidden px-4 sm:px-6">
        <button
          type="button"
          onClick={() => go('home')}
          className="shrink-0 font-display text-lg text-pine transition-opacity duration-200 hover:opacity-70 sm:text-xl"
        >
          {SITE.firstName}
          <span className="text-copper">*</span>
        </button>
        <div className="hidden min-w-0 items-center gap-5 overflow-hidden lg:flex xl:gap-7">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={`relative shrink-0 whitespace-nowrap text-sm transition-colors duration-200 ${
                active === item.id ? 'text-pine' : 'text-pine/50 hover:text-pine'
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-copper" />
              )}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go('contact')}
            className="btn-press shrink-0 rounded-full bg-pine px-4 py-2 text-sm text-birch"
          >
            Hire me
          </button>
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-pine lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-birch no-scrollbar lg:hidden"
          >
            <div className="flex min-h-full flex-col justify-between px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-2">
              <div className="flex flex-col">
                {NAV.map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    onClick={() => go(item.id)}
                    className={`border-b border-pine/10 py-3.5 text-left font-display text-[1.75rem] leading-none sm:py-4 sm:text-3xl ${
                      active === item.id ? 'text-copper' : 'text-pine'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => go('contact')}
                className="btn-press w-full rounded-full bg-pine py-4 text-base text-birch"
              >
                Hire me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
