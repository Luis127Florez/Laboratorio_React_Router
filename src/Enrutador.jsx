import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lista from "./Componentes/Lista"
import Persona from './Componentes/Personas/Persona';

function Enrutador() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Lista/>}/>
                <Route path="/Persona" element={<Persona/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Enrutador