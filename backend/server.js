import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import pokemonRoutes from './src/routes/pokemon.routes.js';
import { sequelize } from './src/config/database.js';
import { seedPokemons } from './src/models/pokemon.model.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/pokemons', pokemonRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await seedPokemons();

    app.listen(PORT, () => {
      console.log(`Servidor de Pokémon corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo iniciar el servidor:', error);
    process.exit(1);
  }
}

startServer();