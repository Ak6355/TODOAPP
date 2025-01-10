import React ,{useState}from "react";
const CounterComponent = () => {
    const [count,setCount] = useState(1);
   

    return(
        <div>
            <p>Count Component - {count} </p>
            <h6> Num is {count%2===0 ? "EVEN":"ODD"}</h6>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        
        </div>

    );
};
export default CounterComponent;
