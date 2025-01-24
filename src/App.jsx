import React from 'react';
import { useState } from 'react';
import Text from './components/Text.jsx';

function App() {
  const [arr, setArr] = useState(['item1', 'item2', 'item3']);
  const [inputValue, setInputValue] = useState('');

  console.log(inputValue);
  console.log(arr);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setArr([...arr, inputValue]);
  };

  const handleDelete = (itemdelete) => {
    const updatedItems = arr.filter((item) => {
      return item !== itemdelete;
    });
    setArr(updatedItems);
  };
  return (
    <div>
      <Text />
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="border border-slate-800 rounded-lg w-64 p-2 mr-2"
          type="text"
        />
        <button
          className="bg-sky-500 px-10 py-2 rounded-xl text-white"
          type="submit"
        >
          Add
        </button>
      </form>
      {arr.map((item) => (
        <div className="flex m-2 gap-2">
          <span>{item}</span>
          <button
            onClick={() => handleDelete(item)}
            className="bg-red-700 text-white px-6 py-2 hover:bg-red-400 rounded-xl"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
