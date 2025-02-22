import { useState } from "react"


const Checkbox = () => {
    const[checked, setChecked] = useState(false);
    function handleChange(e) {
        setChecked(e.target.checked);
    }
    return(
        <>
        <div>
            <label >
                <input
                type="checkbox"
                checked = {checked}
                onChange={handleChange}
                />You Liked This
                </label>
                <p>you {checked? 'Liked' : ' Not Liked'}</p>
        </div>
        </>
    )
}
export default Checkbox;