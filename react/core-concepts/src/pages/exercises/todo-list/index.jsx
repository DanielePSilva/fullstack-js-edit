import { useState } from "react";

function TodoListPage() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(["primeiro item"]);

  const handleSubmit = (event) => {
    console.log(event);
  };

  return (
    <div>
      <div>
        <h1> Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button>Adicionar</button>
        </form>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TodoListPage;

// fazer uma todo list adicionar elementos  e remover
