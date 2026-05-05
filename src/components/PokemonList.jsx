import { usePokemonList } from '../hooks/usePokemon';
import PokemonCard from './PokemonCard';
import LoadingSpinner from './LoadingSpinner';

function PokemonList({ onSelectPokemon }) {
  const { pokemonList, loadMore, hasMore, loading } = usePokemonList();

  return (
    <div className="pokemon-list">
      <h2 className="list-title">Pokémon</h2>
      <div className="pokemon-grid">
        {pokemonList.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={onSelectPokemon}
          />
        ))}
      </div>
      {loading && pokemonList.length > 0 && <LoadingSpinner />}
      {pokemonList.length === 0 && !loading && (
        <div className="empty-state">
          <p>Nenhum Pokémon encontrado</p>
        </div>
      )}
    </div>
  );
}

export default PokemonList;