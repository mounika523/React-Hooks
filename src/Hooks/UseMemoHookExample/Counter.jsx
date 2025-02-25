import { useMemo, useState } from "react";

function Counter(){
    const[number,setNumber] = useState(0);
    const[counter,setCounter]=useState(0);
    function cube(number){
        console.log('calculation done!');
        return Math.pow(number, 3);
        
    }
    //const result = cube(number) both function and counter renders when counter changes to stop this we use useMemo hook
    //it only excutes when vriable changes
    const result = useMemo(()=>{return cube(number)},[number])

    return(
        <>
        <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <h1>Cube value:{result}</h1>
        <button onClick={()=>setCounter(counter+1)}>Counter++</button>
        <h1>Counter:{counter}</h1>
        </>
    )
}
export default Counter;