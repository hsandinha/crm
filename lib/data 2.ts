export type Metric = {
  id: string;
  label: string;
  value: string;
  delta: number;
  trend: "up" | "down" | "flat";
  description: string;
};

export const metrics: Metric[] = [
  {
    id: "leads",
    label: "Leads ativos",
    value: "857",
    delta: 18.4,
    trend: "up",
    description: "Novos leads capturados nos últimos 7 dias"
  },
  {
    id: "pipeline",
    label: "Oportunidades na esteira",
    value: "312",
    delta: 6.1,
    trend: "up",
    description: "Oportunidades qualificadas aguardando follow-up"
  },
  {
    id: "win-rate",
    label: "Taxa de conversão",
    value: "27.3%",
    delta: -3.2,
    trend: "down",
    description: "Conversões confirmadas no período atual"
  },
  {
    id: "revenue",
    label: "Receita prevista",
    value: "R$ 482k",
    delta: 12.9,
    trend: "up",
    description: "Valor potencial nos próximos 30 dias"
  }
];

export type Activity = {
  id: string;
  agent: string;
  type: "call" | "meeting" | "email" | "deal";
  company: string;
  timeAgo: string;
  status: string;
};

export const activities: Activity[] = [
  {
    id: "act-1",
    agent: "Sara Holanda",
    type: "deal",
    company: "Mosaic Ventures",
    timeAgo: "há 8 minutos",
    status: "Deal fechado — Plano Enterprise"
  },
  {
    id: "act-2",
    agent: "Luan Ribeiro",
    type: "call",
    company: "BioLab Solutions",
    timeAgo: "há 21 minutos",
    status: "Follow-up agendado para amanhã"
  },
  {
    id: "act-3",
    agent: "Ana Soh",
    type: "email",
    company: "Cortex Analytics",
    timeAgo: "há 32 minutos",
    status: "E-mail de proposta reenviado com add-ons"
  },
  {
    id: "act-4",
    agent: "Lucas Matos",
    type: "meeting",
    company: "Urban Grid",
    timeAgo: "há 55 minutos",
    status: "Reunião de kickoff concluída"
  }
];

export type Stage = {
  id: string;
  title: string;
  value: number;
  change: number;
  leads: {
    id: string;
    name: string;
    company: string;
    value: string;
    initials: string;
    score: number;
  }[];
};

export const pipelineStages: Stage[] = [
  {
    id: "discovery",
    title: "Descoberta",
    value: 2,
    change: 12,
    leads: [
      {
        id: "discovery-1",
        name: "Celina Duarte",
        company: "Atlas Finance",
        value: "R$ 7.900",
        initials: "CD",
        score: 62
      },
      {
        id: "discovery-2",
        name: "Mario Teixeira",
        company: "Tribo Digital",
        value: "R$ 5.300",
        initials: "MT",
        score: 48
      }
    ]
  },
  {
    id: "proposal",
    title: "Proposta",
    value: 2,
    change: -4,
    leads: [
      {
        id: "proposal-1",
        name: "Angelica Mendes",
        company: "Neon Health",
        value: "R$ 18.000",
        initials: "AM",
        score: 75
      },
      {
        id: "proposal-2",
        name: "Jorge Nunes",
        company: "Grupo Vital",
        value: "R$ 12.400",
        initials: "JN",
        score: 69
      }
    ]
  },
  {
    id: "negotiation",
    title: "Negociação",
    value: 2,
    change: 8,
    leads: [
      {
        id: "negotiation-1",
        name: "Lara Couto",
        company: "Pulse Energy",
        value: "R$ 27.900",
        initials: "LC",
        score: 83
      },
      {
        id: "negotiation-2",
        name: "João Trindade",
        company: "Focus Legal",
        value: "R$ 6.700",
        initials: "JT",
        score: 57
      }
    ]
  },
  {
    id: "won",
    title: "Fechados",
    value: 1,
    change: 16,
    leads: [
      {
        id: "won-1",
        name: "Hugo Peixoto",
        company: "Magnolia Labs",
        value: "R$ 44.100",
        initials: "HP",
        score: 95
      }
    ]
  }
];

export type LeaderboardEntry = {
  name: string;
  initials: string;
  deals: number;
  value: string;
  trend: number;
};

