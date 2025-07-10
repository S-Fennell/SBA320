import { useState } from "react"
import Axios from 'axios';

export default function DragonBall(){

    const[fighter, setfighter] = useState('')

    async function getData() {
  try {
    let response = await fetch(`https://dragonball-api.com/api/characters/1`);
    if (response.ok) {
      let data = await response.json();
      console.log(data.id, data.image);
      
      console.log(data.ki)
      console.log(data.name);
    } else {
      throw new Error("could not find fighter");
    }
    return;
  } catch (error) {
    console.error(error);
  }
}
  
    return(
        <div>
            <input type="text" />
            <button onClick={getData}>
                <h4>Get Z-Fighter</h4>
            </button>
            <input type="text" />
            <button>
                <h4>Radom Z-Fighter</h4>
            </button>
            <div className="imageDiv">
                <div className="imgDiv">
                    <img src="" alt=""/>
                </div>
                <div className="imgDiv">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}