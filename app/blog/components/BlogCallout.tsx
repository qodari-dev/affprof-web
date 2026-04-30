import type { BlogCallout as BlogCalloutContent } from "../content";

const toneClasses: Record<BlogCalloutContent["tone"], string> = {
  info: "border-primary/20 bg-primary/8 text-primary-light",
  warning: "border-warning/25 bg-warning/10 text-warning",
  success: "border-success/25 bg-success/10 text-success",
  danger: "border-error/25 bg-error/10 text-error",
};

export default function BlogCallout({ callout }: { callout: BlogCalloutContent }) {
  return (
    <aside
      className={`my-8 rounded-[24px] border p-5 ${toneClasses[callout.tone]}`}
    >
      <div className="text-sm font-semibold uppercase tracking-[0.18em]">
        {callout.title}
      </div>
      <p className="mt-3 text-sm leading-7 text-text-secondary">
        {callout.text}
      </p>
    </aside>
  );
}
