"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  UserMultiple02Icon,
  Scissor01Icon,
  GiftIcon,
  Ticket01Icon,
  Settings01Icon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

const tabs: { href: string; label: string; icon: IconSvgElement }[] = [
  { href: "/home", label: "Inicio", icon: UserMultiple02Icon },
  { href: "/services", label: "Servicios", icon: Scissor01Icon },
  { href: "/rewards", label: "Recompensas", icon: GiftIcon },
  { href: "/vouchers", label: "Vouchers", icon: Ticket01Icon },
  { href: "/settings", label: "Configuración", icon: Settings01Icon },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Principal"
      className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
    >
      <ul className="mx-auto flex w-full max-w-2xl items-stretch justify-between px-1 pb-[env(safe-area-inset-bottom)]">
        {tabs.map(({ href, label, icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className="group flex flex-col items-center gap-1 rounded-xl px-1 py-2 text-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <span
                  className={cn(
                    "flex h-8 w-14 items-center justify-center rounded-full text-muted-foreground transition-colors group-hover:text-foreground",
                    active && "bg-secondary text-points"
                  )}
                >
                  <HugeiconsIcon icon={icon} strokeWidth={1.5} className="size-5" />
                </span>
                <span
                  className={cn(
                    "text-muted-foreground",
                    active && "font-semibold text-points"
                  )}
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
