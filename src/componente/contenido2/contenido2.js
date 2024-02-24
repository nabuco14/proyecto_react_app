import { useState } from 'react';
import './contenido2.css'

export default function Contenido2(){

    const [id, setId] = useState(0)
    const [id_cliente, setId_cliente] = useState(0)
    const [nombre, setNombre] = useState(0)
    const [valor, setValor] = useState(0)
    const [numero, setNumero] = useState(0)

    return(
        <main id="contenido2">
            <span> Registro Producto</span>
            <br></br>
            <div class="item">
            <   span>Id      </span>
                <input onChange={(e) => setId(e.target.value)}  type='number'></input>               
            </div>
            
            <div >
                <span>Id_cliente </span>
                <input onChange={(e) => setId_cliente(e.target.value)}  type='text'></input>
            </div>
          
            <div class="item2">
            <   span>Nombre      </span>
                <input onChange={(e) => setNombre(e.target.value)}  type='text'></input>               
            </div>

            <div >
            <   span>Valor      </span>
                <input onChange={(e) => setValor(e.target.value)}  type='number'></input>               
            </div>

            <div>
            <button onClick={() => setNumero(numero + 1)}>Registrar</button>              
            </div>
                    
        </main>      
           
    );

} 