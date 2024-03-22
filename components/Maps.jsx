'use client';
import * as React from 'react';
import { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import { BiSolidCoffeeAlt } from 'react-icons/bi';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Link } from "@nextui-org/react";


export default function MapsComponents(props) {
    const markers = props.data;
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [markerClicked, setMarkerClicked] = useState(null);

    const initialViewState = {
        longitude: -77.046005,
        latitude: -12.0750954,
        zoom: 13,
        pitch: 0,
        bearing: 0,
    };
    return (
        <>
            <Map
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                initialViewState={initialViewState}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                {markers.map((marker) => (
                    <Marker
                        key={`marker-${marker.id}`}
                        longitude={marker.longitude}
                        latitude={marker.latitude}
                        anchor="bottom"
                        onClick={e => {
                            onOpen();
                            setMarkerClicked(marker);
                        }}
                    >
                        <BiSolidCoffeeAlt size={32} color='black' />
                    </Marker>
                ))}
            </Map>
            {markerClicked && (
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">{markerClicked.title}</ModalHeader>
                                <ModalBody>
                                    <p>
                                        {markerClicked.description}
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                  
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            )}
        </>
    );
}