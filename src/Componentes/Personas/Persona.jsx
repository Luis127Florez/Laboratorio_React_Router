function Persona() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const Nombre = urlParams.get('nombre');
    const Dess = urlParams.get('dess');
    function retorno() {
        window.location.href ="/"
        
    }

    return(
        <div>
            <h2>{Nombre}</h2>
            <br/>
            <p> {Dess} </p>
            <br />
            <button onClick={retorno}>Atras</button>
        </div>
    )
}
export default Persona