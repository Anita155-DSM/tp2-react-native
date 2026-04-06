import { Router } from 'express';

import {
  createPokemon,
  deletePokemon,
  getPokemonById,
  getPokemons,
  updatePokemon
} from '../controllers/pokemon.controllers.js';

const router = Router();

router.get('/', getPokemons);
router.get('/:id', getPokemonById);
router.post('/', createPokemon);
router.put('/:id', updatePokemon);
router.delete('/:id', deletePokemon);

export default router;