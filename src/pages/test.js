import React from 'react';
import tw from 'twin.macro';
import mapboxgl from 'mapbox-gl';

import Socio from '../images/blackLogo.png';

const Container = tw.div `h-screen relative`;
const MapContainer = tw.div `absolute top-0 bottom-0 left-0 right-0`;
const BlackOverlay = tw.div `absolute top-0 bottom-0 left-0 right-0 bg-secondary opacity-70 pointer-events-none`;
const TextOverlay = tw.div `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold opacity-75`;

const Title = tw.h1`text-primary xl:text-3xl lg:text-3xl text-[50px] font-bold text-center mb-30`;

function Test() {
  const mapContainerRef = React.useRef(null);
  const [map, setMap] = React.useState(null);

  React.useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZW1tYW51ZWwwNjIxIiwiYSI6ImNsaGgxczAxdjAyNm8zaGxlc2JtcmZrOWgifQ.PegNdqdxbMMcGB9A3ZYRzQ';

    const mapbox = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-78.48, -0.1807],
      zoom: 14
    });

    setMap(mapbox);

    return () => mapbox.remove();
  }, []);

  return (
    <Container>
      <MapContainer ref={mapContainerRef}>
        <BlackOverlay />
      </MapContainer>
      {map && (
        <TextOverlay>
          <img src={Socio} alt="Socio Logo" />
          <Title>Datos sobre delitos. <br /> 
          Por y para tu comunidad.</Title>
        </TextOverlay>
      )}
    </Container>
  );
}

export default Test;
