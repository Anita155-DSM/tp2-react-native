import PokemonItem from './PokemonItem';

function PokemonList({ pokemons, onEdit, onDelete }) {
  if (pokemons.length === 0) return <p className="pokemon-list-empty">No hay Pokémon en la lista.</p>;

  return (
    <div>
      {pokemons.map(pokemon => (
        <PokemonItem 
          key={pokemon.id} 
          pokemon={pokemon} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}

export default PokemonList;
