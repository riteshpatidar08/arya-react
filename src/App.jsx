import React from 'react';
import { useState } from 'react';
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
  return (
    <div>
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
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;
