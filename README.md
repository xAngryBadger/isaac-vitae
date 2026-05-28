# Isaac Vitae

Portfolio pessoal de Isaac Nathan da Silva Barbosa -- Engenheiro de Computacao com foco em IA, Cloud e IoT. Site bilíngue (pt/en), dark mode, acessibilidade (fonte para dislexia), exportacao de CV em texto ATS e PDF, sons de interface, animacoes GSAP + Motion e deploy automatico via GitHub Pages.

## O que faz?

O Isaac Vitae e um portfolio web completo que apresenta a trajetoria profissional e academica de Isaac Nathan. O site inclui paginas de apresentacao, experiencia, projetos com case studies, habilidades, galeria, certificacoes, contato e currículo. Oferece exportacao de CV em texto puro (formato ATS-friendly) e PDF gerado via Playwright. Suporta alternancia entre portugues e ingles, dark/light mode, fonte Lexend para dislexia e efeitos sonoros de navegacao via Web Audio API.

## Funcionalidades

- 10 paginas: Home, About, Experience, Projects (com case studies dinamicos), Skills, Gallery, Certificates, CV, Contact, Playground
- Internacionalizacao completa pt/en com toggle no header
- Dark mode / light mode com persistencia em localStorage
- Fonte para dislexia (Lexend) com toggle no header
- Exportacao de CV em texto puro ATS (`.txt`) direto do navegador
- Geracao de CV em PDF via Playwright (`gen-cv-pdfs.mjs`)
- Efeitos sonoros de navegacao (menu open/close, route change) via Web Audio API
- Preloader animado com sessao persistida
- Animacoes GSAP ScrollTrigger + Motion (AnimatePresence) para transicoes de pagina
- Scroll suave via Lenis integrado ao GSAP
- Cursor personalizado (CustomCursor)
- SEO: meta tags Open Graph, Twitter Card, canonical URL, theme-color
- Deploy automatico via GitHub Actions em push para `main`

## Tecnologias

React 19, TypeScript, Vite 8, Tailwind CSS v4, GSAP + ScrollTrigger, Motion (Framer Motion), Lenis, React Router v7, Lottie React, Lucide React, Playwright (geracao de PDF)

## Pre-requisitos

- Node.js 22+
- npm

Para geracao de PDFs do CV:
- Playwright (`npx playwright install chromium`)

## Instalacao

```bash
npm install
```

## Uso

**Desenvolvimento:**

```bash
npm run dev
```

Acesse `http://localhost:3002/isaac-vitae/`

**Gerar PDFs do CV:**

1. Inicie o servidor de desenvolvimento: `npm run dev`
2. Em outro terminal: `node gen-cv-pdfs.mjs`
3. Os PDFs serao salvos em `public/cv/Isaac-Nathan-CV-PT.pdf` e `public/cv/Isaac-Nathan-CV-EN.pdf`

**Build de producao:**

```bash
npm run build
```

## Comandos

| Comando | Descricao |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento na porta 3002 |
| `npm run build` | Build de producao (TypeScript + Vite) |
| `npm run preview` | Preview do build de producao |
| `node gen-cv-pdfs.mjs` | Gera PDFs do CV em PT e EN via Playwright |

## Estrutura

```
isaac-vitae/
├── index.html                    HTML com SEO, OG tags, dark-mode script
├── gen-cv-pdfs.mjs               Script de geracao de PDFs do CV
├── public/
│   └── cv/                       PDFs gerados do CV
├── src/
│   ├── App.tsx                   Rotas, Lenis, GSAP, providers (Language, DarkMode)
│   ├── main.tsx                  Ponto de entrada React
│   ├── index.css                 Estilos globais (Tailwind, dark mode, dislexia)
│   ├── components/
│   │   ├── Nav.tsx                    Navegacao principal
│   │   ├── Footer.tsx                 Rodape
│   │   ├── CustomCursor.tsx           Cursor personalizado
│   │   └── Preloader.tsx             Animacao de carregamento inicial
│   ├── lib/
│   │   ├── LanguageContext.tsx         Provider de i18n (pt/en)
│   │   ├── useDarkMode.tsx            Provider de dark/light mode
│   │   ├── useDyslexiaFont.ts         Toggle de fonte Lexend para dislexia
│   │   ├── useSounds.ts               Sons de interface via Web Audio API
│   │   ├── useAtsPdf.ts               Exportacao de CV em texto ATS
│   │   ├── scramble.ts                Efeito de texto embaralhado
│   │   ├── scroll-anim.ts             Animacoes de scroll
│   │   ├── semester.ts                Utilitario academico
│   │   └── asset.ts                   Helper de assets
│   ├── data/                           Dados de conteudo do portfolio
│   ├── assets/                         Imagens e recursos estaticos
│   └── pages/
│       ├── Home.tsx                    Pagina inicial
│       ├── About.tsx                   Sobre
│       ├── Experience.tsx              Experiencia profissional
│       ├── Projects.tsx                Lista de projetos
│       ├── ProjectCaseStudy.tsx        Case study de projeto individual
│       ├── Skills.tsx                  Habilidades tecnicas
│       ├── Gallery.tsx                 Galeria de imagens
│       ├── Certificates.tsx            Certificacoes
│       ├── CV.tsx                      Curriculo (exportavel)
│       ├── Contact.tsx                 Formulario de contato
│       ├── Playground.tsx              Area experimental
│       └── NotFound.tsx                Pagina 404
└── .github/workflows/deploy.yml       Deploy automatico no GitHub Pages
```

