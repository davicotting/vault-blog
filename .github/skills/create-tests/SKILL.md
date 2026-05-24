---
name: create-tests
description: "Cria testes unitários para feature components, hooks, serviços e utilitários do projeto. Use quando quiser gerar testes — pergunta o que testar, lê o arquivo-alvo e gera o .spec.tsx com o padrão Vitest + Testing Library do projeto."
argument-hint: "Arquivo ou componente a testar (ex: components/header)"
---

# Create Tests

Cria o arquivo de teste unitário espelhando a estrutura de `tests/`.

## Procedimento

### 1. Coletar informações

Pergunte ao usuário (use `ask-questions`):

- **Qual arquivo testar** (caminho relativo, ex: `components/header/controller/header.controller.tsx`)
- **Tem dependências externas a mockar?** (ex: `next/navigation`, serviços, context)

### 2. Ler o arquivo-alvo

Leia o arquivo informado para entender:
- O que o componente/função renderiza ou retorna
- Quais props recebe
- Quais interações do usuário existem (clicks, inputs)
- Quais dependências externas usa

### 3. Derivar o caminho do teste

Espelhe o caminho do arquivo em `tests/`:

```
components/header/controller/header.controller.tsx
→ tests/components/header/controller/header.controller.spec.tsx

app/hooks/useAuth.ts
→ tests/app/hooks/useAuth.spec.ts
```

### 4. Gerar o teste

Use o template em [./assets/component.spec.template.tsx](./assets/component.spec.template.tsx) como base.

Regras obrigatórias:
- `describe("NomeDoSímbolo | (Unit)", () => { ... })`
- `it("should <comportamento esperado>", ...)`
- Imports sempre com `@/` — nunca relativos
- `vi.mock()` para dependências externas, declarado antes do `describe`
- Preferir `getByRole` e `getByText` a `getByTestId`
- Cobrir: renderização básica, cada prop/estado distinto, interações do usuário

### 5. Confirmar

Exiba o caminho do arquivo criado.

## Restrições

- NÃO edite o arquivo-alvo
- NÃO escreva testes de integração
- NÃO adicione comentários no código de teste
- NÃO teste arquivos em `components/ui/` — são primitivos sem lógica
