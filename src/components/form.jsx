import React from "react";

const Form = ({ input, setInput, todos, setTodos }) => {
  const OnInputChange = (event) => {
    setInput(event.target.value);
  };
  const OnFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { title: input, completed: false }]);
    setInput("");
  };
  return (
    <div>
      <form onSubmit={OnFormSubmit}>
        <input
          type="text"
          placeholder="enter a todo"
          id="input-style"
          value={input}
          onChange={OnInputChange}
          required
        />
        <button type="submit">add todo</button>
      </form>
    </div>
  );
};

export default Form;
