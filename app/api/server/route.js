import { NextResponse } from 'next/server';
import { Client } from '@googlemaps/google-maps-services-js';
import axios from 'axios';

const apiKey = process.env.GOOGLE_API_KEY;
const gmaps = new Client({});

function isLatLng(location) {
  const latLngRegex = /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/;
  return latLngRegex.test(location.trim());
}

async function searchNearby(formattedLocation, radius) {
  try {
    const response = await gmaps.placesNearby({
      params: {
        location: formattedLocation,
        keyword: 'hospital,medical clinic',
        radius: radius * 1000, 
        language: 'en', 
        region: 'CD',  // Region code for the Democratic Republic of Congo
        key: apiKey,
      },
    });
    
    return response.data.results;
  } catch (error) {
    console.log('Places Nearby API error:', error.message);
    throw new Error('Places Nearby API error');
  }
}

export async function POST(req) {
  try {
    const { location } = await req.json();
    let businesses = [];
    let formattedLocation = location;
    let userCoords = { lat: null, lng: null }; 

    if (!isLatLng(location)) {
      console.log("Geocoding the location:", location);
      
      const geoResponse = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json',
        {
          params: {
            key: apiKey,
            address: location, 
          },
        }
      );

      if (geoResponse.data.status === 'OK') {
        const { lat, lng } = geoResponse.data.results[0].geometry.location;
        formattedLocation = `${lat},${lng}`;
        userCoords = { lat, lng }; 
        console.log("Geocoded to lat,lng:", formattedLocation);
      } else {
        throw new Error('Geocoding failed');
      }
    } else {

      const [lat, lng] = formattedLocation.split(',');
      userCoords = { lat: parseFloat(lat), lng: parseFloat(lng) };
    }

    const radiusList = [25, 50, 75, 100]; 
    for (let radius of radiusList) {
      console.log(`Searching within ${radius} km...`);
      businesses = await searchNearby(formattedLocation, radius);

      if (businesses.length > 0) {
        console.log(`Found ${businesses.length} businesses within ${radius} km.`);
        break; 
      }
    }

    if (businesses.length === 0) {
      console.log('No businesses found within 100 km.');
      return NextResponse.json({ error: 'No medical facilities found within 100 km.', userCoords }, { status: 404 });
    }

    return NextResponse.json({ businesses, userCoords });

  } catch (finalError) {
    console.error('API error:', finalError.message);
    return NextResponse.json({ error: 'Failed to process the request' }, { status: 500 });
  }
}
