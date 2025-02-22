import { useEffect, useState } from "react";

function Cleanup(){
    const[x,setX] = useState(0);
    const[y,setY] =useState(0);
    const logMouse = e =>{
        console.log('mouse event')
        setX(e.clientX);
        setY(e.clientY)
    }
    useEffect(() => {
        console.log(`useEffect called`)
        window.addEventListener(`mousemove`, logMouse)

        return () =>{
            console.log('component unmount')
            window.removeEventListener('mousemove',logMouse)
        }
    },[])
    return(
        <div>
            Hooks x-{x} y-{y}
        </div>
    )
}
export default Cleanup;