export const leaderboard: LeaderboardEntry[] = [
  {
    name: "Sara Holanda",
    initials: "SH",
    deals: 14,
    value: "R$ 192k",
    trend: 12.4
  },
  {
    name: "Luan Ribeiro",
    initials: "LR",
    deals: 11,
    value: "R$ 164k",
    trend: 8.3
  },
  {
    name: "Ana Soh",
    initials: "AS",
    deals: 9,
    value: "R$ 137k",
    trend: 6.7
  }
];

export type SmartList = {
  label: string;
  count: number;
};

export const smartLists: SmartList[] = [
  { label: "Probabilidade > 70%", count: 43 },
  { label: "Requer atenção hoje", count: 18 },
  { label: "Silêncio há 7 dias", count: 24 },
  { label: "Plano Enterprise", count: 12 }
];

export type HealthStat = {
  label: string;
  value: string;
  delta: number;
};

export const teamHealth: HealthStat[] = [
  {
    label: "SLA cumprido",
    value: "92%",
    delta: 4.2
  },
  {
    label: "Respostas no mesmo dia",
    value: "81%",
    delta: 6.8
  },
  {
    label: "Satisfação do cliente",
    value: "9.1",
    delta: 1.3
  }
];

export type Lead = {
  id: string;
  name: string;
  company: string;
  interest: string;
  stage: string;
  owner: string;
  value: string;
  lastInteraction: string;
  score: number;
  status: "hot" | "warm" | "cold";
  phone: string;
  tags: string[];
  city: string;
  entryDate: string;
  funnel: string;
};

export const leadsTable: Lead[] = [
  {
    id: "lead-1",
    name: "Celina Duarte",
    company: "Atlas Finance",
    interest: "Plano Enterprise",
    stage: "Negociação",
    owner: "Sara Holanda",
    value: "R$ 27.900",
    lastInteraction: "há 2h",
    score: 92,
    status: "hot",
    phone: "(11) 9 7301-2982",
    tags: ["Financeiro", "São Paulo"],
    city: "São Paulo - SP",
    entryDate: "21/10/2025 14:37",
    funnel: "Prospecção Inicial"
  },
  {
    id: "lead-2",
    name: "Mario Teixeira",
    company: "Tribo Digital",
    interest: "Onboarding automação",
    stage: "Diagnóstico",
    owner: "Luan Ribeiro",
    value: "R$ 12.700",
    lastInteraction: "há 4h",
    score: 66,
    status: "warm",
    phone: "(21) 9 8844-6103",
    tags: ["Mid-market"],
    city: "Rio de Janeiro - RJ",
    entryDate: "21/10/2025 13:03",
    funnel: "Qualificação"
  },
  {
    id: "lead-3",
    name: "Angelica Mendes",
    company: "Neon Health",
    interest: "Plano Prime",
    stage: "Proposta enviada",
    owner: "Ana Soh",
    value: "R$ 18.000",
    lastInteraction: "há 30m",
    score: 88,
    status: "hot",
    phone: "(61) 9 9918-4073",
    tags: ["Saúde"],
    city: "Brasília - DF",
    entryDate: "21/10/2025 12:34",
    funnel: "Negociação"
  },
  {
    id: "lead-4",
    name: "Jorge Nunes",
    company: "Grupo Vital",
    interest: "Implementação customizada",
    stage: "Reunião marcada",
    owner: "Lucas Matos",
    value: "R$ 32.500",
    lastInteraction: "há 1d",
    score: 73,
    status: "warm",
    phone: "(48) 9 8820-9321",
    tags: ["Enterprise"],
    city: "Florianópolis - SC",
    entryDate: "21/10/2025 12:02",
    funnel: "Descoberta"
  },
  {
    id: "lead-5",
    name: "Lara Couto",
    company: "Pulse Energy",
    interest: "Plano Performance",
    stage: "Negociação",
    owner: "Sara Holanda",
    value: "R$ 27.900",
    lastInteraction: "há 3h",
    score: 83,
    status: "hot",
    phone: "(31) 9 9544-4401",
    tags: ["Energia", "Concorrente"],
    city: "Belo Horizonte - MG",
    entryDate: "21/10/2025 11:50",
    funnel: "Negociação"
  },
  {
    id: "lead-6",
    name: "João Trindade",
    company: "Focus Legal",
    interest: "Plano Prime",
    stage: "Proposta enviada",
    owner: "Ana Soh",
    value: "R$ 6.700",
    lastInteraction: "há 6h",
    score: 57,
    status: "cold",
    phone: "(41) 9 9033-7788",
    tags: ["Jurídico"],
    city: "Curitiba - PR",
    entryDate: "21/10/2025 11:20",
    funnel: "Proposta"
  },
  {
    id: "lead-7",
    name: "Hugo Peixoto",
    company: "Magnolia Labs",
    interest: "Expansão conta enterprise",
    stage: "Fechado ganho",
    owner: "Sara Holanda",
    value: "R$ 44.100",
    lastInteraction: "há 15m",
    score: 95,
    status: "hot",
    phone: "(31) 9 9541-5510",
    tags: ["Cliente ativo"],
    city: "Belo Horizonte - MG",
    entryDate: "21/10/2025 10:47",
    funnel: "Fechado ganho"
  },
  {
    id: "lead-8",
    name: "Amanda Barreto",
    company: "Synapse Growth",
    interest: "Plano Launchpad",
    stage: "Descoberta",
    owner: "Lucas Matos",
    value: "R$ 8.450",
    lastInteraction: "há 2d",
    score: 49,
    status: "cold",
    phone: "(47) 9 9200-1140",
    tags: ["Startups"],
    city: "Joinville - SC",
    entryDate: "20/10/2025 16:28",
    funnel: "Prospecção Inicial"
  }
];

