import React, { useEffect } from 'react';
import { MapContainer, Popup, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const districts = [
    { name: "Dhaka", position: [23.8103, 90.4125] },
    { name: "Chattogram", position: [22.3569, 91.7832] },
    { name: "Rajshahi", position: [24.3745, 88.6042] },
    { name: "Khulna", position: [22.8456, 89.5403] },
    { name: "Sylhet", position: [24.8949, 91.8687] },
    { name: "Barishal", position: [22.7010, 90.3535] },
    { name: "Rangpur", position: [25.7439, 89.2752] },
    { name: "Mymensingh", position: [24.7471, 90.4203] },
    { name: "Cumilla", position: [23.4607, 91.1809] },
    { name: "Narayanganj", position: [23.6238, 90.5000] },
];

// 🔹 Map controller component
const MapController = ({ searchValue }) => {
    const map = useMap(); // Always have to use useMap in a children of MapContainer

    useEffect(() => {
        if (!searchValue) return;

        const district = districts.find(d =>
            d.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        if (district) {
            map.flyTo(district.position, 10, { // 10 is zoom level
                duration: 1.5
            });
        }
    }, [searchValue, map]); // Value that are used but not defined in useEffect and values that are used but can change later must be in dependency array

    return null;
};

const Map = ({ searchValue }) => {
    const centerPosition = [23.8103, 90.4125];

    return (
        <div className='w-100 md:w-170 lg:w-240'>
            <MapContainer
                center={centerPosition}
                zoom={7}
                style={{ height: "500px", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MapController searchValue={searchValue} />

                {districts.map((district, index) => (
                    <Marker key={index} position={district.position}>
                        <Popup>{district.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
