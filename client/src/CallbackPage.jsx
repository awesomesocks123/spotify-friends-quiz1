import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CallbackPage() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      // Exchange the code for an access token
      fetch('/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Token received:', data);
        })
        .catch(error => console.error('Error exchanging code for token:', error));

      // Redirect to the home page
      navigate('/home');
    }
  }, [code]);

  return <div>Loading...</div>;
}

export default CallbackPage;