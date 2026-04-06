import { useState, useEffect } from 'react';
import PokemonForm from './components/PokemonForm';
import PokemonList from './components/PokemonList';
import SearchFilter from './components/SearchFilter';

const API_URL = '/api/pokemons';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonToEdit, setPokemonToEdit] = useState(null);

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
      setPokemons(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddOrUpdate = async (pokemonData) => {
    try {
      const method = pokemonToEdit ? 'PUT' : 'POST';
      const url = pokemonToEdit ? `${API_URL}/${pokemonToEdit.id}` : API_URL;
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pokemonData)
      });
      
      if (!res.ok) throw new Error('Error al guardar el Pokémon');
      
      fetchPokemons(); // Recargar datos
      setPokemonToEdit(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Error al eliminar');
      fetchPokemons();
    } catch (err) {
      setError(err.message);
    }
  };

  const filteredPokemons = pokemons.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Gestión de Equipo Pokémon</h1>
      
      {/* Mostrar estado de error */}
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>Error: {error}</div>}
      
      <PokemonForm 
        onSubmit={handleAddOrUpdate} 
        pokemonToEdit={pokemonToEdit} 
        clearEdit={() => setPokemonToEdit(null)} 
      />
      
      <hr />
      
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Mostrar estado de carga */}
      {loading ? (
        <p>Cargando Pokémon...</p>
      ) : (
        <PokemonList 
          pokemons={filteredPokemons} 
          onEdit={setPokemonToEdit} 
          onDelete={handleDelete} 
        />
      )}
    </div>
  );
}

export default App;