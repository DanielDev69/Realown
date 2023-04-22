import React, { useState } from 'react';

const RegistrationTokenConfirmation = () => {
  const [token, setToken] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };
  
  const handleVerification = () => {
    setIsLoading(true);
    setError(null);
    setIsValid(false);
    fetch('/api/verifyToken', {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        setIsLoading(false);
        if (!response.ok) {
          throw new Error('Verification failed');
        }
        return response.json();
      })
      .then(data => {
        setIsValid(data.isValid);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error.message);
      });
  };
  
  return (
    <div>
      <h2>Registration Token Confirmation</h2>
      <label>
        Token:
        <input type="text" value={token} onChange={handleTokenChange} />
      </label>
      <button onClick={handleVerification} disabled={isLoading}>Verify Token</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {isValid && <p>The token is valid!</p>}
      {!isValid && !isLoading && token.length > 0 && <p>The token is not valid.</p>}
    </div>
  );
};

export default RegistrationTokenConfirmation;
