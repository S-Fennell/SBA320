

export default function DragonBall(){

    async function getData() {
  try {
    let response = await fetch(`https://dragonball-api.com/api/characters/${Math.floor(Math.random()*9+1)}`);
    if (response.ok) {
      let data = await response.json();
      console.log(data.id, data.image);
      console.log(data.ki)
      console.log(data.name);
      const image = data.image
    } else {
      throw new Error("could not find fighter");
    }
        return;
    } catch (error) {
        console.error(error);
        }
    }

    return(
        <>
        <div>{image}</div>
        </>
    )
}