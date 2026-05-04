import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { BlogPost, BlogSection } from "../content";
import BlogCallout from "./BlogCallout";
import BlogCta from "./BlogCta";
import TableOfContents from "./TableOfContents";

function renderParagraphs(paragraphs?: string[]) {
  if (!paragraphs?.length) return null;

  return paragraphs.map((paragraph) => (
    <p key={paragraph} className="mt-5 text-base leading-8 text-text-secondary">
      {paragraph}
    </p>
  ));
}

function renderList(list?: BlogSection["list"]) {
  if (!list) return null;

  const ListTag = list.type === "ordered" ? "ol" : "ul";
  const markerClass =
    list.type === "ordered" ? "list-decimal pl-6" : "list-disc pl-5";

  return (
    <ListTag className={`mt-5 space-y-3 text-text-secondary ${markerClass}`}>
      {list.items.map((item) => (
        <li key={item} className="pl-2 text-base leading-8">
          {item}
        </li>
      ))}
    </ListTag>
  );
}

function BlogSectionBlock({
  post,
  section,
}: {
  post: BlogPost;
  section: BlogSection;
}) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28 border-t border-white/8 py-10"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        {section.heading}
      </h2>
      {section.intro ? (
        <p className="mt-5 text-base leading-8 text-text-secondary">
          {section.intro}
        </p>
      ) : null}
      {renderList(section.list)}
      {renderParagraphs(section.paragraphs)}
      {section.callouts?.map((callout) => (
        <BlogCallout key={`${section.id}-${callout.title}`} callout={callout} />
      ))}
      {section.subsections?.map((subsection) => (
        <div key={subsection.heading} className="mt-9">
          <h3 className="text-xl font-semibold tracking-tight text-text-primary">
            {subsection.heading}
          </h3>
          {renderParagraphs(subsection.paragraphs)}
          {renderList(subsection.list)}
        </div>
      ))}
      {renderParagraphs(section.paragraphsAfter)}
      {section.ctaBox ? (
        <BlogCta
          cta={section.ctaBox}
          locale={post.locale}
          postId={post.id}
          postSlug={post.slug}
          sectionId={section.id}
        />
      ) : null}
    </section>
  );
}

function RelatedArticles({ post }: { post: BlogPost }) {
  return (
    <section className="border-t border-white/8 pt-10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
          {post.relatedHeading}
        </h2>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {post.relatedArticles.map((article) => (
          <Link
            key={article.url}
            href={article.comingSoon ? "#" : article.url}
            className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 transition-colors hover:border-primary/25"
          >
            <h3 className="text-sm font-semibold leading-6 text-text-primary">
              {article.title}
            </h3>
            {article.comingSoon ? (
              <span className="mt-4 inline-flex rounded-full border border-white/8 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                {post.labels.comingSoon}
              </span>
            ) : (
              <span className="mt-4 inline-flex text-sm font-semibold text-primary-light">
                {post.labels.readArticle}
              </span>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article>
      <header className="border-b border-white/8">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <div>
            <Link
              href={`/${post.locale}/blog`}
              className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-primary-light"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              {post.labels.backToBlog}
            </Link>
            <div className="mt-8 flex w-fit items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
              {post.labels.category}
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-text-secondary">
              {post.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-text-muted">
              <span>{post.author}</span>
              <span>{post.readTime}</span>
              <span>
                {post.labels.updated}{" "}
                <time dateTime={post.updatedAt}>{post.updatedAt}</time>
              </span>
            </div>
          </div>
          <div className="lg:pt-10">
            <TableOfContents heading={post.tocHeading} sections={post.sections} />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="rounded-[28px] border border-white/8 bg-white/[0.03] p-6 sm:p-8">
            {post.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 first:mt-0 text-base leading-8 text-text-secondary"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {post.sections.map((section) => (
            <BlogSectionBlock key={section.id} post={post} section={section} />
          ))}
        </div>

        <div className="mt-4 max-w-5xl">
          <RelatedArticles post={post} />
        </div>
      </div>
    </article>
  );
}
