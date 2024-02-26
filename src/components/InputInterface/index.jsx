import React from 'react';
import '../../styles/App.scss';
const Index = ({ inputValues, setInputValues, onButtonClick }) => {
  return (
    <div className="inputInterface">
      <input
        placeholder="сюда вводить название штуки"
        onChange={(e) => {
          setInputValues({ ...inputValues, firstInput: e.target.value });
        }}
        value={inputValues.firstInput || ''}
      />
      <input
        className="secondInput"
        placeholder="сюда вводить все остальное про штуку"
        onChange={(e) => {
          setInputValues({ ...inputValues, secondInput: e.target.value });
        }}
        value={inputValues.secondInput || ''}
      />
      {inputValues.firstInput ? (
        <button
          onClick={() => {
            onButtonClick(inputValues);
            setInputValues({ firstInput: '', secondInput: '' });
          }}>
          сохранить штуку
        </button>
      ) : (
        <button disabled onClick={() => alert('надо больше данных')}>
          блин блинский нечего сохранять
        </button>
      )}
    </div>
  );
};
export default Index;
