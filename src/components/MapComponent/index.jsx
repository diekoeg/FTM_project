import React from 'react'
import { geoModifiedStereographicGs48 } from "d3-geo-projection"
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';



function MapComponent({data}) {
  //const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'
  const geoUrl = 'src/data/map.json'

const projection = geoModifiedStereographicGs48()
  .scale(1500)
  .translate([520,-80])

  return (
    <ComposableMap projection={projection} className='border-2 border-black'>
      <Geographies geography={geoUrl} >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography 
              key={geo.rsmKey} 
              geography={geo} 
              className={`${data.includes(geo.properties.state_name) && 'fill-cyan-500'} 
                        fill-black hover:fill-gray-500`}
              onClick={() =>console.log(geo.properties.state_name)}/>
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}

export {MapComponent}