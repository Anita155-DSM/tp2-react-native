import { useState, useEffect, useContext } from 'react';
// 1. Importamos el contexto
import { PokemonContext } from '../context/PokemonContext';

const API_URL = '/api/pokemons'; 

function PokemonForm({ pokemonToEdit, clearEdit }) {
  const [formData, setFormData] = useState({ name: '', type: '', level: '' });
  
  // 2. Extraemos el dispatch del contexto global
  const { dispatch } = useContext(PokemonContext);

  useEffect(() => {
    if (pokemonToEdit) {
      setFormData(pokemonToEdit);
    } else {
      setFormData({ name: '', type: '', level: '' });
    }
  }, [pokemonToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const method = pokemonToEdit ? 'PUT' : 'POST';
      const url = pokemonToEdit ? `${API_URL}/${pokemonToEdit.id}` : API_URL;

      // Hacemos la petición a la API
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Error al guardar el Pokémon');

      const savedPokemon = await res.json();

      // 3. Despachamos la acción correspondiente al Contexto Global
      if (pokemonToEdit) {
        dispatch({ type: 'UPDATE_POKEMON', payload: savedPokemon });
        clearEdit(); // Limpiamos el estado de edición
      } else {
        dispatch({ type: 'ADD_POKEMON', payload: savedPokemon });
      }

      // Limpiamos los inputs del formulario
      setFormData({ name: '', type: '', level: '' });
    } catch (err) {
      console.error("Error al guardar:", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pokemon-form">
      <input 
        type="text" 
        placeholder="Nombre" 
        value={formData.name} 
        onChange={e => setFormData({...formData, name: e.target.value})} 
        className="text-input"
        required 
      />
      <input 
        type="text" 
        placeholder="Tipo (ej. Fuego)" 
        value={formData.type} 
        onChange={e => setFormData({...formData, type: e.target.value})} 
        className="text-input"
        required 
      />
      <input 
        type="number" 
        placeholder="Nivel" 
        value={formData.level} 
        onChange={e => setFormData({...formData, level: Number(e.target.value)})} 
        className="number-input"
        required 
      />
      <button type="submit" className="btn btn-primary">{pokemonToEdit ? 'Actualizar' : 'Agregar'}</button>
      {pokemonToEdit && <button type="button" onClick={clearEdit} className="btn btn-secondary">Cancelar</button>}
    </form>
  );
}

export default PokemonForm;