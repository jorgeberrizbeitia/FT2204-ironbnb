import React, { useEffect, useState } from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios';

function AptDetails() {

  // 1. creamos el estado
  const [ pisoDetails, setPisoDetails ] = useState(null)
  const [ buscando, setBuscando ] = useState(true)
  
  const { id } = useParams()
  const navigate = useNavigate()

  // 2. componentDidMount
  useEffect(() => {
    getPisoDetails()
  }, [])
  
  // 3. llamar a la API
  const getPisoDetails = async () => {
    try {
      const response = await axios.get(`https://ironbnb-m3.herokuapp.com/apartments/${id}`)
      console.log(response.data)
      setPisoDetails(response.data)
      setBuscando(false)
    } catch (error) {
      navigate("/error")
    }
  }

  // 4. Loading
  if (buscando === true) {
    return <PropagateLoader color={"green"}/>
  }

  return (
    <div>
    
      <h2>{pisoDetails.title}</h2>
      <img src={pisoDetails.img} alt="piso" width={"300px"}/>
      <p>Precio: {pisoDetails.pricePerDay}</p>
    
    </div>
  )
}

export default AptDetails