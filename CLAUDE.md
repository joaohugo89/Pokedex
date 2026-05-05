# Pokedex - Projeto React Moderno

Uma Pokédex visual e moderna construída com React e JavaScript, utilizando a PokéAPI.

## 🎯 Objetivo

Documentar e otimizar o código do projeto Pokedex para melhorar a qualidade, manutenibilidade e performance.

## 🏗️ Arquitetura

```
Pokedex/
├── src/
│   ├── components/          # Componentes React
│   │   ├── PokemonCard.jsx       # Card individual de Pokémon
│   │   ├── PokemonDetail.jsx     # Página de detalhes do Pokémon
│   │   ├── PokemonList.jsx       # Lista de Pokémon
│   │   ├── SearchBar.jsx         # Barra de busca
│   │   ├── TypeBadge.jsx         # Badge de tipo
│   │   ├── StatBar.jsx           # Barra de estatística
│   │   ├── EvolutionChain.jsx    # Cadeia de evolução
│   │   ├── ThemeToggle.jsx       # Alternador de tema
│   │   └── LoadingSpinner.jsx    # Spinner de carregamento
│   ├── context/            # Context API
│   │   └── PokemonContext.jsx    # Gerenciamento de estado global
│   ├── hooks/              # Custom hooks
│   │   └── usePokemon.js         # Hooks reutilizáveis
│   ├── services/           # Serviços
│   │   └── pokeapi.js         # Integração com PokeAPI
│   ├── constants/          # Constantes
│   │   └── pokemon.js        # Cores, gradientes, configs
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Entry point
│   └── index.css           # Estilos globais
├── public/                 # Arquivos estáticos
├── index.html             # HTML base
├── package.json           # Dependências
└── vite.config.js         # Configuração Vite
```

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para UI
- **Vite 8** - Ferramenta de build rápida
- **PokéAPI** - API pública de dados de Pokémon
- **CSS Moderno** - Estilização com CSS puro

## 📦 Dependências

| Pacote | Versão | Propósito |
|--------|--------|-----------|
| react | ^19.2.5 | UI Framework |
| react-dom | ^19.2.5 | DOM renderer |
| @vitejs/plugin-react | ^5.0.0 | Plugin Vite para React |
| vite | ^8.0.10 | Build tool |

## 🎨 Configuração

### Vite

