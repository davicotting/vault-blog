---
applyTo: "components/**,app/**"
---

# Design System

## Primitivos disponíveis em `components/ui/`

Antes de criar qualquer elemento novo, verifique se já existe um primitivo adequado em `components/ui/`:

| Arquivo | Exports disponíveis |
|---|---|
| `avatar.tsx` | `Avatar`, `AvatarImage`, `AvatarBadge` |
| `badge.tsx` | `Badge` |
| `button.tsx` | `Button` (variantes: `default`, `outline`, `secondary`, `ghost`, `destructive`, `link`) |
| `carousel.tsx` | `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselNext`, `CarouselPrevious` |
| `dropdown-menu.tsx` | `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem` |
| `input.tsx` | `Input` |
| `kbd.tsx` | `Kbd` |
| `separator.tsx` | `Separator` |
| `tabs.tsx` | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` |

Só crie um componente novo em `components/ui/` se nenhum primitivo existente atender. Nunca recrie com `<div>` algo que já existe como primitivo (ex: botão, badge, separador).

## Espaçamento

Use a escala de espaçamento consistente com o restante do projeto:

| Contexto | Classe |
|---|---|
| Padding de página | `p-12` |
| Gap entre seções principais | `gap-10` |
| Gap entre elementos de uma seção | `gap-6` |
| Gap entre itens de uma barra de controles | `gap-4` |
| Gap interno de um componente | `gap-3` |
| Gap entre itens de uma lista inline | `gap-2` |
| Gap entre elementos muito próximos | `gap-1` / `gap-1.5` |

## Tipografia

| Uso | Classes |
|---|---|
| Título de seção | `text-2xl tracking-tight` |
| Título de subseção / cabeçalho de componente | `text-xl font-semibold tracking-tight` |
| Título de card grande | `text-3xl font-semibold leading-snug` |
| Label / meta / categoria | `text-xs font-mono uppercase tracking-widest text-muted-foreground` |
| Texto secundário | `text-sm text-muted-foreground` |
| Label de ação pequena | `text-xs text-muted-foreground` |

Nunca use valores de cor hardcoded. Prefira sempre `text-foreground`, `text-muted-foreground`, `text-primary`, `bg-background`, `bg-muted`.

## Cards e superfícies

- Bordas arredondadas de card: `rounded-2xl`
- Bordas arredondadas de elemento interno: `rounded-lg`
- Bordas arredondadas de imagem pequena: `rounded-md`
- Cards com imagem de fundo: `overflow-hidden` no container + `backgroundSize: cover, backgroundPosition: center` via `style`
- Overlay de gradiente sobre imagem: `bg-linear-to-t from-black/80 via-black/30 to-black/20`

## Interatividade

- Hover em elementos clicáveis simples: `hover:opacity-75 cursor-pointer`
- Hover em cards com conteúdo interno: `group` no container + `group-hover:bg-muted` no alvo interno
- Transições: `transition-colors` para mudanças de cor

## Layout flex

- Elemento que não deve encolher: `shrink-0`
- Elemento que deve preencher o espaço disponível: `flex-1`
- Filho flex que precisa de scroll ou `overflow`: `flex-1 min-h-0`

## Nomenclatura de pastas e arquivos

- Pasta do componente: `kebab-case` → `activity-header/`, `carousel-post/`
- Arquivo de controller: `[nome].controller.tsx` → `activity-header.controller.tsx`
- Arquivo de view: `[nome].view.tsx` → `activity-header.view.tsx`
- Arquivo de tipos: `types.ts`
- Ponto de export: `index.tsx`

## Quando extrair um componente

Se um bloco de JSX se repete em dois ou mais lugares com a mesma estrutura, extraia-o como componente — mesmo que pequeno. Antes de criar, cheque se um primitivo de `components/ui/` já resolve.

Padrões que indicam necessidade de extração:

- Mesmo conjunto de classes repetido em múltiplos arquivos
- Bloco de JSX com mais de ~5 linhas copiado em mais de um lugar
- Lógica de mapeamento de lista que aparece em mais de um componente
- Estrutura de "label + valor" ou "ícone + texto" reusada em múltiplos contextos

Ao identificar repetição, sinalize ao usuário e sugira o nome do componente antes de implementar.
