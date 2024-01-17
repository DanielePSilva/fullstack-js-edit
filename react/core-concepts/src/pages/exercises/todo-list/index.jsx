import { useState } from "react";

function TodoListPage() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems((prevItems) => [...prevItems, inputValue]);
    setInputValue("");
    console.log(event);
  };
  const handleDelete = (index) => {
    const updatedItemns = [...items];
    updatedItemns.splice(index, 1);
    setItems(updatedItemns);
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
          <button type="submit">Adicionar</button>
        </form>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => handleDelete(index)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TodoListPage;

// fazer uma todo list adicionar elementos  e remover
