import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  arrow?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  arrow = true,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200",
        variant === "primary" &&
          "bg-signal text-ink hover:bg-white hover:shadow-[0_0_40px_-8px_rgb(198_244_50/0.7)]",
        variant === "ghost" &&
          "border border-line-strong text-fg hover:border-white/40 hover:bg-white/5",
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
