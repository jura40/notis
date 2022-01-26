import axios from "axios";
import {useEffect, useState} from 'react';

function Efecter () {
    const [amir, setAmir] = useState('');
    const [counter, setCounter] = useState(0);
useEffect (() => {
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then ((response) => {
        setAmir(response.data[5].email);
        console.log('api call');

        
    });
},  [] );

    return ( 
    <div> 
         skriva den här 
         <h2>{amir}</h2>
         <h3>{counter}</h3>
         <button 
         onClick={() =>{
             setCounter (counter + 2);
         }}>
             Namn
         </button>
         <div> När det refresh</div>
         </div>
         );
     
}
 
export default Efecter;