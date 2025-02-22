import { useState } from "react"


//In this example, the text state variable holds a string. When you type, handleChange reads the latest input value from the browser input DOM element, and calls setText to update the state. This allows you to display the current text below.



function TextFeild(){
    const [ text, setText] = useState(" ");
    function handleChange(e){
        setText(e.target.value);
    }
    return(
        <>
        <input value = {text} onChange={handleChange}/>
        <p>you Typed:{text}</p>
        <button onClick={()=>setText("hello")}>Reset</button>
        </>
    )
}
export default TextFeild;