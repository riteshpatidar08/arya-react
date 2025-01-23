import React from 'react';
import Button from './components/Button';
import { useState } from 'react';
import Login from './components/Login';
function App() {
  const [college, setCollege] = useState('arya');

  // let college = 'arya';
  const handleClick = () => {
    setCollege('skit');
    console.log(college);
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">{college}</h1>
      <button
        onClick={handleClick}
        className="text-white bg-blue-500 px-10 py-2 rounded-lg"
      >
        Click
      </button>
    <Login/>
    </div>
  );
}

export default App;

//props are the react feature which is used to share data between parent to child

// h1.addEventListern('click',function(){

// })
