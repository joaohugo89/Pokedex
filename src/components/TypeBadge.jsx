import { usePokemon } from '../context/PokemonContext';
import { getTypeColor } from '../constants/pokemon';

function TypeBadge({ type, size = 'medium' }) {
  const { darkMode } = usePokemon();
  const color = type.color || '#777';

  const sizes = {
    small: {
      padding: '4px 12px',
      fontSize: '0.75rem'
    },
    medium: {
      padding: '8px 16px',
      fontSize: '1rem'
    },
    large: {
      padding: '12px 24px',
      fontSize: '1.25rem'
    }
  };

  return (
    <span
      className={`type-badge type-${type.type.toLowerCase()}`}
      style={{
        backgroundColor: color,
        color: '#fff',
        borderRadius: '999px',
        display: 'inline-block',
        ...sizes[size]
      }}
      aria-label={type.type}
    >
      {type.type}
    </span>
  );
}

export default TypeBadge;