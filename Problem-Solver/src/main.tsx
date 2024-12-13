import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "@styles/main.scss"
import { MainContextProvider } from './context/Main.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
    <Toaster />
  </StrictMode>
);
