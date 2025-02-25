import { useRef } from "react";

function DomElement(){
    const inputElem =useRef(0);
    const btnclicked = () =>{
        console.log(inputElem.current);
        inputElem.current.style.background="blue";
    }
    return(
        <>
        <input type="text" ref={inputElem}/> {/*Accessing the dom element using the useRef*/}
        <button onClick={btnclicked}>Click</button>
        </>
    )
}
export default DomElement;