import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

function AptList() {

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
      setListaPisos(response.data)
      setBuscando(false)
    } catch (error) {
      
    }
  }

  // 4. crear efecto de Loading
  if (buscando === true) {
    return <h3>...Loading</h3>
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