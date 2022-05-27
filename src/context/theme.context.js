import { createContext, useState } from "react";

const ThemeContext = createContext()

function ThemeWrapper(props) {

  // ... todos los estados o variables o funciones que queremos exportar
  // ... toda nuestra app puede tener acceso a todo esto 
  const [ darkMode, setDarkMode ] = useState(false)

  const darkTheme = {
    backgroundColor: "black",
    color: "darkgray"
  }

  const lightTheme = {
    backgroundColor: "white",
    color: "black"
  }

  const btnDarkTheme = {
    backgroundColor: "greenyellow",
    color: "black"
  }

  const btnLightTheme = {
    backgroundColor: "lightseagreen",
    color: "darkgray"
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const passedContext = {
    toggleDarkMode,
    darkMode,
    darkTheme,
    lightTheme,
    btnDarkTheme,
    btnLightTheme
  }


  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export { ThemeWrapper, ThemeContext }