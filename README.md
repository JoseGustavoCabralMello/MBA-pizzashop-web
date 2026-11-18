# pizza.shop — Painel do Parceiro

Front-end do painel administrativo **pizza.shop**, voltado para gerentes de pizzaria/restaurante.

Com este app é possível:

- Cadastrar um novo estabelecimento e fazer login (autenticação por e-mail)
- Acompanhar métricas de vendas no dashboard (receita, pedidos do dia/mês, cancelamentos, gráficos)
- Listar, filtrar e gerenciar o ciclo de vida dos pedidos (aprovar → preparo → entrega → entregue / cancelar)
- Atualizar o perfil da loja

> Este repositório é apenas a interface web. Em desenvolvimento ele consome uma API backend via `VITE_API_URL`. Em modo de teste, as chamadas são mockadas com MSW.

## Stack

- React 18 + TypeScript
- Vite
- React Router
- TanStack Query + Axios
- React Hook Form + Zod
- Tailwind CSS + shadcn/ui
- Recharts
- Vitest + Testing Library
- Playwright (E2E)
- MSW (mocks da API em modo `test`)

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: LTS)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

## Como rodar o projeto

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd MBA-pizzashop-web
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` (ou `.env`) na raiz do projeto:

```env
VITE_API_URL="http://localhost:3333"
VITE_ENABLE_API_DELAY=false
```

| Variável | Descrição |
| --- | --- |
| `VITE_API_URL` | URL base da API backend |
| `VITE_ENABLE_API_DELAY` | Se `true`, adiciona um delay artificial nas requisições (útil para simular latência) |

> Em modo de desenvolvimento (`pnpm dev`), a API real precisa estar rodando e acessível em `VITE_API_URL`.

### 4. Inicie o servidor de desenvolvimento

```bash
pnpm dev
```

A aplicação estará disponível em `http://localhost:5173` (porta padrão do Vite).

## Rodar com API mockada (sem backend)

Para desenvolver/testar sem a API real, use o modo `test`, que ativa o MSW:

```bash
pnpm dev:test
```

Isso sobe o Vite na porta `50789` com as variáveis de `.env.test` e mocks da API.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `pnpm dev` | Sobe o app em desenvolvimento |
| `pnpm dev:test` | Sobe o app em modo test (com MSW) na porta `50789` |
| `pnpm build` | Gera o build de produção |
| `pnpm preview` | Visualiza o build de produção |
| `pnpm lint` | Executa o ESLint |
| `pnpm test` | Executa os testes unitários (Vitest) |

### Testes E2E (Playwright)

```bash
# Instalar browsers do Playwright (primeira vez)
pnpm exec playwright install

# Rodar os testes E2E
pnpm exec playwright test
```

Os testes E2E sobem automaticamente o servidor com `pnpm dev:test`.

## Rotas principais

| Rota | Descrição |
| --- | --- |
| `/sign-in` | Login |
| `/sign-up` | Cadastro do estabelecimento |
| `/` | Dashboard com métricas |
| `/orders` | Gestão de pedidos |

## Estrutura do projeto

```text
src/
  api/           # Funções de chamada à API + mocks (MSW)
  components/    # Componentes compartilhados e UI
  lib/           # Axios, React Query e utilitários
  pages/
    _layouts/    # Layouts (app autenticado e auth)
    app/         # Dashboard e pedidos
    auth/        # Sign-in e sign-up
  app.tsx
  routes.tsx
  main.tsx
```
