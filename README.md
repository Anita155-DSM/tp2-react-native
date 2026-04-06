# TP2 - Gestion de Equipo Pokemon

Aplicacion fullstack para gestionar Pokemones con CRUD.

- Backend: Node.js + Express + Sequelize + MySQL
- Frontend: React + Vite

## Inicializacion (breve)

1. Configurar variables del backend:

```bash
cd backend
copy .env.example .env
```

2. Instalar y levantar backend:

```bash
cd backend
npm install
npm start
```

Backend en: http://localhost:4000

3. Instalar y levantar frontend:

```bash
cd frontend
npm install
npm run dev
```

Frontend en: http://localhost:5173

Nota: el frontend usa `/api` y Vite lo redirige al backend (`http://localhost:4000`) en desarrollo.

## Estructura de carpetas

```text
tp2-react-native/
|-- README.md
|-- backend/
|   |-- .env.example
|   |-- .gitignore
|   |-- package.json
|   |-- package-lock.json
|   |-- server.js
|   `-- src/
|       |-- config/
|       |   `-- database.js
|       |-- controllers/
|       |   `-- pokemon.controllers.js
|       |-- models/
|       |   `-- pokemon.model.js
|       `-- routes/
|           `-- pokemon.routes.js
`-- frontend/
    |-- package.json
    |-- package-lock.json
    |-- vite.config.js
    |-- index.html
    |-- public/
    `-- src/
        |-- App.jsx
        |-- main.jsx
        `-- components/
            |-- PokemonForm.jsx
            |-- PokemonItem.jsx
            |-- PokemonList.jsx
            `-- SearchFilter.jsx
```
## Autor: PEREZ ANAHI JACQUELINE