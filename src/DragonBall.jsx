import { useState } from "react"
import Axios from 'axios';

export default function DragonBall(){


    const [zFighter, setZfighter] = useState('')
    const [fighter, setFighter] = useState('')

    const search =()=>{
        Axios.get(`https://www.dragonball-api.com/api/characters${zFighter}`).then((response)=>{
        //  setZfighter({name: zFighter})
            console.log(response)
        })
    }
    return(
        <div>
            <input className="pokeClass" type="text" onChange={(event)=>{
             setZfighter(event.target.value)
            }} />
            <button onClick={search} className="searchBTN">Search Character</button>
        </div>
    )
}