import { useReducer } from "react";

const reducerr = (state, action) => {
    switch (action.type) {
        case "INCREM":
            return {counter: state.counter + 1, show : state.show}
        case "Visa" :
            return {counter: state.counter, show : !state.show}
        default :
        return state
    }
};
const Reducer  = () => {
    const [state, display] = useReducer(reducerr, {counter:0, show: true})

    return (
        <div>
            <h2>{state.counter}</h2>
            <button onClick={() => {
                display({ type : "INCREM"});
                display({ type : "Visa"})
                display({ type : "nån"})
            }}>Tryck knapp</button>
            {state.show && <p> Detta har vi skrivit</p>}
        </div>
      );
}
 
export default Reducer ;