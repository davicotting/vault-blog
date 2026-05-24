---
applyTo: "**"
---

# Stack

## Package Manager

Sempre use `npm`. Nunca use `pnpm` ou `yarn`.

## Tecnologias

- **Framework**: Next.js 16 com App Router
- **Estilização**: Tailwind CSS v4
- **Linguagem**: TypeScript
- **Componentes primitivos**: Base UI (`@base-ui/react`)
- **Ícones**: Lucide React
- **Formulários**: React Hook Form + Zod
- **Temas**: next-themes
- **Variantes CSS**: class-variance-authority + tailwind-merge
- **Testes**: Vitest + Testing Library
- **Git hooks**: Husky

## Componentes Shadcn

Se um componente do Shadcn for necessário e não existir em `components/ui/`, instale-o antes de usá-lo:

```bash
npx shadcn@latest add <nome-do-componente>
```
