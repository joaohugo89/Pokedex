import { TYPE_COLORS, formatName, getTypeColor, POKEMON_CONFIG } from '../constants/pokemon';

const POKEAPI_BASE = 'https://pokeapi.co/api/v2';

// Fetch Pokémon por nome ou ID
export async function fetchPokemon(query) {
  const response = await fetch(`${POKEAPI_BASE}/pokemon/${query}`);
  if (!response.ok) {
    throw new Error(`Pokémon não encontrado: ${query}`);
  }
  const data = await response.json();
  return {
    id: data.id,
    name: formatName(data.name),
    types: data.types.map(t => ({
      type: formatName(t.type.name),
      color: getTypeColor(t.type.name)
    })),
    abilities: data.abilities.map(a => ({
      ability: formatName(a.ability.name),
      isHidden: a.is_hidden
    })),
    stats: data.stats.map(s => ({
      name: formatName(s.stat.name.replace('special-', 'special ')),
      value: s.base_stat
    })),
    height: data.height,
    weight: data.weight,
    image: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
    imageSmall: data.sprites.front_default
  };
}

// Fetch lista de Pokémon com paginação
export async function fetchPokemonList(limit = POKEMON_CONFIG.LIST_LIMIT, offset = 0) {
  const response = await fetch(`${POKEAPI_BASE}/pokemon?limit=${limit}&offset=${offset}`);
  if (!response.ok) {
    throw new Error('Erro ao carregar lista de Pokémon');
  }
  const data = await response.json();

  // Buscar detalhes de cada Pokémon
  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon) => {
      const id = pokemon.url.split('/').filter(Boolean).pop();
      return fetchPokemon(id);
    })
  );

  return {
    results: pokemonDetails,
    next: data.next,
    previous: data.previous,
    count: data.count
  };
}

// Fetch detalhes completos do Pokémon
export async function fetchPokemonDetails(query) {
  const [pokemonData, speciesData] = await Promise.all([
    fetchPokemon(query),
    fetch(`${POKEAPI_BASE}/pokemon-species/${query}`)
  ]);

  if (!speciesData.ok) {
    throw new Error(`Erro ao carregar dados da espécie: ${query}`);
  }

  const species = await speciesData.json();
  const description = species.flavor_text_entries
    .find(entry => entry.language.name === 'en')
    ?.flavor_text.replace(/\f/g, ' ') || 'Descrição não disponível.';

  let evolutionChain = null;
  if (species.evolution_chain) {
    const evolutionResponse = await fetch(species.evolution_chain.url);
    if (evolutionResponse.ok) {
      const evolutionData = await evolutionResponse.json();
      evolutionChain = parseEvolutionChain(evolutionData.chain);
    }
  }

  return {
    pokemon: pokemonData,
    species: {
      description,
      color: species.color.name,
      base_happiness: species.base_happiness
    },
    evolutionChain
  };
}

// Parsear cadeia de evolução
async function parseEvolutionChain(chain) {
  const evolutions = [];
  let current = chain;

  while (current) {
    const pokemon = {
      name: formatName(current.species.name),
      id: current.species.url.split('/').filter(Boolean).pop(),
      image: null,
      level: null
    };

    if (current.evolution_details && current.evolution_details.length > 0) {
      pokemon.level = current.evolution_details[0].min_level || '??';
    }

    // Buscar imagem do Pokémon
    const details = await fetchPokemon(pokemon.id);
    pokemon.image = details.imageSmall;

    evolutions.push(pokemon);

    current = current.evolves_to && current.evolves_to.length > 0 ? current.evolves_to[0] : null;
  }

  return evolutions;
}

// Buscar Pokémon por termo (autocomplete)
export async function searchPokemon(term) {
  const response = await fetch(`${POKEAPI_BASE}/pokemon?limit=${POKEMON_CONFIG.SEARCH_LIMIT}&offset=0`);
  if (!response.ok) {
    throw new Error('Erro ao buscar Pokémon');
  }

  const data = await response.json();
  const filtered = data.results
    .map(result => {
      const id = result.url.split('/').filter(Boolean).pop();
      return {
        id,
        name: formatName(result.name),
        url: result.url
      };
    })
    .filter(pokemon =>
      pokemon.name.toLowerCase().includes(term.toLowerCase()) ||
      pokemon.id.includes(term)
    );

  // Buscar imagens - removido limite para mostrar todos os resultados
  const withImages = await Promise.all(
    filtered.map(async (pokemon) => {
      const details = await fetchPokemon(pokemon.id);
      return {
        ...pokemon,
        image: details.imageSmall
      };
    })
  );

  return withImages;
}