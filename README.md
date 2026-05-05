# Pokédex

Uma Pokédex visual e moderna construída com React e JavaScript, utilizando a PokéAPI.

## 🎮 Funcionalidades

- 🔍 **Busca por nome ou número** - Encontre Pokémon facilmente
- 📱 **Design responsivo** - Funciona em desktop e mobile
- 🌙 **Dark Mode** - Modo escuro com tema alternável
- ⭐ **Favoritos** - Marque seus Pokémon favoritos
- 📊 **Detalhes completos** - Estatísticas, tipos, habilidades, e mais
- 🔄 **Cadeia de evolução** - Visualize a evolução dos Pokémon
- 🎨 **Interface bonita** - Design moderno e vibrante
- ⬆️ **Páginação infinita** - Carregamento automático

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para UI
- **Vite 8** - Ferramenta de build rápida
- **PokeAPI** - API pública de dados de Pokémon
- **CSS Moderno** - Estilização com CSS puro

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd Pokedex
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 🛠️ Estrutura do Projeto

```
Pokedex/
├── public/
│   └── images/
├── src/
│   ├── components/          # Componentes React
│   │   ├── PokemonCard.jsx       # Card individual de Pokémon
│   │   ├── PokemonDetail.jsx     # Página de detalhes
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
├── index.html             # HTML base
├── package.json           # Dependências
├── vite.config.js         # Configuração Vite
└── CLAUDE.md              # Documentação completa
```

## 📚 API Utilizada

O projeto utiliza a [PokéAPI](https://pokeapi.co/) para buscar dados de Pokémon.

### Endpoints

- `GET /pokemon/{id/nome}` - Dados principais
- `GET /pokemon-species/{id/nome}` - Dados de espécie
- `GET /evolution-chain/{id}` - Cadeia de evolução

## ✨ Otimizações

O projeto passou por uma série de otimizações para melhorar a qualidade e performance:

- ✅ **Consolidação de constantes** - Centralização de cores, gradientes e configurações
- ✅ **Remoção de console.logs** - Código limpo e livre de logs de debug
- ✅ **Otimização de requisições API** - Redução de chamadas duplicadas
- ✅ **Melhoria de tratamento de erros** - Mensagens claras e em português
- ✅ **Otimização de scroll infinito** - Evita chamadas duplicadas
- ✅ **Acessibilidade** - Atributos ARIA para leitores de tela
- ✅ **Performance** - Lazy loading, memoização e refs

## 🎨 Personalização

### Cores dos Tipos

As cores dos tipos de Pokémon são definidas em `src/constants/pokemon.js`:

```javascript
const TYPE_COLORS = {
  fire: '#EE8130',
  water: '#6390F0',
  // ... mais tipos
};
```

### Estilização

Todo o CSS está em `src/index.css`. Você pode personalizar facilmente as cores, fontes e animações.

## 🚢 Build para Produção

```bash
npm run build
```

O build será criado na pasta `dist/`.

## 📝 Licença

Este projeto é licenciado sob a MIT License.

## 🙏 Agradecimentos

- [PokéAPI](https://pokeapi.co/) por fornecer os dados de Pokémon
- [Vite](https://vitejs.dev/) por tornar o desenvolvimento rápido
- [React](https://react.dev/) por ser uma biblioteca UI incrível

## 📄 Documentação Completa

Para informações mais detalhadas sobre a arquitetura, otimizações e desenvolvimento, consulte `CLAUDE.md`.