export type WhatsAppMessage = {
  id: string;
  from: "cliente" | "agente" | "bot";
  author: string;
  time: string;
  content: string;
  tags?: string[];
};

export type WhatsAppConversation = {
  id: string;
  contact: string;
  company: string;
  status: "quente" | "morno" | "frio";
  avatar: string;
  lastMessage: string;
  unread: number;
  assignedTo: string;
  updatedAt: string;
  messages: WhatsAppMessage[];
};

export const whatsappConversations: WhatsAppConversation[] = [
  {
    id: "conv-1",
    contact: "Paula Monteiro",
    company: "Nova Solar",
    status: "quente",
    avatar: "PM",
    lastMessage: "Fechamos a proposta? Consigo assinar ainda hoje.",
    unread: 2,
    assignedTo: "Sara Holanda",
    updatedAt: "há 3 min",
    messages: [
      {
        id: "msg-1",
        from: "cliente",
        author: "Paula Monteiro",
        time: "09:14",
        content:
          "Oi! Recebi a proposta nova, só queria confirmar as condições do onboarding."
      },
      {
        id: "msg-2",
        from: "agente",
        author: "Sara Holanda",
        time: "09:16",
        content:
          "Olá Paula, claro! O onboarding começa em 3 dias úteis com suporte dedicado."
      },
      {
        id: "msg-3",
        from: "cliente",
        author: "Paula Monteiro",
        time: "09:19",
        content: "Perfeito. Fechamos a proposta? Consigo assinar ainda hoje.",
        tags: ["alta prioridade"]
      }
    ]
  },
  {
    id: "conv-2",
    contact: "Filipe Azevedo",
    company: "Grão Saúde",
    status: "morno",
    avatar: "FA",
    lastMessage: "Estamos aguardando os documentos complementares.",
    unread: 0,
    assignedTo: "Ana Soh",
    updatedAt: "há 28 min",
    messages: [
      {
        id: "msg-4",
        from: "agente",
        author: "Assistente Nova",
        time: "08:41",
        content:
          "Olá Filipe! Aqui é o copiloto Nova. Lembrete: faltam 2 documentos para avançarmos."
      },
      {
        id: "msg-5",
        from: "cliente",
        author: "Filipe Azevedo",
        time: "08:56",
        content: "Certo, estou encaminhando hoje ainda."
      },
      {
        id: "msg-6",
        from: "agente",
        author: "Ana Soh",
        time: "09:02",
        content: "Perfeito, já deixei nossa equipe preparada para receber."
      }
    ]
  },
  {
    id: "conv-3",
    contact: "Mila Antunes",
    company: "Grupo Aurora",
    status: "frio",
    avatar: "MA",
    lastMessage: "Vamos retomar na próxima semana?",
    unread: 5,
    assignedTo: "Fila dinâmica",
    updatedAt: "há 1h",
    messages: [
      {
        id: "msg-7",
        from: "bot",
        author: "Assistente Nova",
        time: "08:04",
        content:
          "Bom dia! Trouxe alguns conteúdos que podem te ajudar a comparar planos."
      },
      {
        id: "msg-8",
        from: "cliente",
        author: "Mila Antunes",
        time: "08:06",
        content: "Obrigada! Vou revisar com o time."
      },
      {
        id: "msg-9",
        from: "bot",
        author: "Assistente Nova",
        time: "08:50",
        content:
          "Posso te conectar com um especialista ainda hoje, caso queira decidir rápido."
      },
      {
        id: "msg-10",
        from: "cliente",
        author: "Mila Antunes",
        time: "09:10",
        content: "Melhor retomarmos semana que vem, estou fechando o trimestre."
      }
    ]
  }
];

