import { FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ContactRound, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SITE } from '../lib/site';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  useEffect(() => {
    if (!submitStatus.type) return undefined;
    const timeoutId = window.setTimeout(() => {
      setSubmitStatus({ type: null, message: '' });
    }, 5000);
    return () => window.clearTimeout(timeoutId);
  }, [submitStatus.type]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    try {
      await emailjs.sendForm(
        'service_390ukm5',
        'template_mo1vfkh',
        formRef.current!,
        'uPibP1x5u-YXzuUkV'
      );
      setSubmitStatus({
        type: 'success',
        message: 'Received. I will write back from the same inbox.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus({
        type: 'error',
        message: `The form failed. Email me at ${SITE.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pine-grain relative w-full py-24 text-birch sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper">06 - Contact</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Write from Helsinki.</h2>
          <p className="mt-5 text-birch/65">
            {SITE.availability}. A software or AI engineering role in the city, a remote desk, or
            a product that needs someone who can learn the domain and ship.
          </p>
          <ul className="mt-10 space-y-5">
            {[
              { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
              { icon: Phone, label: 'Phone', value: SITE.phone, href: SITE.phoneHref },
              {
                icon: MapPin,
                label: 'Based',
                value: `${SITE.city}, ${SITE.location} · remote welcome`,
                href: undefined,
              },
              {
                icon: ContactRound,
                label: 'Card',
                value: 'Save contact',
                href: SITE.vcardHref,
              },
            ].map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-birch/15">
                  <item.icon size={16} />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-mist">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-birch hover:text-copper">
                      {item.value}
                    </a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-5 text-sm">
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-copper">
              GitHub <ArrowUpRight size={14} />
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-copper">
              LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[1.6rem] border border-birch/10 bg-birch/[0.04] p-6 sm:p-8 lg:col-span-7"
        >
          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-mist">Name</span>
              <input
                name="name"
                required
                value={formData.name}
                placeholder="Your name"
                className="field"
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-mist">Email</span>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                placeholder="name@studio.fi"
                className="field"
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-mist">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                placeholder="What should we build, fix, or talk through?"
                className="field resize-y"
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
              />
            </label>
          </div>
          <AnimatePresence>
            {submitStatus.type && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mt-4 rounded-xl px-4 py-3 text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-moss/30 text-birch'
                    : 'bg-red-900/40 text-red-100'
                }`}
              >
                {submitStatus.message}
              </motion.p>
            )}
          </AnimatePresence>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-press mt-6 inline-flex items-center gap-2 rounded-full bg-birch px-5 py-3 text-sm font-medium text-pine"
          >
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send size={16} />}
            {isSubmitting ? 'Sending' : 'Send the note'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
