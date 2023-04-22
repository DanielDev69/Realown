import React, { useState } from 'react';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    // Here, you can call an API to create a new user account using the username and password.
    console.log(`Creating user account for ${username} with password ${password}...`);
    // Reset the form and state variables after successful submission.
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <p>Please fill in this form to create an account.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <div>
            <button type='submit'>Prev</button>
          <button type="submit">Next</button>
        </div>
      </form>
      <div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <p>Or sign up using:</p>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Google</a>
      </div>
    </div>
  );
}

export default SignUp;
