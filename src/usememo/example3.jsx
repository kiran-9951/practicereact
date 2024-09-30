// import { useCallback, useMemo, useState } from "react";

// const Example3 = () => {
//   const [number, setNumber] = useState(0);
//   const [dark, setDark] = useState(false);

//   const expensiveFunction = (num) => {
//     console.log("calculating");

//     return num * 2;
//   };

//   const memo_calculation = useMemo(() => {
//     return expensiveFunction(number);
//   }, [number]);

//   const cssStyle = {
//     backgroundColor: dark ? "black" : "white",
//     color: dark ? "white" : "black",
//   };

//   return (
//     <div style={cssStyle}>
//       <input
//         onChange={(e) => setNumber(Number(e.target.value))}
//         type="number"
//         value={number}
//       />
//       <h2>calculation:{memo_calculation}</h2>
//       <button onClick={() => setDark((prevDark) => !prevDark)}>toggle</button>
//     </div>
//   );
// };
// export default Example3;

import {  useMemo, useState } from "react";

function UseMemo(){

const [counter,setCounter]=useState(0)
const [counter1,setCounter1]=useState(1)

const isEven=useMemo(()=>{
    console.log("memo")
    return counter%2===0?"Even":"Odd"
},[counter]
)

const Increment=()=>{
  console.log("bbbbbbbbbbbbbbb")
    setCounter(counter+1)

}
const Increment1=()=>{
  console.log("dddddddddddddddddd")
    setCounter1(counter1+1)

}

    return(
        <>

<h1>Counter A {isEven}</h1>

<h1>Counter A {counter}</h1>
<button onClick={Increment}>Counter a Increment</button>

<h1>Counter B {counter1}</h1>
<button onClick={Increment1}>Counter a Increment</button>

        </>
    )
}
export default UseMemo

// import React, { useState, useMemo } from "react";

// function UseMemo() {
//   const [numbers, setNumbers] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const addNumber = () => {

//     setNumbers([...numbers, parseInt(inputValue)]);
//     setInputValue("");
//   };

//   const sum = useMemo(() => numbers.reduce((acc, curr) => acc + curr, 0),
//    [numbers]);

//   return (
//     <div>
//       <input
//         type="number"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button onClick={addNumber}>Add Number</button>
//       <p>Sum: {sum}</p>
//     </div>
//   );
// }

// export default UseMemo;

// import React, { useState, useMemo } from "react";

// function UseMemo() {
//   const [numbers, setNumbers] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const addNumber = () => {
//     setNumbers([...numbers, parseInt(inputValue)]);
//     setInputValue("");
//   };

//   const sum = useMemo(() => {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       total += numbers[i];
//     }
//     return total;
//   }, [numbers]);

//   return (
//     <div>
//       <input
//         type="number"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button onClick={addNumber}>Add Number</button>
//       <p>Sum: {sum}</p>
//     </div>
//   );
// }

// export default UseMemo;
