import { NextResponse } from 'next/server';
import { Client } from '@googlemaps/google-maps-services-js';
import axios from 'axios';

const apiKey = process.env.GOOGLE_API_KEY;
const gmaps = new Client({});

function isLatLng(location) {
  const latLngRegex = /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/;
  return latLngRegex.test(location.trim());
}

export async function POST(req) {
  try {
    const { location } = await req.json();
    let businesses = [];
    let formattedLocation = location;

    if (!isLatLng(location)) {
      console.log("Geocoding the location:", location);
      
      const geoResponse = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json',
        {
          params: {
            key: apiKey,
            address: location, // Location string to geocode
          },
        }
      );

      if (geoResponse.data.status === 'OK') {
        const { lat, lng } = geoResponse.data.results[0].geometry.location;
        formattedLocation = `${lat},${lng}`;
        console.log("Geocoded to lat,lng:", formattedLocation);
      } else {
        throw new Error('Geocoding failed');
      }
    }

    try {
      const response = await gmaps.placesNearby({
        params: {
          location: formattedLocation,
          keyword: 'hospital,medical clinic',
          radius: 200000, 
          language: 'en', // Language set to English, can adjust based on region
          region: 'CD',  // Region code for the Democratic Republic of Congo
          key: apiKey,
        },
      });

      console.log("API Response: ", response.data); 
      businesses = response.data.results;

    } catch (error) {
      console.log('Places Nearby API error:', error.message);
      return NextResponse.json({ error: 'Could not fetch places.' }, { status: 500 });
    }

    return NextResponse.json({ businesses });

  } catch (finalError) {
    console.error('API error:', finalError.message);
    return NextResponse.json({ error: 'Failed to process the request' }, { status: 500 });
  }
}
