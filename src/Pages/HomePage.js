import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';

const HomePage = () => {


  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <Card sx={{
        minWidth: 275, // Adjust the size as needed
        backgroundColor: '#f9f9f9', // Choose your color
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)', // Optional shadow
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)', // Shadow on hover
        },
        padding: '20px', // Inner padding
        margin: '20px', // Margin around the card
        borderRadius: '10px', // Rounded corners
      }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Welcome to the Homepage
          </Typography>
          
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
