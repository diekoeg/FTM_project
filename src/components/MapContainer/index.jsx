import React from 'react'
import { MapComponent } from '../MapComponent'
import { Dropdown, Select } from 'flowbite-react';


function MapContainer() {
  const [searchValue, setSearchValue] = React.useState('');
  const [categorieDD, setcategorieDD] = React.useState('');

  const handleCategorie = (e) => {
    let cat = e.target.value;
    if (cat == 'Filtra por categoría'){
      cat = ''
    }
    setcategorieDD(cat)
  }


  let proyectos = ([
    {estado: 'Sinaloa',categoria:'Ciencia'},
    {estado: 'México',categoria:'Tecnología'},
    {estado: 'CDMX',categoria:'Deporte'},
    {estado: 'Nuevo León',categoria:'Educación'},
    {estado: 'Sonora',categoria:'Cultura'},
    {estado: 'Veracruz de Ignacio de la Llave',categoria:'Cultura'},
  ])

  const filetedStatesByCat = proyectos.filter((estado) => {
    return estado.categoria.includes(categorieDD)
  })

  let states = filetedStatesByCat.map((project) => (
    project.estado
  ))

  const filteredStates = states.filter((estado) => {
    const estadoText = estado.toLocaleLowerCase();
    const searchText = searchValue.toLowerCase();
    return estadoText.includes(searchText);
  })

 

  return (
    <div className=' flex flex-col justify-center w-full gap-4'>
      <input 
        className='p-3'
        placeholder='Filtra por estado' 
        onChange={(event) => {setSearchValue(event.target.value)}} 
        value={searchValue}
        />
        <Select id='cat' onChange={handleCategorie}>
          <option>Filtra por categoría</option>
          <option>Media</option>
          <option>Proyectos sociales</option>
          <option>Ciencia</option>
          <option>Negocios</option>
          <option>Voluntariado</option>
          <option>Cooperación internacional</option>
          <option>Educación</option>
          <option>Cultura</option>
          <option>Infancias </option>
        </Select>

        <MapComponent data={filteredStates}/>
    </div>
    
  )
}

export {MapContainer}