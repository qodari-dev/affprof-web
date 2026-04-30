import Link from "next/link";
import type { BlogSection } from "../content";

export default function TableOfContents({
  heading,
  sections,
}: {
  heading: string;
  sections: BlogSection[];
}) {
  return (
    <nav className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-text-primary">
        {heading}
      </div>
      <ol className="mt-4 space-y-3 text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className="text-text-secondary transition-colors hover:text-primary-light"
            >
              {section.heading}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
