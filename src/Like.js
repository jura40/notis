import { useState } from "react/cjs/react.development";


const Likes = () => {
    const [counter, setCounter] = useState(0);
    const saldo = () => {
        setCounter(counter + 1);
        
    };
    return ( 
        <div>
            {counter}
            <button onClick={saldo} >Likes</button>
        </div>
     );
};
 
export default Likes;