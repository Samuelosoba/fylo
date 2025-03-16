import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  const handSubmit = (e) => {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), completed: false, title: newItem },
      ];
    });
    setNewItem("");
    console.log(setTodos.id);
  };
  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo?.id === id) {
          return { ...todo, completed };
        }
      });
    });
  };
  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo?.id !== id);
    });
  };
  return (
    <div className="py-6 px-4 mx-auto">
      <form className="" onSubmit={handSubmit}>
        <div className="join">
          <div>
            <label className="input validator join-item">
              <input
                type="text"
                placeholder=""
                required
                id="item"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              />
            </label>
            <div className="validator-hint hidden">Add new items</div>
          </div>
          <button className="btn btn-neutral join-item">Add</button>
        </div>
      </form>
      <h1 className="text-bold text-center text-3xl text-red-500 mt-10">
        Todo List
      </h1>
      <ul className="space-y-4">
        {todos.map((todo) => {
          return (
            <li className="flex" key={todo?.id} id={todo?.id}>
              <label htmlFor="" className="flex gap-2">
                <input
                  type="checkbox"
                  id={todo?.id}
                  // checked={todo?.completed}
                  // onChange={(e) => toggleTodo(todo?.id, e.target.checked)}
                />
                <p>{todo?.title}</p>
              </label>

              <button
                className="ml-5 border px-2 border-red-500 text-red-500"
                onClick={() => deleteTodo(todo?.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
