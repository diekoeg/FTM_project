import { useState, useRef, useEffect } from 'react';
import { Carousel } from 'react-bootstrap'
import { CardTeammate } from '../CardTeammate'
import OwlCarousel from 'react-owl-carousel';
import '/src/utils/owlcarousel/assets/owl.carousel.min.css'
import '/src/utils/owlcarousel/assets/owl.theme.default.min.css';


function TeammatesContainer() {

  let team = ([
    {
      img: 'https://placehold.co/200',
      name: 'Ruzanna Malikova',
      title: 'Coordinación Regional para América Latina y el Caribe del Festival',
      subtitle: '',
      socials: ''
    },
    {
      img: 'https://placehold.co/200',
      name: 'Juan Antonio Carmona',
      title: 'Coordinación del proyecto Nacional y Representante del Festival en México',
      subtitle: 'Director Future Team México',
      socials: '@futureteammexico'
    },  
    {
      img: 'https://placehold.co/200',
      name: 'Gisel Vergara',
      title: 'Facilitadora del Equipo Mexicano FMJ Comunicación',
      subtitle: 'Altracorpo',
      socials: ''
    },
    {
      img: 'https://placehold.co/200',
      name: 'Dalí Estrada',
      title: 'Facilitadora del Equipo Mexicano FMJ Comunicación',
      subtitle: 'Fundación Arte Contra Violencia A.C',
      socials: '@artecontraviolencia'
    },
    {
      img: 'https://placehold.co/200',
      name: 'Edgar Zayas',
      title: 'Facilitador del Equipo Mexicano FMJ Alianzas y patrocinios',
      subtitle: '',
      socials: ''
    },
    {
      img: 'https://placehold.co/200',
      name: 'Georgina Quintero',
      title: 'Facilitadora del Equipo Mexicano',
      subtitle: 'Ateneo Nacional de la Juventud. A.C.',
      socials: ''
    },
  ])

  return (
    <div className='owl-theme flex gap-8 h-[540px] justify-center mx-10 w-full'>
      <OwlCarousel 
        loop margin={10} 
        items={4} 
        autoplay ={true}
        autoplayTimeout = {5000}
        responsive={{
          0: {
            items:1
          },
          600: {
            items:2
          },
          800:{
            items:3
          },
          1000:{
            items:4
          }
        }}>
      {
        team.map(person => (
          <div className='item'>
            <CardTeammate 
                key={person.name}
                img={person.img}
                name={person.name}
                title={person.title}
                subtitle={person.subtitle}
                socials={person.socials} />
          </div>
        ))
      }
      </OwlCarousel>
    </div>
  )
}

export {TeammatesContainer}