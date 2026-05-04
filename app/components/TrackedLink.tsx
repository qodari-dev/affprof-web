"use client";

import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import type { ReactNode } from "react";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

type TrackedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  eventName?: string;
  eventParams: AnalyticsParams;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  onClick?: () => void;
};

function trackEvent(eventName: string, eventParams: AnalyticsParams) {
  if (typeof window === "undefined") return;

  const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  if (!dataLayer) return;

  const params = Object.fromEntries(
    Object.entries(eventParams).filter(([, value]) => value !== undefined),
  );

  sendGAEvent("event", eventName, params);
}

export default function TrackedLink({
  href,
  children,
  className,
  eventName = "cta_click",
  eventParams,
  target,
  rel,
  "aria-label": ariaLabel,
  onClick,
}: TrackedLinkProps) {
  function handleClick() {
    trackEvent(eventName, eventParams);
    onClick?.();
  }

  const props = {
    className,
    onClick: handleClick,
    target,
    rel,
    "aria-label": ariaLabel,
  };

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
