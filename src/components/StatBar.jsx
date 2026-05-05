import { usePokemon } from '../context/PokemonContext';
import { getStatColor, getStatLabel, POKEMON_CONFIG } from '../constants/pokemon';

function StatBar({ stat }) {
  const { darkMode } = usePokemon();

  const maxStat = POKEMON_CONFIG.MAX_STAT;
  const value = Math.min(stat?.value || 0, maxStat);
  const percentage = (value / maxStat) * 100;

  const normalizedName = stat?.name?.toLowerCase() || '';
  const color = getStatColor(normalizedName);

  const displayName = getStatLabel(normalizedName);

  return (
    <div className="stat-bar">
      <div className="stat-info">
        <span
          className="stat-name"
          style={{ color: darkMode ? '#fff' : '#333' }}
        >
          {displayName}
        </span>

        <span className="stat-value">
          {value}
        </span>
      </div>

      <div className="stat-track">
        <div
          className="stat-fill"
          style={{
            width: `${percentage}%`,
            background: `linear-gradient(90deg, ${color}, ${color}cc)`
          }}
        />
      </div>
    </div>
  );
}

export default StatBar;