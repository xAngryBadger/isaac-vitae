# 📋 PLANO DE AÇÃO - CORREÇÕES CRÍTICAS

## 🔴 PROBLEMA 1: Tooltips (Annotations) Quebradas
**Causa**: `annotateText()` tenta injetar `<InlineAnnotation>` no meio do texto, mas:
- InlineAnnotation agora usa `onMouseEnter={() => setShow(false)}` (linha 34)
- Isso impede o hover de mostrar o tooltip
- Precisa ser `onMouseEnter={() => setShow(true)}`

**Solução**:
```tsx
// InlineAnnotation.tsx linha 34
onMouseEnter={() => setShow(true)}  // antes: setShow(false)
```

## 🔴 PROBLEMA 2: Mix de Fontes
**Causa**: 
- `var(--font-serif)` = Playfair Display (títulos)
- `var(--font-mono)` = Space Mono (código, tags, labels)
- `var(--font-sans)` = Inter (texto normal)

**Solução**: Padronizar
- Títulos: `font-serif` (manter)
- Texto: `font-sans` (mudar de font-mono)
- Tags/labels: `font-mono` (manter)
- Código: `font-mono` (manter)

## 🔴 PROBLEMA 3: SVGs no Dark Mode
**Causa**: Ícones com `color: var(--color-text-3)` que é `#8a9b8e` (claro)
No dark mode: `--color-text-3-dark: #cccccc` (muito claro, some)

**Solução**:
```css
html.dark-mode nav svg,
html.dark-mode header svg {
  color: #d0d0d0 !important;  /* antes: #e0e0e0 (muito claro) */
}
```

## 🔴 PROBLEMA 4: Excesso de Dourado (#a8611a)
**Causa**: `--color-accent: #a8611a` aparece em:
- Links
- Hover states
- Badges
- Borders

**Solução**: Mudar para verde sagem (mais sóbrio):
```css
--color-accent: #456a4b;  /* sage green */
--color-accent-light: #6a8e70;
--color-accent-dark: #2d4a32;
```

## 🔴 PROBLEMA 5: Destaques Importantes
**Causa**: Datas e instituições usam `color: var(--color-text-3)` que é fraco

**Solução**: Criar classe especial:
```css
.highlight-d {
  color: var(--color-text);
  font-weight: 600;
}
```

---

## 📝 ORDEM DE EXECUÇÃO

1. **InlineAnnotation** - Corrigir `onMouseEnter` para `setShow(true)`
2. **CSS Variables** - Mudar accent de dourado para verde
3. **Dark mode SVG** - Ajustar contraste
4. **Skills.tsx** - Mudar `font-mono` para `font-sans` no texto normal
5. **Projects.tsx** - Garantir contraste correto
6. **Build + Test**

---

## 🎯 ESTADO FINAL ESPERADO

- ✅ Tooltips funcionam (clica = mostra, clica = esconde)
- ✅ Fontes consistentes (serif=s títulos, sans=corpo, mono=código/tags)
- ✅ SVGs visíveis em ambos modos
- ✅ Accent verde (não dourado)
- ✅ Destaques importantes legíveis
