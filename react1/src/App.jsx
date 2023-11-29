import MonComposant from "./Composants/MonComposant"


const App = () => {

  const nom = "Bill"
  const prenom = "Jack"

  const en_anglais = true

  const liste = ["aa", "bb", "aa", "dd", "ee"]
  
  return (
    <>
      <div className="engras">
        Coucou
      </div>

      <MonComposant couleur="red" bordure={true} nom={nom}/>

      <div> 
        {en_anglais?(<div>Hello</div>):(<div>Bonjour</div>)} 
        {nom} {prenom}
      </div>

      {
        liste.map( 
          (element, index)=>(
            <div key={index}>
              {index} - {element}
            </div>
          ) 
        )
      }
    </>
  );
}

export default App;
