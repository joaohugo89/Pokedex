import { usePokemon } from '../context/PokemonContext';

export function usePokemonList() {
  const { pokemonList, loadPokemonList, hasMore, loading } = usePokemon();

  return {
    pokemonList,
    loadMore: loadPokemonList,
    hasMore,
    loading
  };
}

export function usePokemonSearch() {
  const { searchResults, handleSearch, clearSearch, loading, selectedSearchPokemon, selectSearchPokemon } = usePokemon();

  return {
    searchResults,
    handleSearch,
    clearSearch,
    loading,
    selectedSearchPokemon,
    selectSearchPokemon
  };
}

export function usePokemonDetail() {
  const { selectedPokemon, loadPokemon, loading } = usePokemon();

  return {
    pokemon: selectedPokemon,
    loadPokemon,
    loading
  };
}

export function useTheme() {
  const { darkMode, toggleDarkMode } = usePokemon();

  return {
    darkMode,
    toggleDarkMode
  };
}

export function useFavorites() {
  const { favorites, toggleFavorite } = usePokemon();

  return {
    favorites,
    toggleFavorite
  };
}