import { useState } from "react"

//In this example, the count state variable holds a number. Clicking the button increments it.


const Counter = ()=>{
    const[count,setCount] = useState(0);
    function handleClick(){
        setCount(count+1);
    }

    return(
        <>
        <p>you click the button in {count} times</p>
        <button onClick={handleClick}>Click</button> {/* handle click manages the setcount method*/ }
        </>
    )
}
export default Counter;