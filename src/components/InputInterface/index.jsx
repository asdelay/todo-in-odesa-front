import React, { useState } from 'react';
import '../../styles/App.scss';
const Index = ({ setInputValues, onButtonClick }) => {
  const [childInputValues, setChildInputValues] = useState({});
  return (
    <div className="inputInterface">
      <input
        placeholder="сюда вводить название штуки"
        onChange={(e) => {
          setChildInputValues({ ...childInputValues, firstInput: e.target.value });
        }}
        value={childInputValues.firstInput}
      />
      <input
        className="secondInput"
        placeholder="сюда вводить все остальное про штуку"
        onChange={(e) => {
          setChildInputValues({ ...childInputValues, secondInput: e.target.value });
        }}
        value={childInputValues.secondInput}
      />
      {childInputValues.firstInput ? (
        <button
          onClick={() => {
            onButtonClick(childInputValues);
            setChildInputValues({ firstInput: '', secondInput: '' });
            setInputValues(childInputValues);
          }}>
          сохранить штуку
        </button>
      ) : (
        <button onClick={() => alert('надо больше данных')}>сохранить штуку</button>
      )}
    </div>
  );
};
export default Index;
