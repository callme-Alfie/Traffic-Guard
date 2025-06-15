// src/components/RealTimeMonitoring/TrafficVisualization.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { MapPin, Camera } from 'lucide-react';
import '../../styles/RealTimeMonitoring.css';

// 👇 Pull your TomTom environment variables
const INCIDENT_API = import.meta.env.VITE_TOMTOM_TRAFFIC_URL;
const TOMTOM_KEY   = import.meta.env.VITE_TOMTOM_KEY;
const CAM_API = import.meta.env.VITE_CAMERA_API_URL;

// Helper to recenter the map when coords change
function Recenter({ coords }) {
  const map = useMap();
  map.setView([coords.lat, coords.lng], 13);
  return null;
}

export default function TrafficVisualization() {
  const [tab, setTab]           = useState('map');
  const [coords, setCoords]     = useState({ lat: 51.505, lng: -0.09 });
  const [incidents, setIncidents]   = useState([]);
  const [cameraFeeds, setCameraFeeds] = useState([]);

  // 1️⃣ Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        setCoords({ lat: coords.latitude, lng: coords.longitude }),
      () => {}  // ignore errors
    );
  }, []);

  // 2️⃣ Fetch live TomTom incidents when on Map tab
  useEffect(() => {
    if (tab !== 'map') return;

    const { lat, lng } = coords;
    const bbox = `${lat-0.02},${lng-0.02},${lat+0.02},${lng+0.02}`;

    axios.get(INCIDENT_API, {
      params: {
        key: TOMTOM_KEY,
        bbox,
        fields: 'incidents{geometry,properties{description}}',
        language: 'en-GB',
        t: 'latest',
        timeValidityFilter: 'present'
      }
    })
    .then(res => {
      const incs = Array.isArray(res.data.incidents)
        ? res.data.incidents
        : [];
      setIncidents(incs);
    })
    .catch(err => {
      console.error('TomTom Incident API error:', err);
      setIncidents([]);
    });
  }, [tab, coords]);

  // 3️⃣ Fetch camera feeds when on Camera tab (replace with real API)
  useEffect(() => {
   if (tab !== 'camera') return;

   axios.get(CAM_API, {
     // you can pass Seattle’s API any filters here, e.g. limit:
     params: { $limit: 12 }
        })
    .then(res => {
      // Seattle returns an array of objects; each has camid, cameralabel, imageurl.url
      const feeds = res.data.map(cam => ({
        id: cam.camid,
        name: cam.cameralabel || cam.camid,
        streamUrl: cam.imageurl?.url  // note: lowercase field
      }));
      setCameraFeeds(feeds);
    })
    .catch(err => {
      console.error('Camera API error:', err);
      setCameraFeeds([]);
    });
  }, [tab]);

  return (
    <div className="tv-container">
      <div className="tv-tabs">
        <button
          className={tab === 'map' ? 'active' : ''}
          onClick={() => setTab('map')}
        >
          <MapPin size={16} /> Map View
        </button>
        <button
          className={tab === 'camera' ? 'active' : ''}
          onClick={() => setTab('camera')}
        >
          <Camera size={16} /> Camera Feed
        </button>
      </div>

      <div className="tv-content">
        {tab === 'map' ? (
          <MapContainer
            className="map-container"
            center={[coords.lat, coords.lng]}
            zoom={13}
            style={{ height: 300, borderRadius: '0.5rem' }}
          >
            <Recenter coords={coords} />

            <TileLayer
              attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Your current location */}
            <Marker position={[coords.lat, coords.lng]}>
              <Popup>Your location</Popup>
            </Marker>

            {/* Live incident markers */}
            {incidents.map((inc, i) => (
              <Marker
                key={i}
                position={[
                  inc.geometry.coordinates[1],
                  inc.geometry.coordinates[0]
                ]}
              >
                <Popup>{inc.properties.description}</Popup>
              </Marker>
            ))}

          </MapContainer>
        ) : (
          <div className="camera-grid">
            {cameraFeeds.map(feed => (
      <div key={feed.id} className="camera-item">
        <img
          src={feed.streamUrl}
          alt={feed.name}
          className="camera-video"
        />
        <p className="camera-label">{feed.name}</p>
    </div>
  ))}
          </div>
        )}
      </div>
    </div>
  );
}
