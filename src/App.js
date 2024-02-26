import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles/App.scss';
import InputInterface from './components/InputInterface';
import Todo from './components/Todo';
import logo from './img/IMG_2420.gif';

// const backURL = 'http://localhost:8080/';
const backURL = 'https://todo-in-odesa.onrender.com/';

function App() {
  const [inputValues, setInputValues] = useState({});
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get(backURL).then((res) => {
      setTodos(res.data);
      setIsLoading(false);
    });
  }, []);

  const onButtonClick = async (todoDataObj) => {
    axios
      .post(backURL, {
        title: todoDataObj.firstInput,
        content: todoDataObj.secondInput,
      })
      .then(function (response) {
        setTodos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="wrapper">
      <div className="header">
        {/* <h1>Список</h1> */}
        <img className="logo" src={logo} alt="logo"></img>
      </div>
      <div className="body">
        <InputInterface
          inputValues={inputValues}
          setInputValues={(someObj) => setInputValues(someObj)}
          onButtonClick={(todoDataObj) => {
            onButtonClick(todoDataObj);
          }}
        />
        <div className="todos">
          {isLoading
            ? 'Loading ...'
            : todos.map((todoObj) => {
                return (
                  <Todo
                    key={todoObj._id}
                    id={todoObj._id}
                    todoTitle={todoObj.title}
                    todoContent={todoObj.content}
                    setTodo={(res) => {
                      setTodos(res.data);
                    }}
                    backURL={backURL}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default App;