## Arquitetura

O Isaac Vitae e uma SPA com multiplos providers de contexto:

- **App.tsx:** Orquestra rotas (React Router), inicializa Lenis + GSAP ScrollTrigger, envolve a aplicacao com LanguageProvider e DarkModeProvider, e gerencia o preloader com estado de sessao.
- **LanguageContext:** Gerencia idioma (pt/en) com persistencia em localStorage. A funcao `t()` resolve textos bilíngues em qualquer componente.
- **DarkModeProvider:** Alterna dark/light mode com classe CSS no `<html>` e atualiza a meta tag `theme-color`. Default: dark mode.
- **useDyslexiaFont:** Altera as variaveis CSS `--font-sans` e `--font-mono` para Lexend quando ativado.
- **useSounds:** Web Audio API com osciladores (sine) e noise buffers para efeitos sonoros de menu e navegacao.
- **useAtsPdf:** Gera um arquivo `.txt` estruturado com secoes do CV (perfil, experiencia, projetos, stack, formacao, certificacoes, idiomas) para compatibilidade com sistemas ATS.
- **gen-cv-pdfs.mjs:** Script Playwright que abre a pagina `/cv`, extrai o HTML do elemento `.cv-sheet`, aplica estilos inline e gera PDFs A4 para PT e EN.

Fluxo de dados: `Rotas (React Router) -> Providers (Language, DarkMode) -> Pagina -> i18n + dados tipados -> Renderizacao com animacoes (GSAP/Motion)`.

## Configuracao

| Chave localStorage | Descricao |
|--------------------|-----------|
| `lang` | Idioma selecionado (`pt` ou `en`) |
| `dark-mode-enabled` | Dark mode ativado (`true` ou `false`) |
| `dyslexia-font-enabled` | Fonte Lexend ativada (`true` ou `false`) |
| `isaac-portfolio-sounds` | Sons de interface (`on` ou `off`) |
| `preloader-done` | Preloader ja exibido nesta sessao |

O `index.html` inclui um script inline que aplica dark mode antes da hidratacao React, evitando flash de conteudo claro.

## Testes

O projeto nao possui suíte de testes unitarios automatizados. O script `gen-cv-pdfs.mjs` funciona como teste de integracao visual: abre o site, aguarda o elemento `.cv-sheet` e verifica a geracao de PDF. Playwright esta listado como devDependency.

## Troubleshooting

| Problema | Solucao |
|----------|---------|
| Flash branco ao carregar | O script inline no `index.html` deve aplicar dark mode antes da hidratacao; verifique se `localStorage` nao esta limpo |
| PDFs do CV nao geram | Certifique-se de que o servidor dev esta rodando em `localhost:3002` e Playwright esta instalado (`npx playwright install chromium`) |
| Sons nao tocam | Ative os sons no toggle do header; verifique se o navegador permite AudioContext (alguns bloqueiam ate interacao do usuario) |
| Fonte Lexend nao aplica | Verifique se a fonte esta carregada no CSS e se o toggle de dislexia esta ativo no header |
| Pagina 404 no GitHub Pages | Configure SPA fallback: o `.nojekyll` esta na raiz; para rotas dinamicas, use hash router ou configure o fallback no workflow |

## Contribuindo

1. Fork o repositorio em [github.com/xAngryBadger/isaac-vitae](https://github.com/xAngryBadger/isaac-vitae)
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit: `git commit -m "Adiciona minha-feature"`
4. Push: `git push origin minha-feature`
5. Abra um Pull Request

## Licenca

MIT -- Copyright (c) 2025 Isaac Nathan da Silva Barbosa. Veja [LICENSE](./LICENSE).
