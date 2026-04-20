import type { LucideIcon } from "lucide-react";
import {
  ArrowRightLeft,
  BellRing,
  ChartColumn,
  Check,
  ChevronDown,
  CirclePlus,
  CircleX,
  FolderKanban,
  Globe,
  Link2,
  Menu,
  Route,
  ScanQrCode,
  ShieldCheck,
  Tags,
  Unlink,
  Upload,
  WandSparkles,
  X,
} from "lucide-react";

export type MarketingIconKey =
  | "add"
  | "alerts"
  | "analytics"
  | "automation"
  | "broken-link"
  | "custom-domain"
  | "fallback"
  | "monitoring"
  | "organization"
  | "qr"
  | "short-link"
  | "utm"
  | "import";

export const marketingIcons: Record<MarketingIconKey, LucideIcon> = {
  add: CirclePlus,
  alerts: BellRing,
  analytics: ChartColumn,
  automation: WandSparkles,
  "broken-link": Unlink,
  "custom-domain": Globe,
  fallback: Route,
  monitoring: ShieldCheck,
  organization: FolderKanban,
  qr: ScanQrCode,
  "short-link": Link2,
  utm: ArrowRightLeft,
  import: Upload,
};

type IconTileTone = "danger" | "primary";

const iconTileToneClasses: Record<IconTileTone, string> = {
  danger: "bg-error/12 text-error ring-1 ring-inset ring-error/15",
  primary: "bg-primary/10 text-primary ring-1 ring-inset ring-primary/15",
};

export function IconTile({
  icon: Icon,
  tone = "primary",
  className = "",
}: {
  icon: LucideIcon;
  tone?: IconTileTone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${iconTileToneClasses[tone]} ${className}`.trim()}
    >
      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.2} />
    </span>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <Check
      aria-hidden="true"
      className={className}
      size={18}
      strokeWidth={2.5}
    />
  );
}

export function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <ChevronDown
      aria-hidden="true"
      className={className}
      size={16}
      strokeWidth={2}
    />
  );
}

export function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <X aria-hidden="true" className={className} size={18} strokeWidth={2} />
  );
}

export function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <Menu aria-hidden="true" className={className} size={18} strokeWidth={2} />
  );
}

export function NotIncludedIcon({ className = "" }: { className?: string }) {
  return (
    <CircleX
      aria-hidden="true"
      className={className}
      size={18}
      strokeWidth={2.2}
    />
  );
}

export function HeroCheckIcon({ className = "" }: { className?: string }) {
  return (
    <Check
      aria-hidden="true"
      className={className}
      size={12}
      strokeWidth={2.5}
    />
  );
}

export function WorkflowTagIcon({ iconKey }: { iconKey: MarketingIconKey }) {
  const Icon = marketingIcons[iconKey];

  return <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.2} />;
}

export { Tags as TagsIcon };
