# TP2 - Gestion de Equipo Pokemon

Aplicacion fullstack para gestionar Pokemones con CRUD.

- Backend: Node.js + Express + Sequelize + MySQL
- Frontend: React + Vite

## Ramas y objetivo

- `main`: rama estable del TP2 (base CRUD completa).
- `develop-tp3`: rama de desarrollo para la implementacion del TP3 (evolucion del proyecto sobre la base de TP2).
- `develop`, `develop2`: ramas de trabajo/intermedias usadas durante el desarrollo.

## Inicializacion por rama

### 1) Rama `main` (TP2 estable)

1. Cambiar a la rama:

```bash
git checkout main
```

2. Configurar variables del backend:

```bash
cd backend
copy .env.example .env
```

3. Instalar dependencias y levantar backend:

```bash
cd backend
npm install
npm run dev
```

Backend en: http://localhost:4000

4. Instalar dependencias y levantar frontend:

```bash
cd frontend
npm install
npm run dev
```

Frontend en: http://localhost:5173

### 2) Rama `develop-tp3` (implementacion TP3)

1. Cambiar a la rama:

```bash
git checkout develop-tp3
```

2. Actualizar el codigo local de la rama:

```bash
git pull origin develop-tp3
```

3. Repetir la inicializacion de backend y frontend:

```bash
cd backend
copy .env.example .env
npm install
npm run dev
```

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

Nota: esta rama contiene los cambios del TP3, por lo que puede incluir funcionalidades en desarrollo o diferencias respecto de `main`.

## Requisitos de entorno

- Node.js 18+
- MySQL activo en local
- Base de datos creada (por defecto: `pokemon_db`, configurable en `backend/.env`)

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