import { useState } from "react";
import Form from "./Form";


const App = () => {

  const [nom, SetNom] = useState("au début...")

  const handleClick = () => {
    console.log("clique")
    SetNom("j'ai cliqué")
  }
  
  return (
    <>
      <div className="engras">
        <Form />
        <Form />
        {nom}
        <button onClick={handleClick}>Clique moi !</button>
      </div>

    </>
  );
}

export default App;
