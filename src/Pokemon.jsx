import { useState } from "react"
import Axios from 'axios';

export default function PokeMon(){

    const [pokemon, setPokemon] = useState('')
    const [pokemonStat, setPokeStats] = useState('')

    const search =()=>{
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response)=>{
            setPokemon({name: pokemon, })
            console.log(response)
        })
    }
    return(
        <div>
            <input className="pokeClass" type="text" onChange={(event)=>{
                setPokemon(event.target.value)
            }} />
            <button onClick={search} className="searchBTN">Search Character</button>
        </div>
    )
}