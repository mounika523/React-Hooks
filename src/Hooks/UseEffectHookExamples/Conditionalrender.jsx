import { useState, useEffect } from "react";

function Conditionalrender(){

    const[count,setCount] = useState(0);
    const[name, setName] = useState(0);
    useEffect(()=>{
        console.log("useEffect--updating")
        document.title=`You clicked${count} times`
    },[count]);//whenever the count state chnages then only renders
    return(
        <div>
         <input type="text"  value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Click {count}</button>
        </div>
    )
}
export default Conditionalrender;