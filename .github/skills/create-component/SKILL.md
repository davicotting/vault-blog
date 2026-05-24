---
name: create-component
description: "Cria um feature component completo seguindo o padrão Controller/View do projeto. Use quando quiser scaffoldar um novo componente — gera os 4 arquivos (controller, view, types, index) nos caminhos corretos e pergunta o que precisa antes de criar."
argument-hint: "Nome do componente em PascalCase (ex: PostCard)"
---

# Create Component

Cria a estrutura completa de um feature component em `components/[feature]/`.

## Procedimento

### 1. Coletar informações

Pergunte ao usuário (use `ask-questions`):

- **Nome do componente** em PascalCase (ex: `PostCard`, `UserProfile`)
- **Tem props?** Se sim, quais — nome e tipo de cada uma
- **Consome serviço, hook ou context?** Se sim, qual

### 2. Derivar nomes

A partir do PascalCase informado:
- `ComponentName` → PascalCase (ex: `PostCard`)
- `component-name` → kebab-case (ex: `post-card`) — nome da pasta e dos arquivos

### 3. Gerar os arquivos

Use os templates em `./assets/` substituindo os placeholders:
- `{{ComponentName}}` → PascalCase do componente
- `{{component-name}}` → kebab-case do componente

Crie exatamente estes 4 arquivos:

```
components/
└── {{component-name}}/
    ├── index.tsx
    ├── types.ts
    ├── controller/
    │   └── {{component-name}}.controller.tsx
    └── view/
        └── {{component-name}}.view.tsx
```

Templates:
- Controller: [controller.template.tsx](./assets/controller.template.tsx)
- View: [view.template.tsx](./assets/view.template.tsx)
- Index: [index.template.tsx](./assets/index.template.tsx)
- Types: [types.template.ts](./assets/types.template.ts)

### 4. Adaptar ao contexto

- Se o usuário informou props, popule a interface em `types.ts` com os tipos corretos
- Se consome serviço ou hook, adicione o import e a chamada no controller
- Se não há props, deixe a interface vazia e remova o spread de props da View

### 5. Confirmar

Liste os arquivos criados com seus caminhos completos.

## Restrições

- Nunca use `const arrow` para componentes ou funções exportadas — sempre `function`
- Nunca use imports relativos — sempre `@/`
- Nunca adicione comentários no código
- O Controller nunca renderiza HTML diretamente — sempre delega para a View
- A View nunca importa serviços, hooks ou context — recebe tudo via props
