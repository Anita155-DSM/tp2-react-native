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