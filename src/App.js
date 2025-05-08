import { useState } from "react";
import "./styles.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todoArr, setTodatArr] = useState([]);
  const handleBtn = (e) => {
    if (input.trim() === "") return;
    const item = {
      id: todoArr.length + 1,
      text: input,
      isCompleted: false,
    };
    setTodatArr((prev) => [...prev, item]);
    setInput("");
  };
  const deleteBtn = (index) => {
    const copyBtns = [...todoArr];
    copyBtns.splice(index, 1);
    setTodatArr(copyBtns);
  };
  const toggleBtn = (id) => {
    setTodatArr(
      todoArr.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            isCompleted: !t.isCompleted,
          };
        } else {
          return t;
        }
      })
    );
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={(e) => handleBtn(e)}>Add</button>

      <div>
        {todoArr.map((t, index) => {
          return (
            <div key={t.index}>
              <li>
                <input
                  type="checkbox"
                  checked={t.isCompleted}
                  onChange={() => toggleBtn(t.id)}
                />
                <span className={t.isCompleted ? "strike" : ""}>{t.text}</span>
                <button onClick={() => deleteBtn(index)}>Delete</button>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
