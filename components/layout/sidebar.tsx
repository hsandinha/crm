"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { ChevronRight, Minus, Sparkles, X } from "lucide-react";
import { navSections, secondaryNav, type NavChild } from "@/lib/navigation";

function isActivePath(pathname: string, href?: string) {
  if (!href) {
    return false;
  }
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function SubItem({
  item,
  active,
  onNavigate
}: {
  item: NavChild;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={item.href}
      className={clsx(
        "group flex items-center justify-between rounded-xl border border-transparent px-4 py-2 text-sm transition-all duration-300",
        active
          ? "border-primary-200 bg-primary-50/80 text-primary-600 shadow-soft"
          : "text-slate-500 hover:border-white/60 hover:bg-white/80 hover:text-slate-900"
      )}
      onClick={onNavigate}
    >
      <span className="flex items-center gap-3">
        <span
          className={clsx(
            "grid h-5 w-5 place-items-center rounded-full border text-[11px] uppercase tracking-[0.25em]",
            active
              ? "border-primary-200 bg-primary-100 text-primary-600"
              : "border-white/60 bg-white/50 text-slate-400"
          )}
        >
          <Minus className="h-3 w-3" />
        </span>
        {item.label}
      </span>
      {item.badge ? (
        <span className="rounded-full bg-primary-500/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-500">
          {item.badge}
        </span>
      ) : (
        <ChevronRight className="h-4 w-4 text-slate-300 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

export function Sidebar({
  onNavigate,
  onClose,
  variant = "desktop"
}: {
  onNavigate?: () => void;
  onClose?: () => void;
  variant?: "desktop" | "mobile";
}) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() =>
    navSections.reduce<Record<string, boolean>>((acc, section) => {
      const childActive =
        section.items?.some((item) =>
          isActivePath(pathname, item.href)
        ) ?? false;
      acc[section.label] = childActive;
      return acc;
    }, {})
  );

  useEffect(() => {
    setExpandedSections((prev) =>
      navSections.reduce<Record<string, boolean>>((acc, section) => {
        const prevValue = prev[section.label];
        if (prevValue === undefined) {
          const activeChild =
            section.items?.some((item) =>
              isActivePath(pathname, item.href)
            ) ?? false;
          acc[section.label] = activeChild;
        } else {
          acc[section.label] = prevValue;
        }
        return acc;
      }, {})
    );
  }, [pathname]);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <aside
      className={clsx(
        "relative flex h-full flex-col justify-between border-r border-white/30 bg-white/60 p-6 backdrop-blur-xl",
        variant === "desktop" ? "w-72" : "w-full max-w-sm border-r-0 border-l border-white/30"
      )}
    >
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
              NOVA
            </p>
            <p className="text-lg font-semibold text-slate-900">CRM Studio</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-2xl bg-gradient-accent p-2 text-white shadow-soft">
              <Sparkles className="h-5 w-5" />
            </div>
            {variant === "mobile" && onClose ? (
              <button
                aria-label="Fechar menu lateral"
                onClick={onClose}
                className="rounded-full border border-white/50 bg-white/60 p-2 text-slate-500 transition hover:bg-white/90"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </div>

        <nav className="space-y-6">
          <div>
            <p className="section-title mb-3">Principal</p>
            <ul className="space-y-3">
              {navSections.map((section) => {
                const hasChildren = Boolean(section.items?.length);
                const childActive =
                  section.items?.some((item) =>
                    isActivePath(pathname, item.href)
                  ) ?? false;
                const sectionActive =
                  childActive || isActivePath(pathname, section.href);
                const isExpanded = expandedSections[section.label] ?? false;

                const content = (
                  <div
                    className={clsx(
                      "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-all duration-300",
                      sectionActive
                        ? "bg-gradient-accent text-white shadow-soft"
                        : "border-transparent text-slate-500 hover:border-white/60 hover:bg-white/80 hover:text-slate-900"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <section.icon className="h-4 w-4" />
                      {section.label}
                    </span>
                    {section.badge ? (
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/80">
                        {section.badge}
                      </span>
                    ) : (
                      <ChevronRight
                        className={clsx(
                          "h-4 w-4 text-slate-400 transition-transform duration-300",
                          hasChildren && isExpanded
                            ? "rotate-90 text-white"
                            : sectionActive
                            ? "translate-x-1 text-white"
                            : ""
                        )}
                      />
                    )}
                  </div>
                );

                return (
                  <li key={section.label} className="space-y-2">
                    {section.href && !hasChildren ? (
                      <Link href={section.href} onClick={onNavigate}>
                        {content}
                      </Link>
                    ) : hasChildren ? (
                      <button
                        type="button"
                        onClick={() => toggleSection(section.label)}
                        className="w-full text-left"
                      >
                        {content}
                      </button>
                    ) : (
                      <div>{content}</div>
                    )}

                    {hasChildren && (expandedSections[section.label] ?? false) ? (
                      <ul className="ml-3 space-y-1">
                        {section.items!.map((item) => {
                          const active = isActivePath(pathname, item.href);
                          return (
                            <li key={item.href} className="group">
                              <SubItem
                                item={item}
                                active={active}
                                onNavigate={onNavigate}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="section-title mb-3">Inteligência</p>
            <ul className="space-y-1">
              {secondaryNav.map((item) => {
                const isActive = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href ?? "#"}
                      className={clsx(
                        "group flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm font-medium transition-all duration-300",
                        isActive
                          ? "bg-white/80 text-primary-600 shadow-soft"
                          : "text-slate-500 hover:border-white/60 hover:bg-white/80 hover:text-slate-900"
                      )}
                      onClick={onNavigate}
                    >
                      <span className="flex items-center gap-3">
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </span>
                      {item.badge ? (
                        <span className="rounded-full bg-primary-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-500">
                          {item.badge}
                        </span>
                      ) : (
                        <ChevronRight className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-1" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}
