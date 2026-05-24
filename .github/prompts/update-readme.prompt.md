---
description: "Atualiza o README lendo a arquitetura e o package.json do projeto"
agent: "agent"
---

Atualize o [README.md](../../README.md) do projeto seguindo as instruções de modelo em [readme.instructions.md](../instructions/readme.instructions.md).

Para isso:

1. Leia [package.json](../../package.json) e extraia:
   - Todas as `dependencies` e `devDependencies` com suas versões
   - Todos os `scripts` disponíveis

2. Leia [architecture.instructions.md](../instructions/architecture.instructions.md) e extraia:
   - Estrutura de pastas e convenções
   - Padrão Controller/View
   - Regras de path aliases

3. Leia [stack.instructions.md](../instructions/stack.instructions.md) e extraia:
   - Package manager e tecnologias da stack

4. Leia [create-pr.prompt.md](../prompts/create-pr.prompt.md) e extraia:
   - Convenção de branches e commits
   - Processo de criação de PR

5. Liste todos os arquivos em `.github/workflows/` e leia cada um para extrair:
   - Jobs, condições de execução e estratégias de cache

6. Verifique a existência de arquivos de customização do Copilot e leia o frontmatter de cada um:
   - `.github/instructions/*.instructions.md` → extraia `applyTo` e `description`
   - `.github/prompts/*.prompt.md` → extraia `name` e `description`
   - `.github/agents/*.agent.md` → extraia `name`, `description` e `tools`
   - `.github/skills/*/SKILL.md` → extraia `name` e `description`
   - `.vscode/mcp.json` ou `.copilot/mcp.json` → extraia servidores e descrições

7. Com todas as informações coletadas, reescreva o README.md seguindo exatamente a estrutura definida em [readme.instructions.md](../instructions/readme.instructions.md).

Regras obrigatórias:
- Derive Tech Stack e Scripts exclusivamente do `package.json` — nunca invente libs ou scripts
- Derive CI/CD exclusivamente dos arquivos em `.github/workflows/`
- Derive arquitetura exclusivamente de `architecture.instructions.md`
- Não adicione comentários ao código
- Não preserve conteúdo desatualizado — reescreva do zero com base nas fontes lidas
