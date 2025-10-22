import {
  Briefcase,
  CalendarCheck,
  Cog,
  LayoutDashboard,
  LucideIcon,
  MessageCircle,
  Send,
  Target
} from "lucide-react";

export type NavChild = {
  label: string;
  href: string;
  badge?: string;
};

export type NavSection = {
  label: string;
  href?: string;
  icon: LucideIcon;
  badge?: string;
  items?: NavChild[];
};

export const navSections: NavSection[] = [
  {
    label: "Painel",
    href: "/",
    icon: LayoutDashboard
  },
  {
    label: "Comercial",
    icon: Briefcase,
    items: [
      {
        label: "Esteira de Vendas",
        href: "/commercial/pipeline"
      },
      {
        label: "Listagem de Contatos",
        href: "/commercial/contacts"
      },
      {
        label: "Vendas Realizadas",
        href: "/commercial/sales",
      },
      {
        label: "Configurações do Comercial",
        href: "/commercial/settings"
      }
    ]
  },
  {
    label: "Configurações",
    icon: Cog,
    items: [
      {
        label: "Perfil",
        href: "/settings/profile"
      },
      {
        label: "Empresa",
        href: "/settings/company"
      },
      {
        label: "Equipe",
        href: "/settings/team"
      },
      {
        label: "Transferir leads",
        href: "/settings/transfer"
      }
    ]
  },
  {
    label: "Agenda",
    href: "/agenda",
    icon: CalendarCheck
  },
];

export const secondaryNav: NavSection[] = [
  {
    label: "Central WhatsApp",
    href: "/whatsapp",
    icon: MessageCircle,
    badge: "Beta"
  },
  {
    label: "Metas",
    href: "/goals",
    icon: Target
  }
];
