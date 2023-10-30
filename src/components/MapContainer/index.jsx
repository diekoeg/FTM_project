import React from 'react'
import { MapComponent } from '../MapComponent'


function MapContainer() {
  const [searchValue, setSearchValue] = React.useState('');


  let proyectos = ([
    {estado: 'Sinaloa',categoria:'Ciencia'},
    {estado: 'México',categoria:'Tecnologia'},
    {estado: 'CDMX',categoria:'Deporte'},
    {estado: 'Nuevo León',categoria:'Educación'},
    {estado: 'Sonora',categoria:'Cultura'},
    {estado: 'Veracruz de Ignacio de la Llave',categoria:'Cultura'},
  ])

  let states = proyectos.map((project) => (
    project.estado
  ))

  const filteredStates = states.filter((estado) => {
    const estadoText = estado.toLocaleLowerCase();
    const searchText = searchValue.toLowerCase();
    return estadoText.includes(searchText);
  })

  return (
    <div className=' flex w-full gap-1'>
      <MapComponent data={filteredStates}/>
      <input onChange={(event) => {
        setSearchValue(event.target.value)
        }} 
        value={searchValue}
        />
    </div>
    
  )
}

export {MapContainer}