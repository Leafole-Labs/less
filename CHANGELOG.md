# LESS Changelog

## 26.2 — Cloy (correções)

Correção incremental, sem reimplementação. Problemas encontrados e causas:

### Modo escuro

- **Causa**: dezenas de regras do núcleo usam cores fixas claras
  (`#fff`, `#f6f7f7`, `#f0f0f1`, textos `#1d2327`/`#3c434a`, bordas
  `#dcdcde`) em componentes que a primeira versão do Cloy não cobria.
- **Correção** (`ls-admin/css/ls-cloy.css`, seção 6): sobrescritas
  pontuais reutilizando os tokens `--ls-*` existentes, sem `!important`
  (apenas o padrão `.screen-reader` e o bloco `prefers-reduced-motion`
  mantêm `!important`, como no próprio núcleo) e sem filtros globais.
- Componentes corrigidos: checkboxes/radios/inputs estendidos/readonly,
  título da publicação, abas Visual/Texto do editor clássico, barra de
  filtros e abas, contadores, view-switcher, ações destrutivas (novo token
  `--ls-danger`: `#ff8085` no escuro, contraste 5.82:1), edição rápida,
  comentários pendentes, widgets do painel, ThickBox e modal de detalhes
  de plugin, diálogos jQuery, pointers, autocomplete, navegador/overlay de
  temas, cards de plugin, menus de navegação, telas de widgets, extras da
  biblioteca de mídia (menu lateral, router, faixa de seleção, rótulos,
  instruções, erros de upload, cabeçalho legado), revisões/diff
  (linhas e marcações `del`/`ins` legíveis), navegação do Site Health e
  cromo dos editores de tema/plugin. O tema claro permanece intacto.
- **Limitações mantidas**: conteúdo dos iframes (TinyMCE, canvas do editor
  de blocos, CodeMirror) e o app do Customizer não são retematizados.

### Paleta Ctrl+K / ⌘+K

- **Causa 1**: `customize.php` zera a fila de scripts e nunca dispara
  `admin_enqueue_scripts`, então a paleta não era carregada no
  Customizer. **Correção**: `ls_cloy_enqueue_palette_assets()` extraída
  para helper e novo hook em `customize_controls_enqueue_scripts`
  (`wp-includes/ls-cloy.php`).
- **Causa 2**: nas telas do editor de blocos o Gutenberg registra o
  próprio `primary+k` (`core/commands`), abrindo duas paletas ou fazendo
  a do LESS parecer inoperante. **Correção**
  (`ls-admin/js/ls-cloy-palette.js`): nessas telas (`body.block-editor-page`
  + `window.wp.commands`) os comandos do LESS são registrados na paleta
  nativa via `registerCommand` (`ls-cloy/<id>`, com `searchLabel`) e o
  modal próprio não abre; o nó da admin bar abre a paleta nativa ali.
  Nenhum atalho nativo foi desativado.
- Verificado via curl que todas as telas administrativas padrão
  (painel, publicações, editor, mídia, comentários, temas, plugins,
  usuários, ferramentas, configurações, atualizações, perfil,
  menus — estes dois últimos com `wp_die` legítimo por falta de suporte
  do tema —, saúde do site e Customizer) carregam script, estilo e dados
  da paleta exatamente uma vez.

## 26.2 — Cloy

Three admin features, integrated on top of the existing LESS/WordPress
infrastructure. No storage format was changed and no core flow was replaced.

### Dark mode

- Interface theme with three options: light, dark and automatic (follows the
  operating system preference via `prefers-color-scheme`).
- Stored per user (`ls_admin_theme` user option, default `auto`), so the
  preference persists across sessions without any schema change.
- Control in Profile → Personal Options (next to the color-scheme picker)
  plus a quick-switch node in the admin bar (light → dark → auto).
- Theme tokens (`--ls-*`) in `ls-admin/css/ls-cloy.css`; the light theme
  keeps the current look as reference, dark only overrides surfaces, text,
  links, borders, fields, buttons, tables, notices, modals and focus states.
- Pre-paint script in `<head>` applies the stored preference before first
  paint (no wrong-theme flash); `prefers-reduced-motion` disables Cloy
  transitions; `:focus-visible` outlines everywhere.
- Applied to admin screens, the login screen, the media modal and shared
  components. Limitation: the block-editor canvas iframe does not inherit
  the outer document theme (core copies only `admin-color-*` classes there).

### Enhanced media library

- Same queries (`query-attachments`), pagination, upload, selection,
  insertion and deletion flows — presentation/accessibility layer only.
- Consistent grid tiles (uniform preview surface, rounded corners, even
  spacing), responsive breakpoints and uniform list-mode thumbnails.
- Arrow-key navigation between grid tiles, Enter opens details, result
  counts announced through a live region, and a "clear search and filters"
  helper that drives the existing core controls.
- Dark-theme aware through the same `--ls-*` tokens.

### Command palette (Ctrl+K / Cmd+K)

- Centered modal (`ls-admin/js/ls-cloy-palette.js`), autofocused search,
  ArrowUp/ArrowDown + Enter + Esc, live filtering, click-outside to close.
- Commands are built server-side from real admin routes and filtered by the
  capability guarding each screen; target screens enforce their own checks
  again on load. Extendable through the `ls_cloy_palette_commands` filter.
- Never intercepts the shortcut while typing in fields, editors, pickers or
  open dialogs; avoids double-open and coexists with existing shortcuts.
- Discoverable through an admin-bar "Commands" node showing the shortcut.

### Files

- New: `wp-includes/ls-cloy.php` (required from `wp-includes/less.php`).
- New: `ls-admin/css/ls-cloy.css`.
- New: `ls-admin/js/ls-cloy-theme.js`, `ls-cloy-palette.js`, `ls-cloy-media.js`.
- Modified: `ls-config.php` (`LS_VERSION` 26.1.3.2 → 26.2),
  `wp-includes/less.php` (require the Cloy module).
