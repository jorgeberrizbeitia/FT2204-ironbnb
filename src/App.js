import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import AptList from "./pages/AptList"
import AptDetails from "./pages/AptDetails"
import AptForm from "./pages/AptForm"
import Error from "./pages/Error"
import NotFound from "./pages/NotFound"

import { useState, useContext } from "react"
import { ThemeContext } from "./context/theme.context"

function App() {

  const { toggleDarkMode, darkMode, darkTheme, lightTheme, btnDarkTheme, btnLightTheme } = useContext(ThemeContext)

  return (
    <div className="App" style={darkMode === true ? darkTheme : lightTheme}>

      <button onClick={toggleDarkMode} style={darkMode === true ? btnDarkTheme : btnLightTheme}>Cambiar Tema</button>

      <Navbar />

      <hr />

      <Routes>

        <Route path="/" element={ <Home/> }/>
        <Route path="/pisos" element={ <AptList/> }/>
        <Route path="/pisos/:id/details" element={ <AptDetails/> }/>
        <Route path="/pisos/add-form" element={ <AptForm/> }/>

        {/* rutas de errores */}
        <Route path="/error" element={ <Error/> }/>
        <Route path="*" element={ <NotFound/> }/>

      </Routes>


    </div>
  );
}

export default App;
