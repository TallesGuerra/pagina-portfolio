# Prompt — Gerar Mockup SVG de App Android

Use este prompt para pedir a um LLM (Claude, ChatGPT, etc.) que gere um mockup SVG de telemóvel para qualquer app Android.

---

## Prompt base

```
Cria um mockup SVG de telemóvel Android mostrando o ecrã principal da app "[NOME DA APP]".

## Especificações técnicas do SVG

- viewBox: 200 × 410
- Phone shell: rect x=2 y=2 width=196 height=406 rx=28 fill="#111118"
- Screen: rect x=10 y=10 width=180 height=390 rx=20
- Dynamic island: rect x=74 y=15 width=52 height=12 rx=6 fill="#111118"
- Todo o conteúdo dentro de <g clip-path="url(#screenClip)"> para respeitar os cantos arredondados
- Status bar: hora "9:41" à esquerda (y=35), ícones de sinal à direita
- Home bar: rect x=76 y=393 width=48 height=3 rx=1.5 fill="rgba(255,255,255,0.18)"

## Tema visual

[ESCOLHE UM:]

### Tema escuro (Material 3 Dark)
- Screen bg: #121218
- Card/surface bg: #1E1B2E
- Progress bar track: #2A2535
- Primary color: #BB86FC (roxo Material 3)
- Texto principal: white
- Texto secundário: rgba(255,255,255,0.4)
- Dividers: rgba(255,255,255,0.08)

### Tema claro (Material 3 Light)
- Screen bg: gradiente vertical de [COR_TOPO] para [COR_BASE]
- Card/surface bg: rgba(255,255,255,0.92)
- Texto principal: #1a1714
- Texto secundário: rgba(26,23,20,0.5)

## Ecrã a mostrar

Ecrã: [NOME DO ECRÃ — ex: "Today", "Dashboard", "Home"]

Conteúdo:
- Cabeçalho: [ex: saudação "Bom dia, [Nome]" + data]
- Elemento de progresso: [ex: barra de progresso "3 de 5 concluídos" / stat cards / etc.]
- Label de secção: [ex: "HOJE" em caps, pequeno, muted]
- Lista de items (4–5 cards), cada um com:
  - Barra lateral colorida à esquerda (4px width) — cor por categoria
  - Título do item
  - Subtítulo ou metadata (ex: streak "🔥 N dias", badge, data)
  - Estado: concluído (check preenchido na cor da categoria + texto riscado + opacity 0.38) OU pendente (círculo outline na cor da categoria + texto normal)
- Bottom navigation com 4 items, o primeiro activo em [COR_PRIMARY]

## Categorias e cores dos cards

| Item | Cor da categoria | Estado |
|------|-----------------|--------|
| [item 1] | #81C784 (verde) | concluído |
| [item 2] | #64B5F6 (azul) | concluído |
| [item 3] | #FFB74D (laranja) | concluído |
| [item 4] | #BB86FC (roxo) | pendente |
| [item 5] | #4DD0E1 (teal) | pendente |

(Podes alterar as cores e estados conforme a app)

## Bottom navigation

4 items igualmente espaçados (x ≈ 35, 75, 118, 161):
- Item activo: highlight pill rgba(PRIMARY,0.18) atrás do ícone + label na cor primary + font-weight="700"
- Items inactivos: fill="rgba(255,255,255,0.4)"

Items: [ÍCONE_EMOJI Nome, ÍCONE_EMOJI Nome, ÍCONE_EMOJI Nome, ÍCONE_EMOJI Nome]

## Regras de layout

- Padding horizontal: 16px (cards de x=16 a x=184, width=168)
- Espaço entre cards: 5px
- Altura de cada card: 37px
- Primeiro card começa em y=113
- Bottom nav começa em y=330
- Usa font-family="sans-serif" em todo o texto
- Não uses imagens externas, apenas formas SVG e texto/emoji
- Devolve apenas o código SVG, sem markdown à volta
```

---

## Como usar

1. Copia o prompt acima
2. Preenche os campos entre `[colchetes]` com os dados da tua app
3. Cola num LLM e pede o SVG
4. Guarda o resultado em `public/nome-app-preview.svg`
5. Referencia no componente Projects.jsx: `${import.meta.env.BASE_URL}nome-app-preview.svg`

---

## Exemplo preenchido — TaskHabit

```
NOME DA APP: TaskHabit
TEMA: Escuro (Material 3 Dark)
ECRÃ: Today (Hoje)
CABEÇALHO: Data "Quinta, 23 Abr" + saudação "Bom dia, Talles"
PROGRESSO: Barra "3 de 5 concluídos" com gradiente roxo #BB86FC → #9C5FD6
LABEL: "HOJE"
BOTTOM NAV: 🏠 Hoje (activo), 📋 Hábitos, 📊 Stats, 👤 Perfil
PRIMARY: #BB86FC

CARDS:
- "Meditar 10 min" | verde #81C784 | concluído | 🔥 12 dias
- "Estudar Kotlin" | azul #64B5F6 | concluído | 🔥 7 dias
- "Exercício 30 min" | laranja #FFB74D | concluído | 🔥 4 dias
- "Leitura 20 min" | roxo #BB86FC | pendente | 🔥 2 dias
- "Beber 2L de água" | teal #4DD0E1 | pendente | 🔥 1 dia
```
