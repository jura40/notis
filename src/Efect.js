import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Efect () {
    const [data, setData] = useState("");
    const [counter, setCounter] = useState(0);
    useEffect (() => {
        axios
        .get
        ("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data[6].body);
            console.log(response.data);
        });
    } ,[]);
    
    return (
        <div>Hej du 
            <h2>{data}</h2>
            <h3>{counter}</h3>
            <button onClick={() => {
                setCounter(counter +1);
            }}>
                plus</button>
                
                
        </div>
      );
}
 
export default Efect;

