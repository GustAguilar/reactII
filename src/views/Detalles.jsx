import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "../components/assets/Detalles.css"

export default function Detalles () {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState()

    const consultaPokemon = async () => {
        const peticion = await fetch(` https://pokeapi.co/api/v2/pokemon/${name}`)
        const respuesta = await peticion.json()
        setPokemon(respuesta)
        console.log(respuesta)
    }

    useEffect(()=> {
        consultaPokemon()
    },[])

    return (
    <div className="contenedorCard">
        
        <div className="pokemonCard">
                <img  src={`${pokemon?.sprites.other["official-artwork"].front_default}`} />
                <ul>
                 <h3>{name}</h3>
                    {pokemon?.stats.map((item, index) => (
                    <li key={index}>{item.stat.name}: {item.base_stat}</li>
                    ))}
                </ul>
        </div>
        <Link to="/pokemones">
            <button className="botonRegresar">Regresar</button>
        </Link>
   </div>
    )
}