import { useState } from 'react';
import { PokemonProvider } from './context/PokemonContext';
import { usePokemonDetail } from './hooks/usePokemon';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

function AppContent() {
  const [view, setView] = useState('list');
  const { loadPokemon } = usePokemonDetail();

  const handlePokemonSelect = (pokemon) => {
    if (!pokemon?.name) {
      console.warn('[App] Pokémon inválido recebido');
      return;
    }

    loadPokemon(pokemon.name);
    setView('detail');
  };

  const handleBackToList = () => {
    setView('list');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Pokédex</h1>
        <ThemeToggle />
      </header>

      {view === 'list' ? (
        <>
          <SearchBar onPokemonSelect={handlePokemonSelect} />
          <PokemonList onSelectPokemon={handlePokemonSelect} />
        </>
      ) : (
        <PokemonDetail onBack={handleBackToList} />
      )}

      <footer className="app-footer">
        <p>PokeAPI data provided by pokeapi.co</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <PokemonProvider>
      <AppContent />
    </PokemonProvider>
  );
}

export default App;