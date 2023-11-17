import React from 'react'
import { AboutCard } from '../AboutCard'

function AboutContainer() {
  return (
    <div className='w-full py-10 flex flex-col'>      
      <AboutCard
        title='¿Quiénes somos?'
        text='Somos un grupo integrado por individuos, movimientos e instituciones que 
        impulsan,promueven y trabajan con la juventud, científicos, investigadores, 
        empresarios, artesanos, gestores culturales, profesores, políticos, artistas, 
        deportistas, activistas, representantes de los pueblos indígenas  y demás 
        profesionales con proyectos en torno a los Objetivos de Desarrollo Sostenible y la 
        Agenda 2030 de la Organización de las Naciones Unidas.'
      />

        <AboutCard 
          title='Nuestra Misión'
          text='Fomentar y otorgar espacios de expresión e impulso local, nacional e internacional 
          a todas las personas involucradas, voces e iniciativas en México comprometidas con el 
          desarrollo del país, anteponiendo la filosofía del rescate, conservación y preservación
           de las culturas y pueblos originarios y acercando las oportunidades de forma prioritaria
            a individuos y comunidades marginadas. '
        />

        <AboutCard 
          title='Nuestra Visión'
          text='Ser el proyecto líder en la internacionalización de proyectos e iniciativas locales con la 
          base de un equipo multi, inter y transdisciplinario, multidimensional y multiétnico e intergeneracional 
          que genere espacios de discusión, investigación y  creación con una perspectiva intercultural.'
        />
    </div>
  )
}

export {AboutContainer}