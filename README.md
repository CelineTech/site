# Celine Tech — Site Institucional

> Site institucional da Celine Tech, agência especializada em desenvolvimento de sistemas, automação de processos e inteligência artificial.

<br />

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=flat-square&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?style=flat-square&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel&logoColor=white)

---

## 📌 Sobre o projeto

A **Celine Tech** é uma agência de tecnologia focada em atender pequenas e médias empresas, MEIs e startups que precisam de soluções digitais eficientes e acessíveis.

Este repositório contém o **site institucional completo** da agência, desenvolvido com Next.js 14 (App Router), Tailwind CSS e Framer Motion. O site apresenta os serviços da empresa, cases reais de projetos entregues, depoimentos de clientes e canais de contato — tudo com uma identidade visual elegante, sofisticada e alinhada à marca.

---

## 📄 Páginas

### `/` — Landing Page

Página principal com as seguintes seções:

| Seção | Descrição |
|---|---|
| **Header** | Navegação sticky com blur no scroll e menu mobile animado |
| **Hero** | Headline principal, subheadline e CTAs de conversão |
| **Serviços** | Cards com os 3 serviços: Desenvolvimento, Automação e IA |
| **Cases** | 4 cases reais no formato Antes → Depois → Resultado |
| **Por que a Celine Tech** | 3 diferenciais da agência |
| **Depoimentos** | Conversas estilo WhatsApp com clientes reais |
| **Sobre** | Texto institucional, missão e estatísticas |
| **CTA Final** | Seção de conversão com links para WhatsApp e Calendly |
| **Footer** | Logo, navegação, contato e redes sociais |

### `/links` — Linktree

Página minimalista com os 3 principais canais de acesso:

- 📅 Agendar uma conversa (Calendly)
- 💬 Falar pelo WhatsApp
- 🌐 Conhecer o site

---

## 🛠️ Stack

| Tecnologia | Uso |
|---|---|
| ⚡ **Next.js 14** | Framework React com App Router e SSG |
| 🔷 **TypeScript** | Tipagem estática em todo o projeto |
| 🎨 **Tailwind CSS** | Estilização utilitária com tema customizado |
| 🎞️ **Framer Motion** | Animações de entrada no scroll e microinterações |
| 🖋️ **EB Garamond** | Fonte serifada para títulos (via Google Fonts) |
| 📝 **Trebuchet MS** | Fonte sem serifa para textos e labels |
| 🖼️ **next/og** | Geração dinâmica da imagem Open Graph (edge runtime) |

---

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/site.git
cd site

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em: [http://localhost:3000](http://localhost:3000)

### Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Inicia o build de produção localmente
npm run lint     # Verifica erros de lint
```

---

## 📁 Estrutura de pastas

```
/
├── app/
│   ├── globals.css              # Estilos globais e Tailwind
│   ├── layout.tsx               # Layout raiz com fonte e meta tags SEO/OG
│   ├── page.tsx                 # Landing page (/)
│   ├── icon.svg                 # Favicon SVG da Celine Tech
│   ├── opengraph-image.tsx      # Imagem Open Graph gerada dinamicamente
│   └── links/
│       └── page.tsx             # Página linktree (/links)
│
├── components/
│   ├── Logo.tsx                 # Logo SVG inline (ícone crescente + nós de circuito)
│   ├── AnimateInView.tsx        # Wrapper de animação no scroll (Framer Motion)
│   ├── Header.tsx               # Navegação sticky com blur e menu mobile
│   ├── Hero.tsx                 # Seção hero com dot grid e anéis flutuantes
│   ├── Services.tsx             # Cards dos 3 serviços
│   ├── Cases.tsx                # Cases reais: Antes → Depois → Resultado
│   ├── WhyCeline.tsx            # 3 diferenciais da agência
│   ├── Testimonials.tsx         # Depoimentos estilo chat WhatsApp
│   ├── About.tsx                # Sobre a empresa + missão
│   ├── FinalCTA.tsx             # Seção de conversão final
│   ├── Footer.tsx               # Rodapé com links e contato
│   └── LinksContent.tsx         # Conteúdo da página /links
│
├── next.config.mjs              # Configuração do Next.js
├── tailwind.config.ts           # Tema Tailwind: cores ct-* e fontes
├── tsconfig.json                # Configuração TypeScript
├── postcss.config.mjs           # PostCSS (Tailwind + Autoprefixer)
└── package.json
```

---

## ☁️ Deploy

O deploy é feito automaticamente via **[Vercel](https://vercel.com)**.

Cada push na branch `main` dispara um novo deploy de produção. Pull requests geram automaticamente um **preview URL** para revisão antes de ir ao ar.

### Configuração de variáveis

Antes do primeiro deploy, atualize a variável `siteUrl` em `app/layout.tsx` com o domínio real:

```ts
// app/layout.tsx
const siteUrl = 'https://celinetech.com.br' // ← atualizar aqui
```

---

## 🎨 Identidade Visual

### Paleta de cores

| Nome | Hex | Uso |
|---|---|---|
| **Preto** | `#0E0B0D` | Fundo principal |
| **Preto Quente** | `#1A1118` | Fundo de seções alternadas |
| **Preto Rosê** | `#160D10` | Fundo de seções de destaque |
| **Rosê Escuro** | `#C06070` | Bordas, ícones, CTAs primários |
| **Rosê Médio** | `#D4848A` | Labels, textos de destaque |
| **Rosê Claro** | `#EDD0D2` | Textos secundários |
| **Off-white** | `#FDF5F5` | Textos principais |

### Fontes

| Fonte | Tipo | Uso |
|---|---|---|
| **EB Garamond** | Serifada | Títulos e headings (`font-serif`) |
| **Trebuchet MS** | Sem serifa | Textos, labels e botões (`font-sans`) |

---

---

<p align="center">Desenvolvido com ♥ pela <strong>Celine Tech</strong></p>
