import { useState } from "react";
function StatePage() {
  const [counter, setCounte] = useState(0);
  const [onOff, setOnOff] = useState(false);

  const increment = () => setCounte(counter + 1);
  const decrement = () => setCounte(counter - 1);
  const divStyle = { backgroundColor: onOff ? "#fff" : "#000" };

  return (
    <div style={divStyle}>
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
    </div>
  );
}

export default StatePage;
