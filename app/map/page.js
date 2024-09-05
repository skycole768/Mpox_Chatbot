'use client'
import React, { useState } from 'react';
import Navbar from '../navbar';
import axios from 'axios';
import { Box, Typography, Button, TextField, Stack } from '@mui/material'; // MUI for better styling

export default function Map() {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Recieved")
    try {
      // Send a POST request to the Node.js backend
      const response = await axios.post('/api/server', { location, type });
      // Set the list of places returned from the backend
      setPlaces(response.data.businesses);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Could not fetch places. Please try again.');
    }
  };

  return (
    <Box>
      <Navbar />
      
      {/* Main container with top padding to avoid overlap */}
      <Box
        sx={{
          padding: '100px 20px 20px 20px', // Top padding to push content below the navbar
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Search for Places Nearby
        </Typography>

        {/* Form for location and type */}
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <TextField
              label="Type of Place"
              variant="outlined"
              fullWidth
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Search
            </Button>
          </Stack>
        </form>

        <label>-3.5256468128598755, 23.59438177046249</label>

        {/* Display error if any */}
        {error && (
          <Typography color="error" variant="body1" sx={{ marginTop: 2 }}>
            {error}
          </Typography>
        )}

        {/* Display found places */}
        <Typography variant="h5" sx={{ marginTop: 4 }}>
          Places Found
        </Typography>
        <Box>
          <ul>
            {places.map((place, index) => (
              <li key={index}>
                <Typography variant="body1">{place.name}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
