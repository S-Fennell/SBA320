import { useState } from "react"
import Axios from 'axios';

export default function PokeMon(){

    const [pokemonName, setPokemonName] = useState('')
    const [pokemonChosen, setPokemonChosen] = useState(false)
    const [pokemon, setPokemon] = useState('');

    const searchPokemon =()=>{
        Axios.get(`https://dragonball-api.com/api/characters/${pokemon}`).then((response)=>{
           setPokemon({
            
        })
            setPokemonChosen(true);
            console.log(response)
        })
    }
    return(
        <div>
            <input className="pokeClass" type="text" onChange={(event)=>{setPokemonName(event.target.value)
            }} />
            <button onClick={searchPokemon} className="searchBTN">Search Pokemon</button>

            <div className="displaysection">
              <img src={data.img}/> 
            </div>
        </div>
      
    )
}