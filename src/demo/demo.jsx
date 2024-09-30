import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set up an interval to increment the count every second
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
      console.log('Component unmounted and interval cleared');
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return (
    <div>
      <h1>Timer: {count} seconds</h1>
    </div>
  );
};

export default Timer;
 