import { useEffect, useState } from "react";


const Form = () => {

  const [nom, setNom] = useState("init")
  
  const handleChange = (event) => {
    setNom(event.target.value)
  }

  console.log("le composant Form s'affiche")

  useEffect(()=>{
    console.log("chargement du composant Form...")
  },[])

  useEffect(()=>{
    console.log("modification du state nom...")
  },[nom])

  return (
    <div className="bordure">
      <input type="text" value={nom} onChange={handleChange}/>
      <br/>
      <span>{nom}</span>

    </div>
  );
}

export default Form;
