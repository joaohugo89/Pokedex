import { formatName } from '../constants/pokemon';

function EvolutionChain({ chain }) {
  return (
    <div className="evolution-chain">
      <div className="evolution-container">
        {chain?.map((evolution, index) => (
          <div key={evolution.id} className="evolution-wrapper">

            <div className="evolution-step">
              <img
                src={
                  evolution.image ||
                  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.id}.png`
                }
                alt={formatName(evolution.name)}
                className="evolution-image"
                loading="lazy"
              />

              <div className="evolution-info">
                <h3 className="evolution-name">
                  {formatName(evolution.name)}
                </h3>

                <span className="evolution-level">
                  Nível {evolution.level || '?'}
                </span>
              </div>
            </div>

            {index < chain.length - 1 && (
              <div className="evolution-arrow" aria-hidden="true">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EvolutionChain;