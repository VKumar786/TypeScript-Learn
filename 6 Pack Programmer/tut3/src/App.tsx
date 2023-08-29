import { useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState<string>("");
  const [arr, setArr] = useState<{ title: string; isCompleted: boolean }[]>([]);
  return (
    <>
      <div className="container">
        <div className="innerContainer">
          <h1>Todo App</h1>

          <form
            id="myForm"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              //? SubmitEvent in raw js
              e.preventDefault();
              setArr((prev) => {
                return [...prev, { title, isCompleted: false }];
              });
              setTitle("");
            }}
          >
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              type="text"
              value={title}
              name="title"
              placeholder="Title..."
            />
            <br />
            <button type="submit" className="button-10">
              Add
            </button>
          </form>

          <div className="todoContainer">
            <ul>
              {arr.map((item, idx) => {
                return (
                  <li key={idx}>
                    <input
                      onClick={() => {
                        setArr((prev) => {
                          return prev.map((item, index) => {
                            if (idx === index) {
                              return {
                                title: item.title,
                                isCompleted: !item.isCompleted
                              }
                            }
                            return item;
                          });
                        });
                      }}
                      type="checkbox"
                      checked={item.isCompleted}
                    />
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
