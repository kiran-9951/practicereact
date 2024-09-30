// import { useState } from "react";

// const Example6 = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const Handleusername = (event) => {
//     const username = event.target.value;
//     setUsername(username);
//     if (username.length >= 8) {
//       setError("characters must 8 only");
//     } else {
//       setError("");
//     }
//   };
//   const Handlepassword = (event) => {
//     const password = event.target.value;
//     setPassword(password);
//     if (password.length >= 8) {
//       setError("character must 8 only");
//     } else {
//       setError("");
//     }
//   };
//   const sumbitform = (event) => {
//     event.preventDefault();
//     if (username.length && password.length >= 8) {
//       console.log("submited form");
//     } else {
//       setError("enter correct details");
//     }
//   };
//   return (
//     <>
//       <form onSubmit={sumbitform}>
//         <label htmlFor="username">username</label>
//         <input
//           type="text"
//           value={username}
//           onChange={Handleusername}
//           placeholder="text"
//         />
//         <label htmlFor="password">password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={Handlepassword}
//           placeholder="password"
//         />
//         <button type="submit">submit</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </>
//   );
// };
// export default Example6;
import { useState } from "react";

const Example6 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsername = (event) => {
    const username = event.target.value;
    setUsername(username);
    if (username.length !== 8) {
      setError("Username must be exactly 8 characters");
    } else {
      setError("");
    }
  };

  const handlePassword = (event) => {
    const password = event.target.value;
    setPassword(password);
    if (password.length !== 8) {
      setError("Password must be exactly 8 characters");
    } else {
      setError("");
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (username.length === 8 && password.length === 8) {
      // console.log("Form submitted successfully");
      alert("form submitted")
    } else {
      setError("Both username and password must be exactly 8 characters long");
      alert("enter correct details")
    }
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          onChange={handleUsername}
          placeholder="Enter username"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Enter password"
          id="password"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default Example6;
