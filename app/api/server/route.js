import { NextResponse } from 'next/server';
import { Client } from '@googlemaps/google-maps-services-js';

const apiKey = process.env.GOOGLE_API_KEY;
const gmaps = new Client({});

// Ensure the API route handles POST requests
export async function POST(req) {
  try {
    const { location, type } = await req.json();  // Parse request body

    // Make the Google Places API request
    const response = await gmaps.placesNearby({
      params: {
        location: location,  // e.g., "37.7749,-122.4194"
        keyword: type,  // e.g., "restaurant"
        radius: 100000,  // Radius in meters
        key: apiKey,
      },
    });

    const businesses = response.data.results;
    return NextResponse.json({ businesses });  // Return the places as JSON
  } catch (error) {
    console.error('Error fetching places:', error);
    return new NextResponse('Error fetching places', { status: 500 });
  }
}
