
// Importando o useState

import { useState } from 'react';

function SmartCounter (){

    // Retorna um "VETOR"
    // 1. É uma variavel "STATEFULL"
    // 2. A "FUNÇÃO" é amarrada a está variavel que atualiza o valor ( atualizaQuantity )

    const [quantity, atualizaQuantity] = useState(0);

    return (

        <>
            <h1 id="smartCounter"> {quantity}</h1>
            <button id= "mais" onClick= { ()=>  atualizaQuantity ( quantity  + 1 ) }> + </button>
            <button id= "menos" onClick= { ()=>  atualizaQuantity ( quantity  - 1 ) }>  - </button>
        </>
    )

}

export default SmartCounter;