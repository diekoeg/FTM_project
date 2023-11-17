import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { MapContainer } from '../../components/MapContainer'
import { AboutContainer } from '../../components/AboutContainer'
import { TeammatesContainer } from '../../components/TeammatesContainer'
function Mxteam() {


  const qr2 = new URL('/src/assets/qr-2.webp',import.meta.url).href
  const qr3 = new URL('/src/assets/qr-3.webp',import.meta.url).href
  const qr4 = new URL('/src/assets/qr-4.webp',import.meta.url).href



  return (
    <Layout>
      <AboutContainer />
      <hr className='border-1 border-black border-solid w-full'/>
      <h1 id='team' className='text-5xl font-[Agbalumo]'>Conoce al Equipo Mexicano</h1>
      <TeammatesContainer/>
      <hr className='border-1 border-black border-solid w-full'/>
      <h1  id='alcance' className='text-5xl font-[Agbalumo]'>Alcance</h1>
      <div className='w-full text-start text-lg'>
        <p>
          El equipo mexicano se posiciona como un proyecto excepcional, líder e innovador con las mejores prácticas a replicar en otros países.
        </p>
        <ul className='list-disc px-5'>
          <li>Presencia en gran parte de la República Mexicana y el extranjero.</li>
          <li>Más de 30 encuentros virtuales</li>
          <li>Más de 2 reuniones presenciales en el Senado de la República.</li>
          <li>Más de 10 actividades preparatorias de difusión.</li>
          <li>Más de 100 voluntarios y especializados involucrados.</li>
        </ul>
      </div>
      <h2 className='text-xl font-bold'>
        Conoce los proyectos que forman parte del Equipo Mexicano
      </h2>
      <MapContainer/>
      <hr className='border-1 border-black border-solid w-full'/>
      
    </Layout>
  )
}

export {Mxteam}