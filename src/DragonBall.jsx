import { useState } from "react"
// too many things don't work. Seems like this api doesn't work the same
export default function DragonBall(){

    const[fighter, setfighter] = useState('')
    const[fighterChosen, setFighterChosen] = useState(false)

    async function getData() {
        try {
          const response = await fetch(`https://dragonball-api.com/api/characters/1`);
          if (response.ok) {
            const data = await response.json();
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
  getData()
    return(
        <div>
          <h2>Got to add a numbers 1 thruough 9 to see fighters</h2>
          <h3>fighters only show up in the console log. api has limitations with filter</h3>
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
                    {/* <img src="" alt=""/> */}
                </div>
                <div className="imgDiv">
                  <h1></h1>
                    {/* <img src="" alt="" /> */}
                </div>
            </div>
        </div>
    )
}