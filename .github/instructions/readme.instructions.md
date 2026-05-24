---
applyTo: "README.md"
---

# Modelo de README

O README deve seguir exatamente esta estrutura e ordem de seções. Nunca omita seções, nunca reordene.

## Estrutura obrigatória

```
# <Nome do projeto>

<Descrição curta — 1 a 2 frases sobre o que o projeto é e faz.>

## Concept

<Parágrafo explicando o propósito do projeto, o problema que resolve e o que o diferencia. Mencione padrões arquiteturais relevantes.>

## Tech Stack

Tabela com duas colunas: Category | Technology.
Linkar cada tecnologia para sua documentação oficial.
Agrupar por responsabilidade: Framework, Language, Styling, UI Primitives, Icons, Forms, Data Fetching, State Management, Theming, CSS Variants, Environment, Testing, Git Hooks.
Incluir apenas o que estiver no package.json.

## Getting Started

Pré-requisitos e comandos mínimos para rodar o projeto localmente.
Sempre incluir: npm install + npm run dev + URL de acesso.

## Available Scripts

Tabela com duas colunas: Script | Description.
Derivar diretamente da chave "scripts" do package.json — nunca inventar scripts que não existam.

## Project Structure

Árvore de pastas simplificada com comentários inline explicando o propósito de cada diretório.
Refletir a arquitetura real do projeto.

## Architecture

Explicar o padrão arquitetural principal (ex: Controller/View).
Descrever brevemente o papel de cada camada.
Mencionar a regra de path aliases.

## Testing

Descrever onde ficam os testes, sufixo dos arquivos e como executar.
Mencionar o pre-commit hook do Husky se existir.
Se houver mutation testing (Stryker), incluir subseção dedicada.

## CI/CD

Se existir .github/workflows/, descrever o pipeline:
- Listar os jobs e suas condições de execução
- Incluir diagrama ASCII mostrando a ordem dos jobs
- Descrever a estratégia de cache (npm, Stryker incremental, etc.)

## Copilot Customizations

Se existir qualquer arquivo de customização do Copilot no projeto, listar em tabelas separadas por categoria.
Se uma categoria não tiver arquivos, omitir a tabela (não exibir "— nenhum").

Categorias e colunas:
- **Instructions** (`.github/instructions/*.instructions.md`) → Arquivo | applyTo | Descrição
- **Prompts** (`.github/prompts/*.prompt.md`) → Arquivo | Descrição
- **Agentes** (`.github/agents/*.agent.md`) → Arquivo | Descrição | Tools
- **Skills** (`.github/skills/*/SKILL.md`) → Nome | Descrição
- **MCPs** (`.vscode/mcp.json`, `.copilot/mcp.json`) → Servidor | Descrição

## Git Flow

Descrever branches, convenção de commits e processo de PR.
```

## Regras de conteúdo

- **Tech Stack**: derivar do `package.json`. Se uma lib não estiver lá, não incluir.
- **Scripts**: derivar da chave `"scripts"` do `package.json`. Nunca inventar.
- **CI/CD**: derivar dos arquivos em `.github/workflows/`. Se não existir, omitir a seção.
- **Arquitetura**: derivar dos arquivos em `.github/instructions/architecture.instructions.md`.
- Nunca usar conteúdo genérico de placeholder.
- Todos os links de tecnologias devem apontar para a documentação oficial.
