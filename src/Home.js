import { useState } from "react";
import Efect from "./Efect";

const Home = () => {
    //let namn = 'Lotta'
    const [namn, setName] = useState('Lotta');
    const [age, setAge] = useState(29);
    const knappClick =() => {
        setName ('Tina');
        setAge(18);
    }
    
    
    
    
    
    return ( 
        <div className="home">
            <h3>HomePage</h3>
            <p>{namn} är {age} år gammal.</p>
            <button onClick = {knappClick}> Click me</button>
            
        </div>
     );
}
 
export default Home;

