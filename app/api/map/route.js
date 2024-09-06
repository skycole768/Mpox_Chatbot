import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const defaultCenter = {
  lat: -2.1202463076033653,
  lng: 23.34370442874629,
};

export default function HospitalMap({ hospitals, userLocation, activePlaceIndex }) {
  const mapRef = useRef(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Effect to handle when a place is selected from the list
  useEffect(() => {
    if (activePlaceIndex !== null && hospitals[activePlaceIndex]) {
      const place = hospitals[activePlaceIndex];
      setSelectedPlace(place);

      // Optional: Center the map on the selected place
      if (mapRef.current) {
        mapRef.current.panTo({
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng,
        });
      }
    }
  }, [activePlaceIndex, hospitals]);

  const handleMarkerClick = (place) => {
    setSelectedPlace(place);
  };

  const handleCloseClick = () => {
    setSelectedPlace(null);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userLocation || defaultCenter}
        zoom={11}
        onLoad={(map) => (mapRef.current = map)}
      >
        {/* User Location Marker */}
        {userLocation && (
          <Marker
            position={userLocation}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Custom icon for user's location
            }}
            title="Your Location"
          />
        )}

        {/* Place markers for each hospital */}
        {hospitals.map((hospital, index) => (
          <Marker
            key={index}
            position={{
              lat: hospital.geometry.location.lat,
              lng: hospital.geometry.location.lng,
            }}
            title={hospital.name}
            onClick={() => handleMarkerClick(hospital)} // Show InfoWindow on marker click
          />
        ))}

        {/* Show InfoWindow when a place is selected */}
        {selectedPlace && (
          <InfoWindow
            position={{
              lat: selectedPlace.geometry.location.lat,
              lng: selectedPlace.geometry.location.lng,
            }}
            onCloseClick={handleCloseClick}
          >
            <div>
              <h4>{selectedPlace.name}</h4>
              <p>{selectedPlace.vicinity}</p>
              {/* You can add more details here if needed */}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}
