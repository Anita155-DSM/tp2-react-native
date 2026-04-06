import { useState, useEffect } from 'react';

function PokemonForm({ onSubmit, pokemonToEdit, clearEdit }) {
  const [formData, setFormData] = useState({ name: '', type: '', level: '' });

  useEffect(() => {
    if (pokemonToEdit) {
      setFormData(pokemonToEdit);
    } else {
      setFormData({ name: '', type: '', level: '' });
    }
  }, [pokemonToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', type: '', level: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Nombre" 
        value={formData.name} 
        onChange={e => setFormData({...formData, name: e.target.value})} 
        required 
      />
      <input 
        type="text" 
        placeholder="Tipo (ej. Fuego)" 
        value={formData.type} 
        onChange={e => setFormData({...formData, type: e.target.value})} 
        required 
      />
      <input 
        type="number" 
        placeholder="Nivel" 
        value={formData.level} 
        onChange={e => setFormData({...formData, level: Number(e.target.value)})} 
        required 
      />
      <button type="submit">{pokemonToEdit ? 'Actualizar' : 'Agregar'}</button>
      {pokemonToEdit && <button type="button" onClick={clearEdit}>Cancelar</button>}
    </form>
  );
}

export default PokemonForm;