Configuração básica no `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### Scripts

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build para produção |
| `npm run preview` | Previews o build |

## 🌙 Tema Dark Mode

O tema dark mode é controlado via classe `.dark` no elemento `body`:

```css
body.dark {
  background-color: #1a1a1a;
  color: #fff;
}
```

Todos os componentes escaneiam automaticamente a classe `.dark` para aplicar estilos diferentes.

## 🔑 Chaves de API

O projeto utiliza a PokéAPI gratuita que não requer chave de API.

## 📚 API PokéAPI

### Endpoints Utilizados

| Endpoint | Descrição |
|----------|-----------|
| `/pokemon/{id/nome}` | Dados principais do Pokémon |
| `/pokemon-species/{id/nome}` | Dados de espécie e descrição |
| `/evolution-chain/{id}` | Cadeia de evolução |

## ⚡ Otimizações Realizadas

### 1. Consolidação de Constantes

**Arquivo:** `src/constants/pokemon.js`

- Cores dos tipos de Pokémon (`TYPE_COLORS`)
- Gradientes por tipo (`TYPE_GRADIENTS`)
- Cores de estatísticas (`STAT_COLORS`)
- Labels de estatísticas (`STAT_LABELS`)
- Configurações do projeto (`POKEMON_CONFIG`)
- Funções utilitárias (`formatName`, `getTypeColor`, etc.)

**Benefício:** Evita duplicação de código e centraliza a manutenção.

### 2. Remoção de Console.logs

**Arquivos:** Todos os componentes

- Removidos console.logs de produção
- Apenas avisos não críticos mantidos (sem `console.warn` nos componentes visuais)
- Melhora a performance e limpa o código

### 3. Otimização de Requisições API

**Arquivo:** `src/services/pokeapi.js`

- Redução de requisições duplicadas na `fetchPokemonDetails`
- Uso de `Promise.all` para paralelizar requisições
- Limpeza de lógica de fetch Pokémon

### 4. Melhoria de Tratamento de Erros

**Arquivo:** `src/context/PokemonContext.jsx`

- Mensagens de erro mais claras e em português
- Estado de erro gerenciado de forma consistente
- Feedback visual ao usuário

### 5. Otimização de Scroll Infinito

**Arquivo:** `src/context/PokemonContext.jsx`

- Adicionado `loadingListRef` para evitar chamadas duplicadas
- Limite de paginação via `POKEMON_CONFIG.LIST_LIMIT`
- Reset de offset ao redimensionar a janela
- Tratamento de estado `selectedPokemon`

### 6. Acessibilidade

**Arquivos:** Todos os componentes

- Adição de atributos `aria-label` e `aria-hidden`
- Suporte a leitores de tela
- Melhor navegação por teclado
- `aria-live` para notificações de status

### 7. Performance

- `loading="lazy"` nas imagens secundárias
- `loading="eager"` na imagem principal
- Uso de `useCallback` para memoização
- `useRef` para evitar re-renders

## 🎯 Funcionalidades

### ✅ Implementadas

- 🔍 Busca por nome ou número
- 📱 Design responsivo
- 🌙 Dark mode com tema alternável
- ⭐ Favoritos (marcar/desmarcar)
- 📊 Detalhes completos (estatísticas, tipos, habilidades)
- 🔄 Cadeia de evolução
- 🎨 Interface moderna e vibrante
- 📄 Páginação infinita

### 🚀 Melhorias Futuras

- [ ] TypeScript para melhor tipagem
- [ ] Redux ou Zustand para estado complexo
- [ ] Caching com React Query
- [ ] Autocomplete no SearchBar
- [ ] Histórico de buscas
- [ ] Exportar lista de favoritos
- [ ] Modo de visualização em grade
- [ ] Ordenação por tipo/nome/ID

## 📱 Componentes

### `PokemonCard`

Exibe um Pokémon com:
- Imagem, nome, número
- Lista de tipos
- Botão de favorito
- Hover effects

### `PokemonDetail`

Página de detalhes com:
- Imagem grande
- Informações básicas (altura, peso)
- Habilidades
- Descrição
- Estatísticas
- Cadeia de evolução

### `PokemonList`

Lista de Pokémon com paginação infinita.

### `SearchBar`

Barra de busca com:
- Campo de texto
- Botão de busca
- Resultados exibidos

### `TypeBadge`

Badge exibindo o tipo com cor específica.

### `StatBar`

Barra de progresso para estatísticas com cor baseada no tipo.

### `EvolutionChain`

Visualização da cadeia de evolução com setas entre fases.

### `ThemeToggle`

Botão para alternar entre light e dark mode.

### `LoadingSpinner`

Spinner de carregamento centralizado.

## 🎨 Estilos

- CSS puro (sem frameworks)
- Classes BEM simplificadas
- Transições CSS suaves
- Gradientes dinâmicos
- Dark mode via classe `.dark`

## 📝 Estrutura de CSS

- `.app-container` - Contêiner principal
- `.app-header` - Header com título e toggle
- `.pokemon-list` - Lista de Pokémon
- `.pokemon-grid` - Grid de cards
- `.pokemon-card` - Card individual
- `.pokemon-detail` - Detalhes do Pokémon
- `.search-section` - Seção de busca
- `.search-form` - Formulário de busca
- `.stat-bar` - Barra de estatística
- `.evolution-chain` - Cadeia de evolução
- `.theme-toggle` - Botão de tema

## 🔄 Estado Global

### `PokemonContext`

Gerencia:
- `pokemonList` - Lista de Pokémon carregados
- `searchResults` - Resultados da busca
- `selectedPokemon` - Pokémon selecionado nos detalhes
- `loading` - Estado de carregamento
- `error` - Mensagens de erro
- `darkMode` - Tema atual
- `favorites` - Lista de favoritos
- `offset` - Paginação
- `hasMore` - Se há mais Pokémon

### Custom Hooks

| Hook | Uso |
|------|-----|
| `usePokemonList` | Lista e paginação |
| `usePokemonSearch` | Busca |
| `usePokemonDetail` | Detalhes do Pokémon |
| `useTheme` | Alternar tema |
| `useFavorites` | Favoritos |

## 🧪 Testes

Atualmente não há testes implementados. Sugestões:

- Unitários: Jest + React Testing Library
- Componentes: `render`, `fireEvent`, `waitFor`
- Context: `renderWithProviders`
- API: Mock com MSW (Mock Service Worker)

## 📦 Build e Deploy

```bash
# Build
npm run build

# O resultado fica em dist/

# Preview
npm run preview

# Deploy com Vercel
vercel deploy

# Deploy com Netlify
netlify deploy --prod
```

## 🔧 Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar dev server
npm run dev

# Abrir em http://localhost:5173
```

## 📄 Licença

MIT License

## 🙏 Agradecimentos

- [PokéAPI](https://pokeapi.co/) por fornecer os dados de Pokémon
- [Vite](https://vitejs.dev/) por tornar o desenvolvimento rápido
- [React](https://react.dev/) por ser uma biblioteca UI incrível

---

**Última atualização:** 2026-05-05
**Versão:** 1.0.0