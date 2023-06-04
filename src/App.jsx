import { createContext, useContext, useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { mainTheme, dark, light } from './styles/themes'
import { ThemeProvider } from '@mui/material'

const ThemeContext = createContext({theme:{}});

export const useMyTheme = () => useContext(ThemeContext);

function App() {
  const [theme,setMyTheme] = useState(mainTheme);
  return (
    <>
    <ThemeContext.Provider value={{theme,setMyTheme}}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>  
    </ThemeContext.Provider>
    
    </>
  )
}

export default App
