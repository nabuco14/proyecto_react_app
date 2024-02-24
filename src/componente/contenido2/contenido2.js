import { useState } from 'react';
import './contenido2.css'

export default function Contenido2(){

    const [numero1, setNumero1] = useState(0)
    const [numero, setNumero] = useState(0)

    return(
        <main id="contenido2">

            <div class="item">
            <   span>Id      </span>
                <input onChange={(e) => setNumero1(e.target.value)}  type='number'></input>               
            </div>
            
            <div >
                <span>Id_cliente </span>
                <input onChange={(e) => setNumero1(e.target.value)}  type='text'></input>
            </div>
          
            <div class="item2">
            <   span>Nombre      </span>
                <input onChange={(e) => setNumero1(e.target.value)}  type='text'></input>               
            </div>

            <div >
            <   span>Valor      </span>
                <input onChange={(e) => setNumero1(e.target.value)}  type='number'></input>               
            </div>
                    
        </main>      
           
    );

} 