---
applyTo: "app/**"
---

# Layouts Next.js

## Responsabilidade do layout

O `layout.tsx` é responsável por distribuir os elementos compartilhados da tela: header, footer, sidebars e qualquer shell visual que se repete entre páginas do mesmo grupo.

Uma `page.tsx` nunca deve conter `<Header />`, `<Footer />` ou qualquer wrapper de estrutura de página — apenas o conteúdo específico daquela rota.

```tsx
// ✅ correto — layout distribui o shell
export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen p-12">
      <Header />
      <main className="flex flex-col flex-1 min-h-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}

// ✅ correto — page só tem o conteúdo da rota
export default function Home() {
  return <Hero />;
}

// ❌ proibido — page não gerencia shell
export default function Home() {
  return (
    <main className="flex flex-col p-12">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
```

## Estrutura de grupos de rota

Use grupos de rota `(nome)` para isolar layouts diferentes sem afetar a URL:

```
app/
├── (pages)/
│   ├── layout.tsx     # shell com Header + Footer para todas as páginas públicas
│   ├── page.tsx       # rota /
│   └── posts/
│       └── page.tsx   # rota /posts
└── (auth)/
    ├── layout.tsx     # shell diferente, sem Header/Footer
    ├── sign-in/
    │   └── page.tsx
    └── sign-up/
        └── page.tsx
```

## Componentes de conteúdo dentro do layout

Componentes de feature que são renderizados como `children` de um layout não devem reimportar Header ou Footer. Eles recebem o espaço disponível entre header e footer e devem preenchê-lo:

```tsx
// ✅ correto — componente de feature ocupa o espaço disponível
export function PostsLayoutView({ ... }: PostsLayoutProps) {
  return (
    <div className="flex flex-col flex-1 gap-10 min-h-0">
      {/* conteúdo da feature */}
    </div>
  );
}

// ❌ proibido — componente de feature não gerencia o shell
export function PostsLayoutView({ ... }: PostsLayoutProps) {
  return (
    <div className="flex flex-col h-screen p-12">
      <Header />
      {/* conteúdo */}
      <Footer />
    </div>
  );
}
```

## Padding de página

O padding global de página (`p-12`) fica no `layout.tsx`. As pages e componentes de feature não repetem esse padding.
