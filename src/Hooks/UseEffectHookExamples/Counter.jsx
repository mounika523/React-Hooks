import { useState, useEffect } from "react";

function Counter(){

    const[count,setCount] = useState(0);
    //To change the document title
    useEffect(()=>{
        document.title=`You clicked${count} times`
    })//it calls after every single render i.e whenever we click button it changes its state
    

    return(
        <div>
        <button onClick={()=>setCount(count+1)}>Click {count}</button>
        </div>
    )
}

export default Counter;


{/* whenever we click button it increment in the titile by useing useeffect*/}