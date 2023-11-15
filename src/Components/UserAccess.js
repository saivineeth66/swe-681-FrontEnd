import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

function UserAccess() {
  const [isSigningUp, setIsSigningUp] = useState(true);

  const toggleForms = () => {
    setIsSigningUp(!isSigningUp);
  };

  return (
    <div>
      {isSigningUp ? (
        <SignUpForm onSignInClick={toggleForms} />
      ) : (
        <SignInForm onSignUpClick={toggleForms} />
      )}
    </div>
  );
}

export default UserAccess;
