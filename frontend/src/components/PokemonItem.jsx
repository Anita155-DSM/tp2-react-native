function PokemonItem({ pokemon, onEdit, onDelete }) {
  return (
    <div className="pokemon-card">
      <div>
        <strong className="pokemon-name">{pokemon.name}</strong> - Tipo: {pokemon.type} - Lvl: {pokemon.level}
      </div>
      <div className="actions">
        <button onClick={() => onEdit(pokemon)} className="btn btn-secondary">Editar</button>
        <button onClick={() => onDelete(pokemon.id)} className="btn btn-danger">Eliminar</button>
      </div>
    </div>
  );
}

export default PokemonItem;