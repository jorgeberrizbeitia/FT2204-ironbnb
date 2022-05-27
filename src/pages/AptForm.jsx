import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"

import { ThemeContext } from "../context/theme.context"

function AptForm() {

  // context
  const { darkMode, btnDarkTheme, btnLightTheme } = useContext(ThemeContext)

  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [pricePerDay, setPricePerDay] = useState(0);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleImgChange = (e) => setImg(e.target.value);
  const handlePricePerDay = (e) => setPricePerDay(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      
      // donde vamos a enviar la info para crear un nuevo piso

      const nuevoPiso = {
        title,
        img,
        pricePerDay
      }

      await axios.post("https://ironbnb-m3.herokuapp.com/apartments", nuevoPiso)
      navigate("/pisos")

    } catch (error) {
      navigate("/error")
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />

        <br />

        <label htmlFor="img">Imagen</label>
        <input 
          type="text" 
          name="img" 
          value={img} 
          onChange={handleImgChange} 
        />

        <br />

        <label htmlFor="pricePerDay">Precio por día</label>
        <input
          type="number"
          name="pricePerDay"
          value={pricePerDay}
          onChange={handlePricePerDay}
        />

        <br />

        <button style={darkMode === true ? btnDarkTheme : btnLightTheme}>Agregar</button>
      </form>
    </div>
  );
}

export default AptForm;
