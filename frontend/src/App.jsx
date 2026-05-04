import { useState, useEffect, useContext, useCallback } from 'react';
import PokemonForm from './components/PokemonForm';
import PokemonList from './components/PokemonList';
import SearchFilter from './components/SearchFilter';
import { PokemonContext } from './context/PokemonContext';

const API_URL = '/api/pokemons';

function App() {
  // Extraemos el dispatch del contexto global
  const { dispatch } = useContext(PokemonContext);
  
  // Mantenemos solo estados locales de la interfaz (UI)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonToEdit, setPokemonToEdit] = useState(null);

  // Referencia (antes, sin callback):
  // <PokemonForm
  //   pokemonToEdit={pokemonToEdit}
  //   clearEdit={() => setPokemonToEdit(null)}
  // />
  

  const clearEdit = useCallback(() => {
    setPokemonToEdit(null);
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, []);

  // Consumo de API
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Error al cargar los Pokémon');
      const data = await res.json();

      // Guardamos los datos en el estado global
      dispatch({ type: 'SET_POKEMONS', payload: data });
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <h1 className="app-title">Gestión de Equipo Pokémon</h1>
      
      {/* Mostrar estado de error */}
      {error && <div className="error-banner">Error: {error}</div>}
      
      <PokemonForm 
        pokemonToEdit={pokemonToEdit} 
        clearEdit={clearEdit} 
      />
      
      <hr className="section-divider" />
      
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Mostrar estado de carga */}
      {loading ? (
        <p className="loading-text">Cargando Pokémon...</p>
      ) : (
        <PokemonList 
          searchTerm={searchTerm}
          onEdit={setPokemonToEdit}
        />
      )}
    </div>
  );
}

export default App;