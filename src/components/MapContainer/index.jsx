import React from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";


function MapContainer() {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  let proyectos = ([
    {estado: 'Sinaloa',categoria:'Ciencia'},
    {estado: 'Estado de México',categoria:'Tecnologia'},
    {estado: 'CDMX',categoria:'Deporte'},
    {estado: 'Monterrey',categoria:'Educación'},
    {estado: 'Sonora',categoria:'Cultura'},
  ])

  return (
    <Wrapper apiKey={"YOUR_API_KEY"}>
      <YourComponent/>
    </Wrapper>
  )
}

export {MapContainer}