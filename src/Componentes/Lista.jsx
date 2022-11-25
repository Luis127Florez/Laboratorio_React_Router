import GoTo from "./GoTo"

function Lista() {

    return(
            <div>
                <ol>
                    <li onClick={()=>GoTo("Ada Lovelace")}>Ada Lovelace</li>
                    <li onClick={()=>GoTo("Niklaus Wirth")}>Niklaus Wirth</li>
                    <li onClick={()=>GoTo("Bill Gates")}>Bill Gates</li>
                    <li onClick={()=>GoTo("James Goslin")}>James Gosling</li>
                    <li onClick={()=>GoTo("Guido Van Rossum")}>Guido Van Rossum</li>
                </ol>
            </div>
        )   
}
export default Lista
