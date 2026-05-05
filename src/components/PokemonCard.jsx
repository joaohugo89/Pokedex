import { usePokemon } from '../context/PokemonContext';
import { TYPE_COLORS, formatName, getTypeColor } from '../constants/pokemon';

function PokemonCard({ pokemon, onClick }) {
  const { darkMode, favorites, toggleFavorite } = usePokemon();

  const isFavorite = favorites.some(f => f.id === pokemon.id);
  const onClickFavorite = (e) => {
    e.stopPropagation();
    toggleFavorite(pokemon);
  };

  const handleClick = () => {
    onClick(pokemon);
  };

  const mainType = pokemon.types?.[0]?.type?.toLowerCase();
  const bgColor = darkMode ? '#2d2d2d' : '#fff';
  const typeColor = pokemon.types?.[0]?.color || '#777';

  return (
    <div
      className={`pokemon-card ${darkMode ? 'dark' : ''}`}
      onClick={handleClick}
      style={{
        backgroundColor: bgColor,
        border: `2px solid ${typeColor}`
      }}
    >
      <button
        className="favorite-btn"
        onClick={onClickFavorite}
        style={{
          color: isFavorite ? '#ff5350' : darkMode ? '#999' : '#ccc'
        }}
        aria-label={isFavorite ? 'Remover favorito' : 'Adicionar favorito'}
      >
        {isFavorite ? '★' : '☆'}
      </button>
      <img
        src={pokemon.imageSmall}
        alt={formatName(pokemon.name)}
        className="pokemon-image"
        loading="lazy"
      />
      <div className="pokemon-info">
        <span className="pokemon-number">#{String(pokemon.id).padStart(3, '0')}</span>
        <h3 className="pokemon-name">{formatName(pokemon.name)}</h3>
        <div className="pokemon-types">
          {pokemon.types?.map((type, index) => (
            <TypeBadge key={index} type={type} size="small" />
          ))}
        </div>
      </div>
    </div>
  );
}

function TypeBadge({ type, size = 'medium' }) {
  const { darkMode } = usePokemon();
  const color = type.color || '#777';

  const sizes = {
    small: {
      padding: '4px 10px',
      fontSize: '0.7rem'
    },
    medium: {
      padding: '8px 14px',
      fontSize: '0.9rem'
    },
    large: {
      padding: '12px 18px',
      fontSize: '1.1rem'
    }
  };

  return (
    <span
      className="type-badge"
      style={{
        backgroundColor: color,
        color: darkMode ? '#fff' : '#fff',
        ...sizes[size]
      }}
    >
      {type.type}
    </span>
  );
}

export default PokemonCard;