// import { useRef } from "react";

// import { useRef, useState } from "react";

// const Login = () => {
//   const usernameRef = useRef(null);
//   const userpasswordRef = useRef(null);
//   const Getform = (event) => {
//     event.preventDefault();
//     console.log(usernameRef.current.value);
//     console.log(userpasswordRef.current.value);

//     const username = usernameRef.current.value;
//     const password = userpasswordRef.current.value;

//     if (username.length > 8 && password.length > 8) {
//       alert("username and password less be more than 8 char");
//     } else {
//       const userdata = {
//         name: username,
//         password: password,
//       };
//       console.group(userdata);
//     }
//   };
//   return(
//     <>
//     <form onSubmit={Getform}>
//         <label htmlFor="email">email</label>
//         <input type="text" placeholder="email" ref={usernameRef}/>
//         <label htmlFor="password">password</label>
//         <input type="password" placeholder="password" ref={userpasswordRef}/>
//         <button type="submit">submit</button>

//     </form>
//     </>
//   )
// };
// export default Login;
// import React, { useRef, useState } from "react";

// const Timers = () => {
//   const [count, setCount] = useState(0);
//   const timerId = useRef(null); // Step 2: Create a reference

//   const startTimer = () => {
//     if (timerId.current !== null) return; // Prevent multiple timers
//     timerId.current = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);
//   };

//   const stopTimer = () => {
//     clearInterval(timerId.current);
//     timerId.current = null; // Step 4: Access and interact with the stored value
//   };
//   const ResetTimer=()=>{
//     clearInterval("")
//     setCount(0)
//   }

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//       <button onClick={ResetTimer}>reset</button>
//     </div>
//   );
// };

// export default Timers;

// const ThemeExample = () => {
//   const [bg, setBg] = useState("white");
//   const colorInputRef = useRef(null);

//   const Handle = (e) => {
//     e.preventDefault();
//     const color = colorInputRef.current.value;
//     setBg(color);
//     colorInputRef.current.value = "";
//   };
//   return(
//     <form>
//       <div style={{backgroundColor:bg,width:"200px"}}>

//       <input type="text" ref={colorInputRef} />
//       <button onClick={Handle}>change</button>
//       </div>

//     </form>
//   )
// };
// export default ThemeExample
