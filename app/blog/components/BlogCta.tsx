import Link from "next/link";
import type { BlogSection } from "../content";

export default function BlogCta({
  cta,
}: {
  cta: NonNullable<BlogSection["ctaBox"]>;
}) {
  return (
    <aside className="my-12 rounded-[28px] border border-primary/20 bg-primary/10 p-6 sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
        {cta.title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-text-secondary">
        {cta.subtitle}
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href={cta.buttonUrl}
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          {cta.buttonText}
        </Link>
        <span className="text-xs leading-6 text-text-muted">
          {cta.secondaryText}
        </span>
      </div>
    </aside>
  );
}
