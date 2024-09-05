'use client'
import React, { useState } from 'react';
import Navbar from '../navbar';
import axios from 'axios';
import { Box, Typography, Button, TextField, Stack } from '@mui/material'; // MUI for better styling

export default function Map() {
  const [location, setLocation] = useState('');
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Received");

    try {
      console.log("Processing...");
      const response = await axios.post('/api/server', { location });
      console.log("Response:", response.data);
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
      
      <Box
        sx={{
          padding: '100px 20px 20px 20px', 
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Search for Medical Facilities Nearby
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Location (e.g., city, address, or lat,lng)"
              variant="outlined"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            <Button type="submit" variant="contained" color="primary">
              Search
            </Button>
          </Stack>
        </form>

        <Typography> -3.526312446007129, 23.605681766740165 </Typography>

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
                <Typography variant="body1">{place.vicinity}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
