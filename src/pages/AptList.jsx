import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

import PropagateLoader from "react-spinners/PropagateLoader";

function AptList() {

  // configurar el acceso de navegacion
  const navigate = useNavigate()

  // 1. crear el estado que va a guardar la informacion
  const [ listaPisos, setListaPisos ] = useState(null)
  const [ buscando, setBuscando ] = useState(true)

  // 2. acceder al componentDidMount que va a buscar la informacion en la API
  useEffect(() => {
    getListaPisos()
  }, [])

  // 3. Crear la funcion que será invocada en componentDidMoun => concta con la API
  const getListaPisos = async () => {
    // ... aqui buscamos la data y la subimos al estado
    try {

      const response = await axios.get("https://ironbnb-m3.herokuapp.com/apartments")
      console.log(response)
      // setTimeout(() => {
        setListaPisos(response.data)
        setBuscando(false)
      // }, 2000)
    } catch (error) {
      // redirijimos a esa pagina de /error
      navigate("/error")
    }
  }

  // 4. crear efecto de Loading
  if (buscando === true) {
    return <PropagateLoader color={"green"}/>
  }

  return (
    <div>
    
      {
        listaPisos.map((eachPiso) => {
          return (
            <li key={eachPiso._id}>
              <Link to={`/pisos/${eachPiso._id}/details`}>{eachPiso.title}</Link>
            </li>
          )
        })
      }
    
    </div>
  )
}

export default AptList