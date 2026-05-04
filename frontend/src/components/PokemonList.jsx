import PokemonItem from './PokemonItem';
import { PokemonContext } from '../context/PokemonContext';
import { useContext } from 'react';

function PokemonList({ searchTerm, onEdit }) {
  // consumimos el estado global
  const { state } = useContext(PokemonContext);
    
  // filtramos la lista
  const filteredPokemons = state.pokemons.filter(
    p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) // Corregido: includes
  );

  // evaluamos filteredPokemons
  if (filteredPokemons.length === 0) {
    return <p className="pokemon-list-empty">No hay Pokémon en la lista.</p>;
  }

  return (
    <div>
      {filteredPokemons.map(pokemon => (
        <PokemonItem 
          key={pokemon.id} 
          pokemon={pokemon} 
          onEdit={onEdit} 
        />
      ))}
    </div>
  );
}

export default PokemonList;