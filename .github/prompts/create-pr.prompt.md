---
description: "Cria um Pull Request seguindo o git flow do projeto: separa commits atômicos, faz push e abre o PR via gh CLI com corpo em português"
agent: "agent"
---

Crie um Pull Request seguindo o git flow deste projeto.

## 1. Verificar estado atual

```bash
git status
git branch --show-current
git log origin/develop..HEAD --oneline
```

## 2. Garantir branch de trabalho

Se a branch atual for `main` ou `develop`:
- Pergunte ao usuário: **"Você deveria estar nessa branch para essa tarefa?"**
- Se **sim**: continue sem criar nova branch
- Se **não**:
  1. Analise as mudanças com `git diff` e `git status` para entender o contexto do que foi feito
  2. Sugira um nome de branch baseado nas mudanças (ex: `feat/add-post-filter`, `fix/header-redirect`)
  3. Confirme com o usuário antes de criar
  4. Crie e mude para a branch a partir da branch atual:
     ```bash
     git checkout -b <branch-sugerida>
     ```

Se já estiver em uma branch de trabalho (`feat/`, `fix/`, `refactor/`, etc.), continue sem interrupção.

## 3. Separar commits atômicos

Antes de criar o PR, organize as mudanças em commits lógicos — **um commit por mudança independente**.

Regras de commit:
- Formato: `feat: ...`, `fix: ...`, `refactor: ...`, `test: ...`, `docs: ...` — sem escopo entre parênteses
- Nunca inclua `Co-Authored-By` ou atribuição de IA
- Múltiplos commits por PR são aceitos quando as mudanças são distintas
- O pre-commit do Husky executa os testes automaticamente — commits só passam se os testes passarem

## 4. Push e criação do PR

```bash
git push -u origin <branch>
gh pr create --title "..." --base develop --head <branch> --body "..."
```

- Branch base padrão: `develop` — use `main` apenas se explicitamente solicitado
- Branch naming: `feat/`, `fix/`, `refactor/`, etc.

## 5. Corpo do PR

Escrever em **português**, incluindo obrigatoriamente:
- O que foi feito
- Quais arquivos foram alterados e por quê
- Observações relevantes de comportamento
