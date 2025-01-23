import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handlepasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    console.log(data);
  };
  return (
    <div>
      <h2>Login Form</h2>
      <h1>Email : {email}</h1>
      <h1>Password : {password}</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleInputChange}
          className="w-64 border border-red-500"
          type="email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={handlepasswordChange}
          className="w-64 border border-red-500"
          type="password"
        />
        <button
          className="text-white bg-blue-500 px-10 py-2 rounded-lg"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
