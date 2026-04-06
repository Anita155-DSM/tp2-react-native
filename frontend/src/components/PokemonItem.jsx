function PokemonItem({ pokemon, onEdit, onDelete }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '10px', 
      margin: '10px 0', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <strong>{pokemon.name}</strong> - Tipo: {pokemon.type} - Lvl: {pokemon.level}
      </div>
      <div>
        <button onClick={() => onEdit(pokemon)} style={{ marginRight: '10px' }}>Editar</button>
        <button onClick={() => onDelete(pokemon.id)} style={{ backgroundColor: 'red', color: 'white' }}>Eliminar</button>
      </div>
    </div>
  );
}

export default PokemonItem;