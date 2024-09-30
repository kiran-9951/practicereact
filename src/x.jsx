import { useState } from "react"

const Ex=()=>{
    const[count,setCount]=useState(0)
    const HandleInput=(event)=>{
        let b=event.target.value;
        setCount(b)
    }
    return(
        <>
        <h1>{count}</h1>;
        <input type="number" onChange={HandleInput} value={count}/>
        </>
    )
}
export default Ex