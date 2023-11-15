// src/SignInForm.js

import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function SignInForm({ onSignUpClick }) {
  const [formData, setFormData] = useState({});
  const [signInMessage, setSignInMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(
        "http://localhost:8080/api/v1/student/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // This header must be set for JSON data
          },
          body: JSON.stringify(formData),
        }
      );
      const message = await response.text();
      if(response.status===200){
       // setSignInMessage({ text: message, type: 'success' });
        navigate('/home'); 
      }
      else{
        setSignInMessage({ text: 'Invalid credentials', type: 'error' });
      }
    } catch (error) {
        setSignInMessage({ text: 'Invalid credentials', type: 'error' });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          {signInMessage.text ? (
            <Typography
            style={{
                marginTop: '16px',
                color: signInMessage.type === 'error' ? 'red' : 'green',
              }}
            >
              {signInMessage.text}
            </Typography>
          ): null}

          <Button
            type="button"
            fullWidth
            variant="text"
            sx={{ mt: 1 }}
            onClick={onSignUpClick}
          >
            Don't have an account? Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default SignInForm;
