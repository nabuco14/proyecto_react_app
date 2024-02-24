import { useState } from 'react';
import './contenido.css'

export default function Contenido(){

    const [numero1, setNumero1] = useState(0)
    const [numero, setNumero] = useState(0)

    return(
        <main id="contenido">

            <div class="item">
            <   span>Id      </span>
                <input onChange={(e) => setNumero1(e.target.value)}  type='number'></input>               
            </div>
            
            <div >
                <span>Nombre </span>
                <input onChange={(e) => setNumero1(e.target.value)}  type='text'></input>
            </div>
          
            <div class="item2">
            <   span>Sexo      </span>
                <input onChange={(e) => setNumero1(e.target.value)}  type='text'></input>               
            </div>

            <div >
            <   span>Identificación      </span>
                <input onChange={(e) => setNumero1(e.target.value)}  type='number'></input>               
            </div>

            <div class="item5">
            <   span>Fecha_nacimiento      </span>
                <input onChange={(e) => setNumero1(e.target.value)}  type='date' class="finp"></input>               
            </div>

            <div>
            <button onClick={() => setNumero(numero + 1)}>Registrar</button>
                
            </div>
                    
        </main>

        
           
    );

} 