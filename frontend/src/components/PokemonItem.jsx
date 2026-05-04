import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const API_URL = "/api/pokemons";

function PokemonItem({ pokemon, onEdit }) {
  // 1. Traemos el despachador de acciones desde el contexto
  const { dispatch } = useContext(PokemonContext);

  // 2. Creamos la función para eliminar directamente acá
  const handleDelete = async () => {
    try {
      // Borramos de la base de datos (tu backend Node)
      const res = await fetch(`${API_URL}/${pokemon.id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Error al eliminar');
      
      // Borramos del estado global en React
      dispatch({ type: 'DELETE_POKEMON', payload: pokemon.id });
    } catch (err) {
      console.error("Hubo un error al eliminar:", err.message);
    }
  };

  return (
    <div className="pokemon-card">
      <div>
        <strong className="pokemon-name">{pokemon.name}</strong> - Tipo: {pokemon.type} - Lvl: {pokemon.level}
      </div>
      <div className="actions">
        <button onClick={() => onEdit(pokemon)} className="btn btn-secondary">Editar</button>
        {/* 3. Cambiamos onDelete por nuestra nueva función handleDelete */}
        <button onClick={handleDelete} className="btn btn-danger">Eliminar</button>
      </div>
    </div>
  );
}

export default PokemonItem;