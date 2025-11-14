"use client";

import Image from "next/image";
import { useState } from "react";

export type StepCard = {
  title: string;
  description: string;
  highlights: string[];
  image: string;
};

type Props = {
  steps: StepCard[];
};

export default function ProgressionGrid({ steps }: Props) {
  const [selected, setSelected] = useState<StepCard | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((step) => (
          <article
            key={step.title}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-xl shadow-black/30"
          >
            <button
              type="button"
              className="relative mb-4 h-48 w-full overflow-hidden rounded-2xl"
              onClick={() => setSelected(step)}
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition hover:scale-105"
              />
              <span className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                ดูภาพ
              </span>
            </button>
            <div className="flex flex-1 flex-col">
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{step.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                {step.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="ปิดภาพ"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-sm text-white transition hover:border-white hover:bg-black"
            >
              ปิด
            </button>
            <div className="relative h-[60vh] w-full overflow-hidden rounded-3xl bg-black">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="text-lg font-semibold text-white">
                {selected.title}
              </div>
              <p className="text-sm text-zinc-300">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
