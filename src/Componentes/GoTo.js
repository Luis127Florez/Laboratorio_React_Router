import { Objs } from "./Objs"
const{ Ada , Niklaus, Bill, James, Guido} = Objs()

function GoTo(params) {
    switch (params) {
        case "Ada Lovelace":
            window.location.href = `/Persona/?nombre=${Ada.nombre}&dess=${Ada.dess}`
            break;
        case "Niklaus Wirth":
            window.location.href = `/Persona/?nombre=${Niklaus.nombre}&dess=${Niklaus.dess}`
            break;
        case "Bill Gates":
            window.location.href = `/Persona/?nombre=${Bill.nombre}&dess=${Bill.dess}`
            break;
        case "James Goslin":
            window.location.href = `/Persona/?nombre=${James.nombre}&dess=${James.dess}`
            break;
        case "Guido Van Rossum":
            window.location.href = `/Persona/?nombre=${Guido.nombre}&dess=${Guido.dess}`
            break;
    }
   
}
export default GoTo