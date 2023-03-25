import "../components/assets/Pokemones.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


function Pokemones () {
    const navigate = useNavigate();
    const [listaPokemon, setListaPokemon] = useState ([])
    const [nombrePokemon, setNombrePokemon] = useState ("")


    const consultaLista = async () =>  {
        const peticion = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9")
        const resultado = await peticion.json()
        setListaPokemon(resultado.results)
        
    };

    useEffect (() => {
        consultaLista()
    },[])

    const buscaPokemon = (nombre) => {
        navigate(`/pokemon/${nombre}`)
    }    

   
    return (
        <div className="contFormulario">
            <div className="formulario">
                <span><strong>Selecciona un pokemon</strong></span>
                <select onChange={({target}) => setNombrePokemon(target.value)}>
                    <option value={false}>Pokemones</option>
                  {listaPokemon.map((item, index) => (
                       <option key={index} value = {item.name}>{item.name}</option>
                    ))}
                </select>
                <button onClick={() => nombrePokemon && nombrePokemon != 'false' ?  buscaPokemon(nombrePokemon) : ''}>Ver detalle</button>
            </div>
        </div>
    )


}

export default Pokemones