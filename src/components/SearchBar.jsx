import { usePokemonSearch } from '../hooks/usePokemon';

function SearchBar({ onPokemonSelect }) {
  const { searchResults, handleSearch, clearSearch, loading } = usePokemonSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const term = e.target.search.value.trim();

    if (term) {
      handleSearch(term);
    }
  };

  const handleClick = (pokemon) => {
    if (!onPokemonSelect) {
      console.warn('[SearchBar] onPokemonSelect não foi passado!');
      return;
    }

    onPokemonSelect(pokemon);
  };

  return (
    <div className="search-section">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="Buscar Pokémon por nome ou número..."
          autoComplete="off"
          className="search-input"
        />
        <button type="submit" className="search-btn">
          🔍
        </button>
      </form>

      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Resultados da busca</h3>
          <div className="results-grid">
            {searchResults.map(pokemon => (
              <div
                key={pokemon.id}
                className="search-result-item"
                onClick={() => handleClick(pokemon)}
              >
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="result-image"
                />
                <span className="result-name">{pokemon.name}</span>
                <span className="result-number">
                  #{String(pokemon.id).padStart(3, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;