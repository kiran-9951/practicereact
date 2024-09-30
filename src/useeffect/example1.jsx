// import { useState, useEffect } from "react";
// const Example = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = `${count}new message`;
//   });
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>increase</button>
//       <button onClick={()=>setCount(count-1)}>decrease</button>
//       <button onClick={()=>setCount(0)}>reset</button>
//     </>
//   );
// };
// export default Example

import { useEffect, useState } from "react";

const Example=()=>{
const [count, setCount] = useState(0);
useEffect(() => {
  document.title = `title changed ${count} times `;
},[count]);
return(
  <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>increase</button>
    <button onClick={() => setCount(count - 1)}>decrease</button>
    <button onClick={() => setCount(0)}>reset</button>
  </>
);
}
export default Example
