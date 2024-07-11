import React, {useState} from 'react';

export const Counter = () => {

  const [counter, setCounter] = useState(0);

  const handleOperation = (operation) => {
    switch (operation) {
      case "increment":
        setCounter(counter + 1);
        break;
      case "decrement":
        counter === 0 ? setCounter(0) : setCounter(counter - 1)
        break;
      case "reset":
        setCounter(0);
        break;
      default:
        break
    }
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => handleOperation("decrement")}>-1</button>
      <button onClick={() => handleOperation("increment")}>+1</button>
      <button onClick={() => handleOperation("reset")}>Reset</button>
    </div>
  )
}
