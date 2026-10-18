import { SKILL_GROUPS } from '../lib/site';
import { ScrollSyncedText } from './ui/scroll-synced-text';

export function Skills() {
  return (
    <section id="skills" className="paper-grain w-full py-20 text-pine sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper">04 - Craft</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">The tools I keep on the desk</h2>
        <p className="mt-4 max-w-md text-sm text-pine/55">
          Languages, then the desks they run - scroll and each word lights as it arrives.
        </p>
      </div>
      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-20 px-4 sm:px-6 sm:gap-28">
        {SKILL_GROUPS.map((group) => (
          <ScrollSyncedText
            key={group.title}
            prefix={group.title}
            items={group.items}
            mode="fade-in"
          />
        ))}
      </div>
    </section>
  );
}
