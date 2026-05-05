import { useTheme } from '../hooks/usePokemon';

function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  const handleToggle = () => {
    if (darkMode) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
    toggleDarkMode();
  };

  return (
    <button
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={darkMode ? 'Ativar light mode' : 'Ativar dark mode'}
      title={darkMode ? 'Ativar light mode' : 'Ativar dark mode'}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;