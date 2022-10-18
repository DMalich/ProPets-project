import React, { useState } from "react";
import styled from "styled-components";
import { GoogleMap, LoadScript, Marker, InfoWindow, } from "@react-google-maps/api";

function BeautyStudios() {
    const containerStyle = {
        width: "500px",
        height: "500px",
    };

    const center = {
        lat: 31.791637855851814,
        lng: 34.63925685297195
    };
    
    const markers = [
        { lat: 31.803197, lng: 34.642172, title: "Beauty Studio1", address: "Ashdod, Rogozin 44", number: "054-5555555" },
        { lat: 31.8072, lng: 34.6413, title: "Beauty Studio2", address: "Ashdod, HaEshel 12", number: "054-5454444" },
        { lat: 31.796154, lng: 34.642826, title: "Beauty Studio3", address: "Ashdod, Herzl 121", number: "053-3118748" },
        { lat: 31.7845, lng: 34.634095, title: "Beauty Studio4", address: "Ashdod, Kineret 73", number: "058-0588505" },
        { lat: 31.788804, lng: 34.657447, title: 'Beauty Studio5', address: 'Ashdod, Erushalaim 99', number: '052-3409583'},
        { lat: 31.673173, lng: 34.568111, title: 'Beauty Studio6', address: 'Ashqelon, HaNasi 80', number: '050-4445851'}, 
        { lat: 31.691057, lng: 34.574879, title: 'Beauty Studio7', address: 'Ashqelon, Haim Sela, 6', number: '058-1234567'}
    ];

    const [selectedMarker, setSelectedMarker] = useState(null);

    return (
        <Container>
            <Header>
                <b>Beauty Studios.</b>They deserve it too.
            </Header>
            <LoadScript googleMapsApiKey="AIzaSyAJ8W9ZFoibPXr1H_FcdmUsBQP9Wzglh-Q">
                <GoogleMap mapContainerStyle={containerStyle} zoom={15} center={center}>
                    {markers.map((coordinates, id) => (
                        <Marker key={id} position={coordinates} onClick={() => setSelectedMarker(coordinates)}/>
                    ))}
                    {selectedMarker && (<InfoWindow position={selectedMarker} onCloseClick={() => setSelectedMarker(null)}>
                        <>
                            <h4>{selectedMarker.title}</h4>
                            <h6>{selectedMarker.address}</h6>
                            <h6>{selectedMarker.number}</h6>
                        </>
                    </InfoWindow>)}
                </GoogleMap>
            </LoadScript>
        </Container>
    );
}

const Container = styled.div`
    padding-left: 4rem;
    margin-top: 1rem;
`;
const Header = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

export default BeautyStudios;
