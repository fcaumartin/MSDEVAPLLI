
function MonComposant (props) {

    return (
        <div>
            test
            {props.nom} 
            {props.couleur} 
            {props.bordure?"avec bordure":"sans bordure"} 

        </div>
    )
}


export default MonComposant;