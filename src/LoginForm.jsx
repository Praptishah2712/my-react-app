    // src/LoginForm.jsx
    import { useState } from 'react';

    // function LoginForm() {
    //   const [email, setEmail] = useState('');
    //   const [password, setPassword] = useState('');

    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Handle login logic here, e.g., send data to an API
    //     console.log('Login attempt:', { email, password });
    //     // You would typically send a request to a backend for authentication
    //   };

      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      );
    

    export default LoginForm;