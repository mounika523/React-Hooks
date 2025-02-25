import { useState,useMemo, useCallback } from "react";
import Header from "./components/Header";

function Counter(){

    const[count, setCount] =useState(0);

    {/*const newFunc = ()=>{}*/}
    const newFunc = useCallback(()=>{}, [count]);{/*if we pass empty dependeci it doesnot rerender */}
    return(
        <>
        {/*<Header newFunc={newFunc}whnever page render it excutes although we use react.memo in header funtion because every time it creates a new instance and pass it as a props to the header component .Thats why we use useCallback hook*/}
        <Header newFunc = {newFunc}/>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count => count+1)}>Click Here</button>
        </>
    )
}
export default Counter;