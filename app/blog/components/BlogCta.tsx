import type { BlogSection } from "../content";
import TrackedLink from "../../components/TrackedLink";

export default function BlogCta({
  cta,
  locale,
  postId,
  postSlug,
  sectionId,
}: {
  cta: NonNullable<BlogSection["ctaBox"]>;
  locale: string;
  postId: string;
  postSlug: string;
  sectionId: string;
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
        <TrackedLink
          href={cta.buttonUrl}
          eventParams={{
            location: "blog_article_cta",
            cta: "start_free",
            lang: locale,
            post_id: postId,
            post_slug: postSlug,
            section_id: sectionId,
            plan: "free",
          }}
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          {cta.buttonText}
        </TrackedLink>
        <span className="text-xs leading-6 text-text-muted">
          {cta.secondaryText}
        </span>
      </div>
    </aside>
  );
}
