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

function App() {
  return (
    <div className="App">

      <Navbar />

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
