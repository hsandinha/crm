"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { clsx } from "clsx";
import {
  Bell,
  ChevronDown,
  Flame,
  Menu,
  Search,
  Sparkles,
  Wand2
} from "lucide-react";

type TopbarProps = {
  onMenuClick?: () => void;
};

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="flex items-center justify-between gap-3 border-b border-white/50 bg-white/60 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-10 lg:py-6">
      <div className="flex flex-1 items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
          onClick={onMenuClick}
          aria-label="Abrir menu de navegação"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex flex-1 items-center gap-4 rounded-full border border-white/60 bg-white/80 px-4 py-3 text-sm shadow-soft sm:px-5">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
            placeholder="Buscar leads, empresas ou notas..."
          />
          <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400 sm:inline-flex">
            /
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
        <Button
          variant="outline"
          size="sm"
          className="hidden gap-2 text-xs sm:inline-flex"
        >
          <Sparkles className="h-4 w-4 text-primary-500" />
          Copiloto ativo
        </Button>
        <div className="group relative">
          <Button
            variant="ghost"
            className={clsx(
              "relative h-11 w-11 rounded-full border border-white/70 bg-white/80 shadow-soft sm:h-12 sm:w-12"
            )}
            aria-label="Notificações"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-danger text-[11px] font-semibold text-white shadow-card">
              9
            </span>
          </Button>
        </div>

        <div className="hidden items-center gap-3 rounded-full border border-white/60 bg-white/80 px-3 py-2 shadow-soft sm:flex">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-accent text-sm font-semibold text-white shadow-card">
            NS
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-slate-900">
              Natércia Samarino
            </p>
            <p className="text-xs text-slate-500">Diretora Comercial</p>
          </div>
          <ChevronDown className="hidden h-4 w-4 text-slate-400 sm:block" />
        </div>
      </div>
    </header>
  );
}
