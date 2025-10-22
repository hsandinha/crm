"use client";

import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  commercialProducts,
  lossReasons,
  type CommercialProduct
} from "@/lib/data";
import { Palette, Percent, Plus, ShieldCheck, Sparkles, Trash2 } from "lucide-react";

const quickColors = [
  "#0B7AFF",
  "#20C997",
  "#F5C542",
  "#9C4DFF",
  "#FF4D4D",
  "#5BD46D",
  "#C957D3",
  "#BFE0D2",
  "#C17D3D",
  "#FF4DFF"
] as const;

function ProductRow({ product }: { product: CommercialProduct }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/50 bg-white/80 px-4 py-3 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
      <div className="flex items-center gap-3">
        <span
          className="h-8 w-8 rounded-full border border-white/70 shadow-soft"
          style={{ backgroundColor: product.color }}
        />
        <div>
          <p className="text-sm font-semibold text-slate-900 uppercase tracking-[0.2em]">
            {product.name}
          </p>
          <p className="text-xs text-slate-500">
            Comissão geral: {product.generalCommission}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 text-sm text-slate-500">
        <div className="flex flex-col text-right">
          <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Sua comissão
          </span>
          <span className="font-semibold text-slate-900">
            {product.personalCommission}
          </span>
        </div>
        <button className="text-xs font-semibold uppercase tracking-[0.25em] text-danger transition hover:text-danger/70">
          Deletar
        </button>
      </div>
    </div>
  );
}

export function CommercialSettings() {
  const [selectedProduct, setSelectedProduct] = useState<string>("SEPLAG");
  const [generalCommission, setGeneralCommission] = useState<string>("0%");
  const [personalCommission, setPersonalCommission] = useState<string>("0%");
  const [newProduct, setNewProduct] = useState("");
  const [newCommission, setNewCommission] = useState("0%");
  const [color, setColor] = useState<string>(quickColors[0]);

  const availableProducts = useMemo(
    () => Array.from(new Set(commercialProducts.map((item) => item.name))),
    []
  );

  return (
    <section className="space-y-10">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="section-title">Comercial</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Produtos & Comissões
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Cadastre produtos com suas respectivas cores e regras de comissão.
            Tudo sincronizado com o pipeline e indicadores do time comercial.
          </p>
          <div className="mt-4 inline-flex flex-wrap items-center gap-3 text-xs">
            <Badge variant="accent" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Copiloto sugere cor & comissão ideais
            </Badge>
            <Badge variant="neutral" className="gap-2">
              <ShieldCheck className="h-4 w-4" />
              Governança aplicando regras globais
            </Badge>
          </div>
        </div>
        <Button size="sm" variant="outline" className="gap-2 text-xs">
          <Plus className="h-4 w-4" />
          Importar planilha
        </Button>
      </header>

      <div className="space-y-6 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Produtos cadastrados
          </h2>
          <p className="text-sm text-slate-500">
            Vincule produtos existentes às suas comissões. Valores podem ser
            alterados a qualquer momento e impactam automaticamente os relatórios.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[2fr_1fr_1fr_auto]">
          <select
            value={selectedProduct}
            onChange={(event) => setSelectedProduct(event.target.value)}
            className="rounded-2xl border border-white/60 bg-white/80 px-5 py-3 text-sm text-slate-600 shadow-soft outline-none transition hover:border-primary-200 focus:border-primary-200 focus:ring-2 focus:ring-primary-100"
          >
            {availableProducts.map((product) => (
              <option key={product}>{product}</option>
            ))}
          </select>
          <div className="flex items-center rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-slate-500 shadow-soft">
            <Percent className="mr-2 h-4 w-4 text-slate-400" />
            <input
              value={generalCommission}
              onChange={(event) => setGeneralCommission(event.target.value)}
              className="w-full bg-transparent outline-none"
              placeholder="Comissão geral"
            />
          </div>
          <div className="flex items-center rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-slate-500 shadow-soft">
            <Percent className="mr-2 h-4 w-4 text-slate-400" />
            <input
              value={personalCommission}
              onChange={(event) => setPersonalCommission(event.target.value)}
              className="w-full bg-transparent outline-none"
              placeholder="Sua comissão"
            />
          </div>
          <Button className="gap-2 text-xs uppercase tracking-[0.3em]">
            <Plus className="h-4 w-4" />
            Adicionar
          </Button>
        </div>

        <div className="rounded-2xl border border-white/50 bg-white/80 px-5 py-6 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Não achou seu produto?
              </p>
              <p className="text-xs text-slate-500">
                Cadastre e defina a cor que ele aparecerá no pipeline.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-[2fr_auto_1fr_auto]">
              <input
                value={newProduct}
                onChange={(event) => setNewProduct(event.target.value)}
                className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-soft outline-none transition hover:border-primary-200 focus:border-primary-200 focus:ring-2 focus:ring-primary-100"
                placeholder="Nome do produto"
              />
              <div className="flex items-center gap-2 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-soft">
                <Palette className="h-4 w-4 text-slate-400" />
                <div className="flex items-center gap-2">
                  <span
                    className="h-6 w-6 rounded-full border border-white/70 shadow-soft"
                    style={{ backgroundColor: color }}
                  />
                  <select
                    value={color}
                    onChange={(event) => setColor(event.target.value)}
                    className="bg-transparent text-xs uppercase tracking-[0.25em] text-slate-500 outline-none"
                  >
                    {quickColors.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex items-center rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-slate-500 shadow-soft">
                <Percent className="mr-2 h-4 w-4 text-slate-400" />
                <input
                  value={newCommission}
                  onChange={(event) => setNewCommission(event.target.value)}
                  className="w-full bg-transparent outline-none"
                  placeholder="Comissão"
                />
              </div>
              <Button className="gap-2 text-xs uppercase tracking-[0.3em]">
                <Plus className="h-4 w-4" />
                Adicionar
              </Button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
            {quickColors.map((item) => (
              <button
                key={item}
                onClick={() => setColor(item)}
                className={clsx(
                  "flex items-center gap-2 rounded-full border px-3 py-1 transition",
                  item === color
                    ? "border-primary-200 bg-primary-50/60 text-primary-600"
                    : "border-white/60 bg-white/60 text-slate-500 hover:border-primary-200"
                )}
              >
                <span
                  className="h-3 w-3 rounded-full shadow-sm"
                  style={{ backgroundColor: item }}
                />
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {commercialProducts.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="space-y-6 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Motivos de perda cadastrados
            </h2>
            <p className="text-sm text-slate-500">
              Alimente com os principais motivos para alimentar os relatórios de
              inteligência comercial e ações preventivas.
            </p>
          </div>
          <div className="flex gap-3">
            <input
              className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-soft outline-none transition hover:border-primary-200 focus:border-primary-200 focus:ring-2 focus:ring-primary-100"
              placeholder="Nome do motivo de perda"
            />
            <Button className="gap-2 text-xs uppercase tracking-[0.3em]">
              <Plus className="h-4 w-4" />
              Adicionar
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          {lossReasons.map((reason, index) => (
            <div
              key={reason}
              className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
            >
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-50 text-xs font-semibold text-primary-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-slate-700">{reason}</p>
              </div>
              <button className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-danger transition hover:text-danger/70">
                <Trash2 className="h-4 w-4" />
                Deletar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
