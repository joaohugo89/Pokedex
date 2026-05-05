import { usePokemonDetail, usePokemonSearch } from '../hooks/usePokemon';
import StatBar from './StatBar';
import TypeBadge from './TypeBadge';
import EvolutionChain from './EvolutionChain';
import LoadingSpinner from './LoadingSpinner';
import { TYPE_GRADIENTS, formatName, POKEMON_CONFIG } from '../constants/pokemon';

function PokemonDetail({ onBack }) {
  const { pokemon, loading } = usePokemonDetail();
  const { selectedSearchPokemon } = usePokemonSearch();

  const pokemonData = pokemon?.pokemon || selectedSearchPokemon;
  const species = pokemon?.species || {};
  const evolutionChain = pokemon?.evolutionChain || [];

  if (loading) return <LoadingSpinner />;
  if (!pokemonData) return <div className="empty-state">Nenhum Pokémon encontrado</div>;

  const mainType = pokemonData.types?.[0]?.type?.toLowerCase();

  return (
    <div
      className="pokemon-detail dynamic-bg"
      style={{
        background: TYPE_GRADIENTS[mainType] || '#fff',
      }}
    >
      <button className="back-btn" onClick={onBack} aria-label="Voltar para lista">
        ← Voltar
      </button>

      <div className="detail-header">
        <h1>{formatName(pokemonData.name)}</h1>
        <span className="pokemon-id">
          #{String(pokemonData.id).padStart(3, '0')}
        </span>
      </div>

      <div className="detail-content">

        {/* IMAGEM */}
        <div className="detail-image">
          <img
            src={pokemonData.image}
            alt={formatName(pokemonData.name)}
            className="detail-image-large"
            loading="eager"
          />

          <div className="detail-types">
            {pokemonData.types?.map((type, index) => (
              <TypeBadge key={index} type={type} size="large" />
            ))}
          </div>
        </div>

        {/* INFO */}
        <div className="detail-info">

          <div className="info-section">
            <h2>Informações</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Altura</label>
                <span>{(pokemonData.height / 10).toFixed(1)} m</span>
              </div>
              <div className="info-item">
                <label>Peso</label>
                <span>{(pokemonData.weight / 10).toFixed(1)} kg</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h2>Habilidades</h2>
            <div className="abilities-list">
              {pokemonData.abilities?.map((ability, index) => (
                <span
                  key={index}
                  className={`ability-badge ${ability.isHidden ? 'hidden' : ''}`}
                  aria-hidden="true"
                >
                  {formatName(ability.ability)}
                  {ability.isHidden && ' (Hidden)'}
                </span>
              ))}
            </div>
          </div>

          {species.description && (
            <div className="info-section">
              <h2>Descrição</h2>
              <p className="description" aria-live="polite">{species.description}</p>
            </div>
          )}

          <div className="info-section">
            <h2>Estatísticas</h2>
            <div className="stats-list">
              {pokemonData.stats?.map((stat, index) => (
                <StatBar key={index} stat={stat} />
              ))}
            </div>
          </div>

          {evolutionChain?.length > 1 && (
            <div className="info-section">
              <h2>Evolução</h2>
              <EvolutionChain chain={evolutionChain} />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;