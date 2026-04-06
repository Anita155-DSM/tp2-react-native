import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors()); // Configuración de CORS
app.use(express.json()); // Uso de express.json()

// Base de datos en memoria
let pokemons = [
    { id: 1, name: 'Pikachu', type: 'Eléctrico', level: 25 },
    { id: 2, name: 'Bulbasaur', type: 'Planta/Veneno', level: 16 }
];

// Listar datos (GET)
app.get('/api/pokemons', (req, res) => {
    res.json(pokemons);
});

// Obtener un elemento por ID (GET)
app.get('/api/pokemons/:id', (req, res) => {
    const pokemon = pokemons.find(p => p.id === parseInt(req.params.id));
    if (!pokemon) {
        return res.status(404).json({ error: 'Pokémon no encontrado' }); // Manejo error 404
    }
    res.json(pokemon);
});

// Crear un elemento (POST)
app.post('/api/pokemons', (req, res) => {
    const { name, type, level } = req.body;
    
    // Validar campos obligatorios
    if (!name || !type || !level) {
        return res.status(400).json({ error: 'Todos los campos (name, type, level) son obligatorios' }); // Manejo error 400
    }

    const newId = pokemons.length > 0 ? Math.max(...pokemons.map(p => p.id)) + 1 : 1;
    const newPokemon = { id: newId, name, type, level };
    
    pokemons.push(newPokemon);
    res.status(201).json(newPokemon);
});

// Actualizar un elemento (PUT)
app.put('/api/pokemons/:id', (req, res) => {
    const { name, type, level } = req.body;
    const index = pokemons.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Pokémon no encontrado para actualizar' });
    }
    
    if (!name || !type || !level) {
        return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    pokemons[index] = { id: parseInt(req.params.id), name, type, level };
    res.json(pokemons[index]);
});

// Eliminar un elemento (DELETE)
app.delete('/api/pokemons/:id', (req, res) => {
    const index = pokemons.findIndex(p => p.id === parseInt(req.params.id));
    
    if (index === -1) {
        return res.status(404).json({ error: 'Pokémon no encontrado para eliminar' });
    }

    pokemons.splice(index, 1);
    res.json({ message: 'Pokémon eliminado exitosamente' });
});

app.listen(PORT, () => {
    console.log(`Servidor de Pokémon corriendo en http://localhost:${PORT}`);
});