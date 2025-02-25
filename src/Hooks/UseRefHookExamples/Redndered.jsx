import { useEffect, useRef, useState } from "react";

function Redndered(){
    const[value,setValue]=useState(0);
    const count =useRef(0);
    useEffect(()=>{
        count.current = count.current + 1;
    });

    //const[count,setCount]=useState(0);
    {/*useEffect(()=>
    setCount((count)=>count+1)) */}
    //it automatically renders infinite time
    return(
        <>
        <button onClick={()=>setValue(value=>value+1)}>Increment</button>
        <h2>{value}</h2>
        <button onClick={()=>setValue(value=>value-1)}>Decrement</button>
        <h2>I have rendered:{count.current}</h2>
        </>
    )
}
export default Redndered;