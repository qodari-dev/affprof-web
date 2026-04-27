import Image from "next/image";

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 text-lg font-semibold tracking-tight text-text-primary">
      {children}
    </h3>
  );
}

export function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mt-6 text-base font-semibold tracking-tight text-text-primary">
      {children}
    </h4>
  );
}

export function P({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mt-4 text-base leading-relaxed text-text-secondary ${className}`}
    >
      {children}
    </p>
  );
}

export function Strong({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-semibold text-text-primary">{children}</strong>
  );
}

export function Bullets({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-4 space-y-2 text-sm text-text-secondary list-disc pl-5 marker:text-primary-light">
      {children}
    </ul>
  );
}

export function NumberedList({ children }: { children: React.ReactNode }) {
  return (
    <ol className="mt-4 space-y-2 text-sm text-text-secondary list-decimal pl-5 marker:text-primary-light marker:font-semibold">
      {children}
    </ol>
  );
}

export function Hr() {
  return <div className="my-12 h-px bg-white/8" />;
}

export function ExtLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-light underline-offset-2 hover:underline"
    >
      {children}
    </a>
  );
}

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-white/8 px-1.5 py-0.5 text-xs">{children}</code>
  );
}

export function CodeBlock({
  children,
  language,
}: {
  children: string;
  language?: string;
}) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/8 bg-black/40 p-4 text-xs leading-relaxed text-text-secondary">
      <code data-language={language}>{children}</code>
    </pre>
  );
}

export function Screenshot({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        className={`h-auto w-full ${className}`}
        sizes="(max-width: 768px) 100vw, 768px"
      />
    </figure>
  );
}

export function Callout({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
        {label}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {children}
      </p>
    </div>
  );
}

export type TableRow = { label: string; value: React.ReactNode };

export function Table({ rows }: { rows: TableRow[] }) {
  return (
    <div className="mt-4 overflow-hidden rounded-2xl border border-white/8">
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={`${row.label}-${i}`}
              className={i > 0 ? "border-t border-white/8" : ""}
            >
              <td className="w-1/3 bg-white/[0.02] px-4 py-3 align-top font-semibold text-text-primary">
                {row.label}
              </td>
              <td className="px-4 py-3 align-top text-text-secondary">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
