import { useState } from "react";
<<<<<<< HEAD
function StatePage() {
  const [counter, setCounte] = useState(0);
  const [onOff, setOnOff] = useState(false);

  const increment = () => setCounte(counter + 1);
  const decrement = () => setCounte(counter - 1);
=======

function StatePage() {
  const [counter, setCounter] = useState(0);
  const [onOff, setOnOff] = useState(false);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

>>>>>>> 9d3d48f69163e677b4caf951ce9382fd5e8e5dae
  const divStyle = { backgroundColor: onOff ? "#fff" : "#000" };

  return (
    <div style={divStyle}>
<<<<<<< HEAD
      <h1 onClick={() => setOnOff(!onOff)}> Counter</h1>
      <h3>{counter}</h3>
      <div className="">
        <button onClick={() => setCounte(counter - 1)}> - </button>
        <button onClick={() => setCounte(counter + 1)}> +</button>
      </div>
      {/* <div className="">
        <button onClick={() => decrement(counter - 1)}> - </button>
        <button onClick={() => increment(counter + 1)}> +</button>
      </div> */}
=======
      <h1 onClick={() => setOnOff(!onOff)}>Counter</h1>
      <h3>{counter}</h3>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
>>>>>>> 9d3d48f69163e677b4caf951ce9382fd5e8e5dae
    </div>
  );
}

export default StatePage;
