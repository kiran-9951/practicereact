import React from "react";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="text"
              value={todo.title}
              onChange={(event) => {
                const newTodos = [...todos];
                newTodos[index].title = event.target.value;
                setTodos(newTodos);
              }}
            />
            <button>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
