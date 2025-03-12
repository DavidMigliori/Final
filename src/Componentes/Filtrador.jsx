
import { useEffect, useState } from "react"
export const Filtrador =({count}) => {
    const [personajes, setpersonajes] = useState ([])

    const obtenerPersonajes = async() => {
        let response = await fetch ("https://rickandmortyapi.com/api/character/?name="+count)
        let data = await response.json()
        setpersonajes(data.results)
    }}
     useEffect (()=>{
        obtenerPersonajes()
    }, [count])