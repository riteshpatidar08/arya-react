import React from 'react';

function App() {
  // const companies = ['meta' , 'google' ,'neflix']
  const companies = [
    { id: 1, name: 'meta' },
    { id: 2, name: 'google' },
    { id: 3, name: 'netflix' },
  ];
  return (
    <div>
      <h1 className="text-center text-blue-500 font-bold text-4xl">
        List rendering
      </h1>
      {/* <h1>{companies[0]}</h1>
      <h1>{companies[1]}</h1>
      <h1>{companies[2]}</h1> */}
      {companies.map((company, index) => (
        <h1 key={company.id}>{company.name}</h1>
      ))}
    </div>
  );
}

export default App;
