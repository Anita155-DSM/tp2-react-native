import { DataTypes } from 'sequelize';

import { sequelize } from '../config/database.js';

export const PokemonModel = sequelize.define(
  'pokemon',
  {
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    type: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 1
      }
    }
  },
  {
    timestamps: false
  }
);

const initialPokemons = [
  { name: 'Pikachu', type: 'Eléctrico', level: 25 },
  { name: 'Bulbasaur', type: 'Planta/Veneno', level: 16 }
];

export async function seedPokemons() {
  const count = await PokemonModel.count();

  if (count === 0) {
    await PokemonModel.bulkCreate(initialPokemons);
  }
}