import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { fetchPokemonList, fetchPokemonDetails, searchPokemon } from '../services/pokeapi';
import { POKEMON_CONFIG } from '../constants/pokemon';

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedSearchPokemon, setSelectedSearchPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loadingListRef = useRef(false);

  // ✅ Carregar lista (CORRIGIDO)
  const loadPokemonList = useCallback(async (customOffset = 0) => {
    if (loadingListRef.current) return;

    setLoading(true);
    setError(null);
    loadingListRef.current = true;

    try {
      const data = await fetchPokemonList(POKEMON_CONFIG.LIST_LIMIT, customOffset);

      setPokemonList(prev => {
        // evita duplicação
        const ids = new Set(prev.map(p => p.id));
        const newOnes = data.results.filter(p => !ids.has(p.id));

        return customOffset === 0 ? data.results : [...prev, ...newOnes];
      });

      setHasMore(!!data.next);
    } catch (err) {
      setError(err.message || 'Erro ao carregar Pokémon');
    } finally {
      setLoading(false);
      loadingListRef.current = false;
    }
  }, []);

  // ✅ CARREGAR PRIMEIROS 20 AO INICIAR
  useEffect(() => {
    loadPokemonList(0);
  }, [loadPokemonList]);

  // Carregar Pokémon específico
  const loadPokemon = useCallback(async (query) => {
    setLoading(true);
    setError(null);
    setSelectedPokemon(null);
    setSelectedSearchPokemon(null);

    try {
      const data = await fetchPokemonDetails(query);
      setSelectedPokemon(data);
    } catch (err) {
      setError(err.message || 'Erro ao carregar Pokémon');
    } finally {
      setLoading(false);
    }
  }, []);

  // Selecionar Pokémon da busca
  const selectSearchPokemon = useCallback((pokemon) => {
    setSelectedSearchPokemon(pokemon);
    setLoading(false);
  }, []);

  // Buscar Pokémon
  const handleSearch = useCallback(async (term) => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const results = await searchPokemon(term);
      setSearchResults(results);
    } catch (err) {
      setError(err.message || 'Erro ao buscar Pokémon');
    } finally {
      setLoading(false);
    }
  }, []);

  // Dark mode
  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => {
      if (prev) {
        document.body.classList.remove('dark');
      } else {
        document.body.classList.add('dark');
      }
      return !prev;
    });
  }, []);

  // Favoritos
  const toggleFavorite = useCallback((pokemon) => {
    setFavorites(prev => {
      const exists = prev.some(p => p.id === pokemon.id);
      return exists
        ? prev.filter(p => p.id !== pokemon.id)
        : [...prev, pokemon];
    });
  }, []);

  const clearSearch = useCallback(() => {
    setSearchResults([]);
  }, []);

  // ✅ Scroll infinito (OTIMIZADO)
  useEffect(() => {
    const handleScroll = () => {
      if (selectedPokemon) return;
      if (
        !loading &&
        hasMore &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - POKEMON_CONFIG.SCROLL_THRESHOLD
      ) {
        const newOffset = offset + POKEMON_CONFIG.LIST_LIMIT;
        setOffset(newOffset);
        loadPokemonList(newOffset);
      }
    };

    const handleResize = () => {
      // Reset offset on resize
      setOffset(0);
      setPokemonList([]);
      loadPokemonList(0);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [loading, hasMore, offset, loadPokemonList, selectedPokemon]);

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        searchResults,
        selectedPokemon,
        selectedSearchPokemon,
        loading,
        error,
        darkMode,
        favorites,
        loadPokemonList,
        loadPokemon,
        handleSearch,
        toggleDarkMode,
        toggleFavorite,
        clearSearch,
        selectSearchPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemon must be used within PokemonProvider');
  }
  return context;
}