import logo from "./logo.svg";
import "./App.scss";
import Navigation from "./views/Navigation";
import Covid from "./views/Covid";
import Todo from "./views/Todo";
import { Countdown, NewCountDown } from "./views/Countdown";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "1", title: "coding", type: "Vy" },
    { id: "2", title: "doing homework", type: "Vy" },
    { id: "3", title: "reading books", type: "Thao Vy" },
    { id: "4", title: "doing yoga", type: "Thao Vy" },
  ]);

  useEffect(() => {
    console.log("useEffect");
  }, [address]);

  const handleEventClick = () => {
    setAddress(address);
    // hook not merge state
    if (!address) {
      alert("Empty input");
      return;
    }
    let newTodo = { id: "3", title: address, type: "Vy" };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };

  const handleDeleteTodo = (id) => {
    let currentTodo = todos;
    currentTodo = currentTodo.filter((item) => item.id !== id);
    setTodos(currentTodo);
  };

  const setTimeUp = () => {
    // alert("Times up")
  };
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />

        <img src={logo} className="App-logo" alt="logo" />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Covid />} />
            <Route
              path="/timer"
              element={
                <>
                  <Countdown setTimeUp={setTimeUp} />
                  <span>-----------------------------------</span>
                  <NewCountDown />
                </>
              }
            />
            <Route
              path="/todo"
              element={
                <>
                  <Todo
                    todos={todos}
                    title="All todos"
                    deleteTodo={handleDeleteTodo}
                  />
                  <input
                    type="text"
                    value={address}
                    onChange={(event) => {
                      handleOnChangeInput(event);
                    }}
                  />
                  <button
                    onClick={(event) => {
                      handleEventClick(event);
                    }}
                  >
                    Click me
                  </button>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;
