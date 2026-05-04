// frontend/src/context/pokemonReducer.js

export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POKEMONS':
      // carga inicial de datos desde el backend
      return {
        ...state,
        pokemons: action.payload,
      };
    case 'ADD_POKEMON':
      // agrega un nuevo elemento a la lista
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    case 'UPDATE_POKEMON':
      // mapea y reemplaza el elemento editado
      return {
        ...state,
        pokemons: state.pokemons.map((pokemon) =>
          pokemon.id === action.payload.id ? action.payload : pokemon
        ),
      };
    case 'DELETE_POKEMON':
      // fltra y elimina el elemento por ID
      return {
        ...state,
        pokemons: state.pokemons.filter((pokemon) => pokemon.id !== action.payload),
      };
    default:
      return state;
  }
};