export type TrafficLightConfig = {
  warning: number;
  danger: number;
};

export const defaultTrafficLightConfig: TrafficLightConfig = {
  warning: 12,
  danger: 24
};

export type InactivityAlert = {
  name: string;
  owner: string;
  lastInteractionHours: number;
};

export const inactivityAlerts: InactivityAlert[] = [
  {
    name: "Paula Monteiro",
    owner: "Sara Holanda",
    lastInteractionHours: 2
  },
  {
    name: "Filipe Azevedo",
    owner: "Ana Soh",
    lastInteractionHours: 13
  },
  {
    name: "Mila Antunes",
    owner: "Fila dinâmica",
    lastInteractionHours: 28
  }
];

export type SalesHighlight = {
  id: string;
  label: string;
  value: string;
  delta: number;
  trend: "up" | "down";
  description: string;
};

export const salesHighlights: SalesHighlight[] = [
  {
    id: "mrr",
    label: "MRR incrementado",
    value: "R$ 214k",
    delta: 18.7,
    trend: "up",
    description: "Receita recorrente adicionada no trimestre"
  },
  {
    id: "enterprise",
    label: "Planos Enterprise",
    value: "12 contratos",
    delta: 9.4,
    trend: "up",
    description: "Novos fechados com ticket médio acima de R$40k"
  },
  {
    id: "cycle",
    label: "Ciclo médio",
    value: "19 dias",
    delta: 3.1,
    trend: "down",
    description: "Tempo para fechamento desde qualificação"
  }
];

export type SaleRecord = {
  id: string;
  client: string;
  company: string;
  plan: string;
  value: string;
  closedBy: string;
  closedAt: string;
  cycleDays: number;
  sentiment: "positivo" | "neutro" | "negativo";
};

export const salesRecords: SaleRecord[] = [
  {
    id: "sale-1",
    client: "Paula Monteiro",
    company: "Nova Solar",
    plan: "Enterprise CX",
    value: "R$ 58.500",
    closedBy: "Sara Holanda",
    closedAt: "21/10/2025",
    cycleDays: 14,
    sentiment: "positivo"
  },
  {
    id: "sale-2",
    client: "Filipe Azevedo",
    company: "Grão Saúde",
    plan: "Prime Growth",
    value: "R$ 32.900",
    closedBy: "Ana Soh",
    closedAt: "20/10/2025",
    cycleDays: 18,
    sentiment: "positivo"
  },
  {
    id: "sale-3",
    client: "Marina Calado",
    company: "Atlas Finance",
    plan: "Scale Performance",
    value: "R$ 26.400",
    closedBy: "Lucas Matos",
    closedAt: "19/10/2025",
    cycleDays: 23,
    sentiment: "neutro"
  },
  {
    id: "sale-4",
    client: "Rodrigo Pena",
    company: "Urban Grid",
    plan: "Prime Growth",
    value: "R$ 18.750",
    closedBy: "Luan Ribeiro",
    closedAt: "18/10/2025",
    cycleDays: 21,
    sentiment: "positivo"
  },
  {
    id: "sale-5",
    client: "Joice Almeida",
    company: "Mosaic Ventures",
    plan: "Essentials Plus",
    value: "R$ 12.900",
    closedBy: "Sara Holanda",
    closedAt: "17/10/2025",
    cycleDays: 27,
    sentiment: "positivo"
  }
];

export type CommercialProduct = {
  id: string;
  name: string;
  color: string;
  generalCommission: string;
  personalCommission: string;
};

