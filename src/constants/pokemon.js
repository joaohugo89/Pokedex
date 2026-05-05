/**
 * Pokédex - Constantes
 * Arquivo com todas as constantes reutilizáveis do projeto
 */

// ==================== CORES DOS TIPOS ====================

export const TYPE_COLORS = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

// ==================== GRADIENTES POR TIPO ====================

export const TYPE_GRADIENTS = {
  grass: 'linear-gradient(135deg, #78C850 0%, #A8E6A3 100%)',
  fire: 'linear-gradient(135deg, #F08030 0%, #F5AC78 100%)',
  water: 'linear-gradient(135deg, #6890F0 0%, #9DB7F5 100%)',
  electric: 'linear-gradient(135deg, #F8D030 0%, #FAE078 100%)',
  bug: 'linear-gradient(135deg, #A8B820 0%, #C6D16E 100%)',
  normal: 'linear-gradient(135deg, #A8A878 0%, #C6C6A7 100%)',
  poison: 'linear-gradient(135deg, #A040A0 0%, #C183C1 100%)',
  ground: 'linear-gradient(135deg, #E0C068 0%, #EBD69D 100%)',
  fairy: 'linear-gradient(135deg, #EE99AC 0%, #F4BDC9 100%)',
  fighting: 'linear-gradient(135deg, #C03028 0%, #D67873 100%)',
  psychic: 'linear-gradient(135deg, #F85888 0%, #FA92B2 100%)',
  rock: 'linear-gradient(135deg, #B8A038 0%, #D1C17D 100%)',
  ghost: 'linear-gradient(135deg, #705898 0%, #A292BC 100%)',
  ice: 'linear-gradient(135deg, #98D8D8 0%, #BCE6E6 100%)',
  dragon: 'linear-gradient(135deg, #7038F8 0%, #A27DFA 100%)',
  dark: 'linear-gradient(135deg, #705848 0%, #A29288 100%)',
  steel: 'linear-gradient(135deg, #B8B8D0 0%, #D1D1E0 100%)',
  flying: 'linear-gradient(135deg, #A890F0 0%, #C6B7F5 100%)',
};

// ==================== CORES DE ESTATÍSTICAS ====================

export const STAT_COLORS = {
  hp: '#FF6B6B',
  attack: '#4ECDC4',
  defense: '#45B7D1',
  'special attack': '#96CEB4',
  'special defense': '#FFEAA7',
  speed: '#DDA0DD',
  default: '#A8A77A'
};

// ==================== LABELS DE ESTATÍSTICAS ====================

export const STAT_LABELS = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  'special attack': 'Sp. Atk',
  'special defense': 'Sp. Def',
  speed: 'Speed'
};

// ==================== CONFIGURAÇÕES ====================

export const POKEMON_CONFIG = {
  LIST_LIMIT: 20,
  MAX_STAT: 255,
  INITIAL_OFFSET: 0,
  SCROLL_THRESHOLD: 500, // pixels para carregar mais
  SEARCH_LIMIT: 1000
};

// ==================== FUNÇÕES AUXILIARES ====================

/**
 * Formata o nome para capitalização correta
 * @param {string} name - Nome do Pokémon
 * @returns {string} Nome formatado
 */
export function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/**
 * Obtém a cor de um tipo de Pokémon
 * @param {string} type - Nome do tipo
 * @returns {string} Cor do tipo
 */
export function getTypeColor(type) {
  return TYPE_COLORS[type] || '#777';
}

/**
 * Obtém o gradiente para um tipo de Pokémon
 * @param {string} type - Nome do tipo
 * @returns {string} Gradiente do tipo
 */
export function getTypeGradient(type) {
  return TYPE_GRADIENTS[type] || TYPE_GRADIENTS.normal;
}

/**
 * Obtém a cor de uma estatística
 * @param {string} statName - Nome da estatística
 * @returns {string} Cor da estatística
 */
export function getStatColor(statName) {
  return STAT_COLORS[statName.toLowerCase()] || STAT_COLORS.default;
}

/**
 * Obtém o label de uma estatística
 * @param {string} statName - Nome da estatística
 * @returns {string} Label da estatística
 */
export function getStatLabel(statName) {
  return STAT_LABELS[statName.toLowerCase()] || statName;
}