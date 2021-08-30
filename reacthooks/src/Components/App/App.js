
import './App.css';
import Counter from '../Counter/Counter';
import  SmartCounter from '../SmartCounter/smartCounter';
import IfoodCounter from '../IfoodCounter/ifoodCounter';


function App() {
  return (

    <div className="App">
          <h1> Hooks!</h1><p></p>
          <h2>Contados Simples ("SEM" usar hooks)</h2>
         <Counter/>
            <>
              <p/>__________________________________________________<p/>
              <h2>Contador Simples ("COM" uso de hooks)</h2>
              <h3>Foi criado outra função  - "function SmartCounter" </h3>
                <SmartCounter/>
            </>
        <>
            <p/>__________________________________________________<p/>
              <h2>Contador usado pleo "Ifood" - ("COM" uso de hooks)</h2>
              <IfoodCounter/>
          </>

    </div>
    
     

  );
}

export default App;
