import PokemonItem from './PokemonItem';
import { PokemonContext } from '../context/PokemonContext';
import { useContext, useMemo } from 'react';

function PokemonList({ searchTerm, onEdit }) {
  // consumimos el estado global
  const { state } = useContext(PokemonContext);
  
  // Referencia (antes, sin memo): aca tenemos la misma constante, nada mas que ahora usando memo la envolvemos
  // const filteredPokemons = state.pokemons.filter(
  //   p => p.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // Memoizamos el filtrado para evitar recalcular en renders sin cambios relevantes.
  const filteredPokemons = useMemo( //usamos useMemo porq tenemos una lista(lista pokemon)
    () => state.pokemons.filter(
      p => p.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [state.pokemons, searchTerm]
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