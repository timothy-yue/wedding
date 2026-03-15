import Link from 'next/link';
import { AnimatedReveal } from '~/components/animated-reveal';
import { details } from '~/content/details';

const links = [
  { href: '/', label: 'Home' },
  { href: '/rsvp', label: 'RSVP' },
  { href: '/contact', label: 'Contact' },
];

function SiteHeader() {
  return (
    <header className='mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 md:px-10 lg:px-12'>
      <Link
        href='/'
        className='font-display text-lg italic tracking-wide text-accent'
      >
        J & T
      </Link>
      <nav className='flex items-center gap-1'>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='px-4 py-2 text-[11px] font-medium uppercase tracking-[0.3em] text-ink/40 transition-colors hover:text-accent'
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <div className='relative flex min-h-screen flex-col'>
        <SiteHeader />
        <div className='flex flex-1 items-center justify-center px-6'>
          <div className='max-w-3xl text-center'>
            <AnimatedReveal>
              <p className='text-[11px] font-medium uppercase tracking-[0.5em] text-accent'>
                {details.date}
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1}>
              <h1 className='mt-8 font-display text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.88] text-ink'>
                {details.janet}
                <span className='my-1 block font-display text-[0.4em] italic text-accent/60'>
                  &
                </span>
                {details.tim}
              </h1>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <p className='mx-auto mt-10 max-w-xl text-base leading-relaxed text-ink/45'>
                {details.description}
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <div className='mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
                <Link className='button-primary' href='/rsvp'>
                  RSVP now
                </Link>
                <Link className='button-secondary' href='/contact'>
                  Contact us
                </Link>
              </div>
            </AnimatedReveal>
          </div>
        </div>

        <div className='flex justify-center pb-14'>
          <div className='h-16 w-px bg-linear-to-b from-transparent via-accent/30 to-transparent' />
        </div>
      </div>

      {/* ── Details strip ── */}
      <div className='border-y border-accent/10'>
        <div className='mx-auto grid max-w-6xl grid-cols-1 divide-accent/10 sm:grid-cols-3 sm:divide-x'>
          <div className='px-8 py-6 text-center'>
            <p className='text-[10px] uppercase tracking-[0.4em] text-accent/50'>
              Date
            </p>
            <p className='mt-2 font-display text-lg italic text-ink/80'>
              10/10/26
            </p>
          </div>

          <div className='px-8 py-6 text-center'>
            <p className='text-[10px] uppercase tracking-[0.4em] text-accent/50'>
              Venue
            </p>
            <p className='mt-2 font-display text-lg italic text-ink/80'>
              HL Pennisula Restaurant
            </p>
          </div>

          <div className='px-8 py-6 text-center'>
            <p className='text-[10px] uppercase tracking-[0.4em] text-accent/50'>
              Location
            </p>
            <p className='mt-2 font-display text-lg italic text-ink/80'>
              South San Francisco, CA
            </p>
          </div>
        </div>
      </div>

      <GoldenDivider />

      {/* ── Footer CTA ── */}
      <section className='border-t border-accent/10 py-24 text-center'>
        <AnimatedReveal>
          <p className='font-display text-3xl italic text-ink/60 sm:text-4xl'>
            We can&rsquo;t wait to celebrate with you.
          </p>
          <div className='mt-10'>
            <Link className='button-primary' href='/rsvp'>
              RSVP now
            </Link>
          </div>
        </AnimatedReveal>
      </section>
    </main>
  );
}

function GoldenDivider() {
  return (
    <div className='mx-auto max-w-xs'>
      <div className='h-px bg-linear-to-r from-transparent via-accent/20 to-transparent' />
    </div>
  );
}
