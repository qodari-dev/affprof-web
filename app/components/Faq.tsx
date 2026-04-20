import { ChevronDownIcon } from "./icons";

type FaqDict = {
  title: string;
  subtitle: string;
  items: { q: string; a: string }[];
};

export default function Faq({ dict }: { dict: FaqDict }) {
  return (
    <section id="faq" className="border-t border-white/8 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/4 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
            FAQ
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            {dict.subtitle}
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {dict.items.map((item, index) => (
            <details
              key={item.q}
              className="group rounded-[24px] border border-white/8 bg-white/[0.03] p-0 open:border-primary/30 open:bg-primary/[0.04]"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left marker:content-none">
                <span className="text-base font-semibold text-text-primary">
                  {item.q}
                </span>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/8 bg-white/4 text-text-secondary transition-transform duration-200 group-open:rotate-180">
                  <ChevronDownIcon />
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm leading-relaxed text-text-secondary">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
