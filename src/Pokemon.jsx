import { useState } from "react"
import Axios from 'axios';

export default function PokeMon(){

    const [pokemonName, setPokemonName] = useState('')
    const [pokemonChosen, setPokemonChosen] = useState(false)
    const [pokemon, setPokemon] = useState({
        name:"",
        species:"",
        img:"",
        hp:"",
        attack:"",
        defense:"",
        type:""
    });

    const searchPokemon =()=>{
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=>{
           setPokemon({
            name: pokemonName, 
            species: response.data.species.name,
            img: response.data.sprites.front_default, 
            hp: response.data.stats[0].base_stat,
            type: response.data.types[0].type.name
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
                { !pokemonChosen ? (<h2>Choose Your Pokemon</h2> ) : (<div>
                    <img src={pokemon.img}/> 
                    <h1>{pokemon.name}</h1>
                    <h2>Species: {pokemon.species} </h2>
                    <h2>Type: {pokemon.type} </h2>
                    <h2>Hit Points: {pokemon.hp} </h2>
                
                    </div>) }
            </div>
        </div>
      
    )
}