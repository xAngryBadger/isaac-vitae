# 🛒 Carrinho de Mudanças - Isaac Vitae

## ✅ Já Implementado
- [x] Dark mode com preto suave (#0a0a0a) + branco luminoso (#fafafa)
- [x] Toggle 🌙/☀️ no nav
- [x] Tag filter (LessWrong style)
- [x] Redesigned project cards
- [x] Dyslexia font toggle (Lexend)
- [x] Reduzido accent color em ~75%

## 📝 No Carrinho (Aguardando Decisão)
1. **Preto mais suave** - Mudado de #000000 para #0a0a0a ✅
2. **Realçar texto** - Adicionado text-shadow sutil ✅
3. **Correção de bugs dourados** - CSS dark mode sobrescreve tudo ✅

## 🔧 Próximos Passos (Aguardando Input)
- [ ] Revisar case studies de cada projeto (harpia, srf, flora, fennec, inovesa)
- [ ] Adicionar screenshots reais dos projetos (usuário precisa providenciar)
- [ ] Decidir se mantém esquema quente (creme) ou muda pra frio (cinza/azulado)
- [ ] Adicionar mais elementos LessWrong/Gwern?
  - [ ] Navegação lateral densa (Gwern)
  - [ ] Inline annotations/footnotes (Gwern)
  - [ ] Karma/upvote system (LessWrong) - faz sentido?
- [ ] Melhorar loading de imagens (lazy loading, blurhash?)
- [ ] Adicionar search no site (Gwern style)
- [ ] Dark mode automático (detect system preference)

## 🎨 Cores Atuais Dark Mode
```css
--color-bg: #0a0a0a; /* Preto suave (não agressivo) */
--color-text: #fafafa; /* Branco luminoso com realce */
--color-text-2: #e5e5e5;
--color-text-3: #cccccc;
--color-border: #2a2a2a;
--color-accent: #ffffff; /* Neon white */
```

**Mudanças Recentes:**
- ✅ Preto de #000000 → #0a0a0a (mais suave)
- ✅ Texto com text-shadow sutil pra melhor contraste
- ✅ Títulos com glow mais forte (#ffffff)
- ✅ Corrige bugs de setas douradas e micro detalhes


## 💡 Ideias Adicionais
- "Glow" suave no texto (text-shadow) pra melhor contraste
- Borda mais clara nos cards quando hover
- Manter consistência entre light/dark mode

---
**Status:** Dark mode funcional, bugs de cor corrigidos, texto realçado.
**Próximo:** Aguardando user input sobre o que implementar depois.
