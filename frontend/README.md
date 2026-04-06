# React + Vite

## Conexion con backend

Este frontend consume la API en la ruta relativa `/api/pokemons`.
En desarrollo, Vite redirige automaticamente `/api` al backend en `http://localhost:4000` usando `server.proxy`.

Pasos simples:

1. Levantar backend en puerto 4000.
2. Levantar frontend con `npm run dev`.
3. Usar la app normalmente; las llamadas CRUD van al backend sin cambiar el codigo del frontend.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
