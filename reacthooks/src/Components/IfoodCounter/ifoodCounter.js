import React,{useState} from 'react'
import '../IfoodCounter/ifoodCounter.css'

export default function IfoodCounter() {

    const [value, setValue] = useState(0)
    // CSS -> do button "-"
    const [ buttonStyle, setButtonStyle ] = useState("counter-button-minus-active")

        function up(){
            setValue(value +1)
            setButtonStyle ("counter-button-minus-active")
        }

        function down(){

            if(value <=1){

                setButtonStyle ("counter-button-minus-desative")
            }

            if( value > 0){ setValue(value -1) 
            } 
        }
/* --------------------------------------------------------------------------------- */
    return (
        <div className= "counter-wrapper">
            <center>
                <button 
                    className={buttonStyle}
                    onClick={down}
                >
                            -     {/*   sinal de MENOS */}
                </button>

                    <p>{value}</p>
                    
                <button
                    className="counter-button-plus-active"
                    onClick={up}
                >               
                           +       {/*   sinal de MAIS */}
                </button>
            </center>
        </div>
    )
}
