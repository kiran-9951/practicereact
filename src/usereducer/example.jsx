// import { useReducer } from "react";

import { useReducer } from "react";

// const initailState = {
//   age: 20,
//   salary: 10000,
// };
// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, age: state.age + 1 };
//     case "Salary_Increment":
//       return { ...state, salary: state.salary + 1000 };
//     case "Age_Decrement":
//       return { ...state, age: state.age - 1 };
//     default:
//       return state;
//   }
// }

//  function Usereducer() {
//   const [currentstate, dispatch] = useReducer(reducer, initailState);
//   const Increment = () => {
//     dispatch({
//       type: "INCREMENT",
//     });
//   };
//   const Decrement = () => {
//     dispatch({
//       type: "Age_Decrement",
//     });
//   };
//   const SalaryIncrement = () => {
//     dispatch({
//       type: "Salary_Increment",
//     });
//   };
//   return (
//     <>
//       <h1>current age:{currentstate.age}</h1>
//       <button onClick={Increment}>age increment</button>
//       <button onClick={Decrement}>age decremet</button><br></br>
//       ------------------------------------------------------
//       <h1>current salary:{currentstate.salary}</h1>
//       <button onClick={SalaryIncrement}>salary increment</button>
//     </>
//   );
// }
// export default Usereducer

const initailState = {
  age: 20,
  salary: 13000,
};
function reducer(state, action) {
  switch (action) {
    case "INCREMENT":
      return { ...state, age: state.age + 1 };
    case "DECREMENT":
      return { ...state, age: state.age - 1 };
    case "SALARY_INCREMENT":
      return { ...state, salary: state.salary + 1000 };
    default:
      return state;
  }
}

function Example4() {
  const [currentstate, dispatch] = useReducer(reducer, initailState);
  const Increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const Decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const Salary_Increment = () => {
    dispatch({ type: "SALARY_INCREMENT" });
  };
  return (
    <>
      <h1>current age:{currentstate.age}</h1>
      <button onClick={Increment}>Increase age</button>
      <button onClick={Decrement}>decrease age</button>
      <br></br>
      ----------------------------------------------------
      <h1>cuurent salry:{currentstate.salary}</h1>
      <button onClick={Salary_Increment}>increase</button>
    </>
  );
}
export default Example4;
