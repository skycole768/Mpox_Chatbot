'use client'
import React, { useState } from 'react';
import Navbar from '../navbar';
import axios from 'axios';
import { Box, Typography, Button, TextField, Stack } from '@mui/material';
import HospitalMap from '../api/map/route'; 

export default function Map() {
  const [location, setLocation] = useState('');
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState('');
  const [userLocation, setUserLocation] = useState(null); 
  const [activePlaceIndex, setActivePlaceIndex] = useState(null); // Track the active place

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Received");

    try {
      console.log("Processing...");
      const response = await axios.post('/api/server', { location });

      if (response.data.userCoords) {
        setUserLocation({
          lat: response.data.userCoords.lat,
          lng: response.data.userCoords.lng,
        });
      }

      if (response.data.businesses && response.data.businesses.length > 0) {
        setPlaces(response.data.businesses);
        setError('');
      } else {
        setPlaces([]); 
        setError('No medical facilities found near the entered location.');
      }
    } catch (err) {
      console.error("Error:", err);
      setError('Could not fetch places. Please try again.');
    }
  };

  const handlePlaceClick = (index) => {
    setActivePlaceIndex(index);
  };

  return (
    <>
      <Navbar />
      <Box
        width="100vw"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        margin="0"
        padding="0"
        sx={{ paddingTop: '80px' }}
      >
        <Box
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          padding="20px"
          flexGrow={1} 
        >
          <Box
            width="40%"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            flexGrow={1}
          >
            <Typography variant="h4" sx={{ color: '#849785', fontFamily: 'Arial', fontWeight: 'bold', marginBottom: '20px' }}>
              Search for Medical Facilities Nearby
            </Typography>

            <form onSubmit={handleSubmit}>
              <Stack spacing={3} sx={{ width: '100%' }}>
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

            <Box sx={{ width: '100%', marginTop: '20px' }}>
              <ul>
                {places.map((place, index) => (
                  <li
                    key={index}
                    style={{ listStyleType: 'none', marginBottom: '10px', cursor: 'pointer' }}
                    onClick={() => handlePlaceClick(index)} 
                  >
                    <Typography variant="body1" sx={{ color: '#849785' }}>{place.name}</Typography>
                    <Typography variant="body2" sx={{ color: '#C1C1C1' }}>{place.vicinity}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>

          <Box
            width="55%"
            height="500px"
            borderRadius="10px"
            overflow="hidden"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
          >
            <HospitalMap 
              hospitals={places} 
              userLocation={userLocation} 
              activePlaceIndex={activePlaceIndex} 
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