export const commercialProducts: CommercialProduct[] = [
  {
    id: "prod-1",
    name: "SEPLAG",
    color: "#0B7AFF",
    generalCommission: "0%",
    personalCommission: "0%"
  },
  {
    id: "prod-2",
    name: "PMMG",
    color: "#20C997",
    generalCommission: "0%",
    personalCommission: "0%"
  },
  {
    id: "prod-3",
    name: "IPSEMG",
    color: "#F5C542",
    generalCommission: "0%",
    personalCommission: "0%"
  },
  {
    id: "prod-4",
    name: "IPSM",
    color: "#9C4DFF",
    generalCommission: "0%",
    personalCommission: "0%"
  },
  {
    id: "prod-5",
    name: "Prefeituras não atendidas",
    color: "#FF4D4D",
    generalCommission: "0%",
    personalCommission: "0%"
  },
  {
    id: "prod-6",
    name: "Contratado SEPLAG",
    color: "#5BD46D",
    generalCommission: "4%",
    personalCommission: "4%"
  },
  {
    id: "prod-7",
    name: "Prefeitura de Contagem",
    color: "#C957D3",
    generalCommission: "0%",
    personalCommission: "0%"
  },
  {
    id: "prod-8",
    name: "FGTS",
    color: "#BFE0D2",
    generalCommission: "0%",
    personalCommission: "0%"
  },
  {
    id: "prod-9",
    name: "OUTROS",
    color: "#C17D3D",
    generalCommission: "0%",
    personalCommission: "0%"
  },
  {
    id: "prod-10",
    name: "CBMG",
    color: "#FF4DFF",
    generalCommission: "0%",
    personalCommission: "0%"
  }
];

export const lossReasons = [
  "Sem interesse",
  "Sem saldo/margem",
  "Qtde. máxima de contratos",
  "Não retornou mais",
  "Contratou com outra empresa",
  "Fraude",
  "Fora do perfil",
  "Fora da idade permitida",
  "Autorregulação",
  "Recusou enviar docs.",
  "Contato inválido",
  "Sem acesso ao app FGTS",
  "Não aprovado pelo banco",
  "Pendente na Receita Federal",
  "Outro",
  "RG acima de 10 anos",
  "CNH vencida",
  "Contrato encerrando no próximo mês",
  "Contrato encerrado",
  "Sem acesso ao portal do servidor"
];

export type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: string;
  lastSeen: string;
  inRotation: boolean;
  squad: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Natércia Samarino",
    email: "comercial@pnlcreditoseguro.com.br",
    role: "Administrador Comercial",
    lastSeen: "21/10/2025",
    inRotation: false,
    squad: "Enterprise"
  },
  {
    id: "member-2",
    name: "Nathalia Anapio",
    email: "consignado@pnlcreditoseguro.com.br",
    role: "Vendedor",
    lastSeen: "16/05/2025",
    inRotation: false,
    squad: "Mid-Market"
  },
  {
    id: "member-3",
    name: "Maria Eduarda",
    email: "operacional.pnl@gmail.com",
    role: "Vendedor",
    lastSeen: "21/10/2025",
    inRotation: false,
    squad: "Enterprise"
  },
  {
    id: "member-4",
    name: "Naftalia",
    email: "operacional2pnl@gmail.com",
    role: "Vendedor",
    lastSeen: "22/09/2025",
    inRotation: true,
    squad: "Enterprise"
  },
  {
    id: "member-5",
    name: "Eliza",
    email: "elizasbduarte@gmail.com",
    role: "Vendedor",
    lastSeen: "09/10/2025",
    inRotation: false,
    squad: "Mid-Market"
  }
];

export const inactiveMembers = [
  {
    id: "inactive-1",
    name: "João Rodrigo - DSO",
    email: "joao.victor+dsopnl@deixeideseroff.com.br",
    leads: 0
  },
  {
    id: "inactive-2",
    name: "Ingrid Nassar",
    email: "ingridnassar@gmail.com",
    leads: 0
  },
  {
    id: "inactive-3",
    name: "Tiago Drumont",
    email: "tiago.dtomaz@gmail.com",
    leads: 0
  }
];

export const teamGoalTemplate = teamMembers.map((member) => ({
  memberId: member.id,
  name: member.name,
  role: member.role,
  goalValue: ""
}));
