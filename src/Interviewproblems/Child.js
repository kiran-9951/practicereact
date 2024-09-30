import React from "react";

const Child = (information) => {
  const Data = () => {
    information("hello from child");
  };
  return (
    <div>
      <button onClick={Data}>send the data</button>
    </div>
  );
};

export default Child;

