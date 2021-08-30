// import SmartCounter from "../SmartCounter/smartCounter";

function Counter1 () {

    let numeroSoma = 0;

    function upSoma() {
       numeroSoma = numeroSoma + 1;
       document.getElementById("counter-box").innerHTML = numeroSoma;
       console.log(numeroSoma);
    }

    function dowSoma() {
        numeroSoma = numeroSoma - 1;
        document.getElementById("counter-box").innerHTML = numeroSoma;
        console.log(numeroSoma);
     }

    return (
// <> e </> é o fragmente -> como uma < div >

        <> 
            <h1 id="counter-box"> {numeroSoma}</h1>

                <div >
                    <button id="Aumenta" onClick={upSoma}>Aumenta</button>
                    <button id="Diminui"onClick={dowSoma}>Diminui</button>
                </div>
        </>
    )
}



export default  Counter1;