"use client";
import React from "react";

const cards = {
  heroLeft:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  topRight:
    "https://images.unsplash.com/photo-1520975958225-9e6b6f19a24a?auto=format&fit=crop&w=1400&q=80",
  bottomMid:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80",
};

const avatars = [
  "https://i.pravatar.cc/80?img=11",
  "https://i.pravatar.cc/80?img=22",
  "https://i.pravatar.cc/80?img=33",
  "https://i.pravatar.cc/80?img=44",
  "https://i.pravatar.cc/80?img=55",
];

function StatCard({ value, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/70 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/20">
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-500/10 blur-2xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-2xl" />
      </div>

      <div className="relative">
        <div className="text-4xl font-extrabold tracking-tight text-sky-400 md:text-5xl">
          {value}
        </div>
        <div className="mt-2 text-sm font-semibold text-white/90">{title}</div>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
      </div>
    </div>
  );
}

function PhotoCard({ src, alt = "photo" }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/70 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/20">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
    </div>
  );
}

function CTASection() {
  return (
    <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/70 px-6 py-10 shadow-sm backdrop-blur-sm md:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <div className="flex items-center justify-center gap-1 text-amber-400">
          {"★★★★★".split("").map((s, i) => (
            <span key={i} className="text-sm">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center -space-x-2">
          {avatars.map((a, i) => (
            <img
              key={i}
              src={a}
              alt="avatar"
              className="h-9 w-9 rounded-full border-2 border-neutral-950/80"
              loading="lazy"
            />
          ))}
        </div>

        <p className="mt-3 text-sm text-white/60">
          “Klit is integral because it’s the hub of the business.”
        </p>
        <p className="text-xs text-white/40">Eddie Shleyner</p>

        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
          Ready to be more time-rich?
        </h2>
        <p className="mt-3 text-sm text-white/65 md:text-base">
          We’ll grow your business in the background so you can focus on what
          matters most.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-400">
            Start free trial
          </button>
          <div className="text-xs text-white/40">No credit card required</div>
        </div>
      </div>
    </div>
  );
}

export default function MosaicStats() {
  return (
    <section className="w-full px-4 py-12 text-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Left big photo */}
          <div className="md:col-span-5 md:row-span-2">
            <PhotoCard src={cards.heroLeft} alt="team photo" />
          </div>

          {/* Top middle stat */}
          <div className="md:col-span-4">
            <StatCard
              value="587M+"
              title="subscribers served"
              desc="More than a decade supporting creators who put their subscribers first."
            />
          </div>

          {/* Top right photo */}
          <div className="md:col-span-3">
            <PhotoCard src={cards.topRight} alt="portrait" />
          </div>

          {/* Bottom middle photo */}
          <div className="md:col-span-4">
            <PhotoCard src={cards.bottomMid} alt="founders" />
          </div>

          {/* Bottom right stat */}
          <div className="md:col-span-3">
            <StatCard
              value="12+"
              title="years of expertise"
              desc="We know a thing or two about leveraging email to grow creator businesses."
            />
          </div>
        </div>

        {/* Big CTA/Testimonial */}
        <CTASection />
      </div>
    </section>
  );
}
