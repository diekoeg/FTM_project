import React from 'react'
import { geoModifiedStereographicGs48 } from "d3-geo-projection"
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';



function MapComponent({data}) {
  //const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'
  const geoUrl = new URL('/src/data/map.json',import.meta.url).href
  const projection = geoModifiedStereographicGs48()
  .scale(1500)
  .translate([520,-80])

  return (
    <ComposableMap projection={projection} className='border-2 rounded-tr-3xl rounded-bl-3xl bg-indigo-950'>
      <Geographies geography={geoUrl} >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography 
              key={geo.rsmKey} 
              geography={geo}
              className={`${ data && data.includes(geo.properties.state_name) && 'fill-lime-600'} 
                        fill-green-600 hover:fill-cyan-500`}
              />
          ))
        }
      </Geographies>
    

    </ComposableMap>
  )
}

export {MapComponent}