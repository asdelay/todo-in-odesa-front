import React from 'react';
import axios from 'axios';

import '../../styles/App.scss';

const Index = ({ id, todoTitle, todoContent, setTodo, backURL }) => {
  return (
    <div className="todo">
      <div className="todo__header">
        <h3>{todoTitle}</h3>
      </div>
      <div className="todo__content">
        <p>{todoContent}</p>
      </div>
      <div className="todo__footer">
        <div className="firstSVG">
          <svg
            className="feather feather-edit"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </div>
        <div
          onClick={() => {
            axios
              .delete(`${backURL}${id}`)
              .then(() => {
                axios
                  .get(`${backURL}`)
                  .then((res) => {
                    setTodo(res);
                  })
                  .catch((e) => console.log(e));
              })
              .catch((e) => console.log(e));
          }}
          className="secondSVG">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round">
            <g data-name="Layer 17" id="Layer_17">
              <path
                className="cls-1"
                d="M24,31H8a3,3,0,0,1-3-3V9A1,1,0,0,1,7,9V28a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V9a1,1,0,0,1,2,0V28A3,3,0,0,1,24,31Z"
              />
              <path className="cls-1" d="M28,7H4A1,1,0,0,1,4,5H28a1,1,0,0,1,0,2Z" />
              <path
                className="cls-1"
                d="M20,7a1,1,0,0,1-1-1V3H13V6a1,1,0,0,1-2,0V2a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1V6A1,1,0,0,1,20,7Z"
              />
              <path
                className="cls-1"
                d="M16,26a1,1,0,0,1-1-1V11a1,1,0,0,1,2,0V25A1,1,0,0,1,16,26Z"
              />
              <path
                className="cls-1"
                d="M21,24a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0V23A1,1,0,0,1,21,24Z"
              />
              <path
                className="cls-1"
                d="M11,24a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0V23A1,1,0,0,1,11,24Z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Index;
