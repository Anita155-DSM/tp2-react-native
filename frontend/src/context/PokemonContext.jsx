// frontend/src/context/PokemonContext.jsx
import { createContext, useReducer } from 'react';
import { pokemonReducer } from './pokemonReducer';

// primero creamos el contexto
export const PokemonContext = createContext();

// estado inicial, se puede poner un array vacío o podemos poner acá los datos iniciales si no tenemos back
const initialState = {
  pokemons: []
};

// creamos el componente Provider
export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};