import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { PokemonProvider } from './context/PokemonContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PokemonProvider>
    <App />
    </PokemonProvider>
  </StrictMode>
)
