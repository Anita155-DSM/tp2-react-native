import { PokemonModel } from '../models/pokemon.model.js';

export async function getPokemons(req, res) {
  try {
    const pokemons = await PokemonModel.findAll({ order: [['id', 'ASC']] });
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los Pokémon' });
  }
}

export async function getPokemonById(req, res) {
  try {
    const pokemon = await PokemonModel.findByPk(req.params.id);

    if (!pokemon) {
      return res.status(404).json({ error: 'Pokémon no encontrado' });
    }

    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el Pokémon' });
  }
}

export async function createPokemon(req, res) {
  try {
    const { name, type, level } = req.body;
    const levelNumber = Number(level);

    if (!name || !type || Number.isNaN(levelNumber)) {
      return res.status(400).json({ error: 'Los campos name, type y level son obligatorios' });
    }

    const pokemon = await PokemonModel.create({
      name: name.trim(),
      type: type.trim(),
      level: levelNumber
    });

    res.status(201).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: 'No se pudo crear el Pokémon' });
  }
}

export async function updatePokemon(req, res) {
  try {
    const pokemon = await PokemonModel.findByPk(req.params.id);

    if (!pokemon) {
      return res.status(404).json({ error: 'Pokémon no encontrado para actualizar' });
    }

    const { name, type, level } = req.body;
    const levelNumber = Number(level);

    if (!name || !type || Number.isNaN(levelNumber)) {
      return res.status(400).json({ error: 'Los campos name, type y level son obligatorios' });
    }

    await pokemon.update({
      name: name.trim(),
      type: type.trim(),
      level: levelNumber
    });

    res.json(pokemon);
  } catch (error) {
    res.status(400).json({ error: 'No se pudo actualizar el Pokémon' });
  }
}

export async function deletePokemon(req, res) {
  try {
    const pokemon = await PokemonModel.findByPk(req.params.id);

    if (!pokemon) {
      return res.status(404).json({ error: 'Pokémon no encontrado para eliminar' });
    }

    await pokemon.destroy();
    res.json({ message: 'Pokémon eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar el Pokémon' });
  }
}