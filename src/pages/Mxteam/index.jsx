import React from 'react'
import Layout from '../../components/Layout'
import { MapContainer } from '../../components/MapContainer'
import { AboutContainer } from '../../components/AboutContainer'
import { CardTeammate } from '../../components/CardTeammate'
import { TeammatesContainer } from '../../components/TeammatesContainer'

function Mxteam() {


  return (
    <Layout>
      <AboutContainer />
      <hr className='border-1 border-black border-solid w-full'/>
      <h1 id='team' className='text-5xl font-[Agbalumo]'>Conoce al Equipo Mexicano</h1>
      <TeammatesContainer/>
      <hr className='border-1 border-black border-solid w-full'/>
      <h1  id='alcance' className='text-5xl font-[Agbalumo]'>Alcance</h1>
      <hr className='border-1 border-black border-solid w-full'/>
      <h1  id='join' className='text-5xl font-[Agbalumo]'>Únete al Proyecto</h1>
      <MapContainer />
    </Layout>
  )
}

export {Mxteam}