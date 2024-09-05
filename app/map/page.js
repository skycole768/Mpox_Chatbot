'use client'
import React, { useState } from 'react';
import Navbar from '../navbar';
import axios from 'axios';
import { Box, Typography, Button, TextField, Stack } from '@mui/material';

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
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      margin="0"
      padding="0"
      flexDirection="column"
      justifyContent="center"
      alignItems={'center'}
    >
      <Navbar />

      <Stack
        direction={'column'}
        width={'500px'}
        height={'700px'}
        border={"1px solid black"}
        borderRadius={3}
        p={2}
        spacing={3}
        mt={13}
      >
        <Typography variant="h4" sx={{ color: '#849785', fontFamily: 'Arial', fontWeight: 'bold' }} textAlign="center">
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
              style={{ borderRadius: '5px' }}
            />

            <Button 
              type="submit" 
              variant="contained" 
              style={{ backgroundColor: '#849785', color: '#fafafa', borderRadius: '5px' }}
            >
              Search
            </Button>
          </Stack>
        </form>

        {error && (
          <Typography color="error" variant="body1" sx={{ marginTop: 2 }}>
            {error}
          </Typography>
        )}

        <Typography variant="h5" sx={{ marginTop: 4, color: '#849785', fontWeight: 'bold' }}>
          Places Found
        </Typography>
        <Box overflow="auto" maxHeight="200px">
          <ul>
            {places.map((place, index) => (
              <li key={index} style={{ listStyleType: 'none', marginBottom: '10px' }}>
                <Typography variant="body1" sx={{ color: '#849785' }}>{place.name}</Typography>
                <Typography variant="body2" sx={{ color: '#C1C1C1' }}>{place.vicinity}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Stack>
    </Box>
  );
}
