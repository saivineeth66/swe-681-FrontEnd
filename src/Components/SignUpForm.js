import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

function SignUpForm({ onSignInClick }) {
  const [formData, setformData] = useState({});
  const [signUpMessage, setSignUpMessage] = useState({ text: '', type: '' });
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(
        "http://localhost:8080/api/v1/student/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // This header must be set for JSON data
          },
          body: JSON.stringify(formData),
        }
      );
      const message = await response.text();
      if (response.status === 200) {
        console.log(message)
        setSignUpMessage({ text: message, type: 'success' });
      } else {
        setSignUpMessage({ text: message
          , type: 'error' });
        throw new Error(JSON.stringify(message));
      }
    } catch (error) {}
  };

  return (
    <Container maxWidth="xs">
      <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          autoComplete="username"
          required
          autoFocus
          id="username"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        ></TextField>

        <TextField
          sx={{ mt: 1 }}
          fullWidth
          required
          autoComplete="current-password"
          name="password"
          label="password"
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        ></TextField>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
      </Box>
      {signUpMessage.text ? (
            <Typography
            style={{
                marginTop: '16px',
                color: signUpMessage.type === 'error' ? 'red' : 'green',
              }}
            >
              {signUpMessage.text}
            </Typography>
          ): null}
      <Button
        type="button"
        fullWidth
        variant="text"
        sx={{ mt: 1 }}
        onClick={onSignInClick} // This prop should be passed from the UserAccess component
      >
        Already have an account? Sign In
      </Button>
    </Container>
  );
}

export default SignUpForm;
