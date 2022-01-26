import { useState } from "react";

const VisaState = () => {
    const [inputValue, setinputValue] = useState();

    let onChange = (event) => {
        const newValue = event.target.value;
        setinputValue(newValue);
    };
    return ( 
        <div>
            
             
             <input placeholder="skriva nånting" onChange={onChange}/>
             {inputValue}
        </div>
     );
}
export default VisaState;