import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Home.css';

function Home() {
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        fetch('/api/coordinates')
            .then(response => response.json())
            .then(data => setCoordinates(data))
            .catch(error => console.error('Error fetching coordinates:', error));
    }, []);

    return (
        <MapContainer center={[39.8628, -4.0273]} zoom={13} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.carto.com/">CARTO</a>'
            />

            {coordinates.map((coord, index) => (
                <Marker key={index} position={[coord.y, coord.x]} />
            ))}
        </MapContainer>
    );
}

export default Home;