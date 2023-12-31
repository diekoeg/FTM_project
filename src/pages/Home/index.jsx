import React from 'react'
import Layout from '../../components/Layout'
import { CarouselHome } from '../../components/CarouselHome'
import { CarouselFMJ } from '../../components/CarouselFMJ'
import { InfoCard } from '../../components/infoCard'
import { CardContainer } from '../../components/CardContainer'

function Home() {
  const placeholder= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  const imgPlaceHolder = "https://placehold.co/600x600"
  let infoCards = ([
    {
      img:'https://drive.google.com/uc?export=view&id=1vP0I4bPJZBgkZ5ZDuWRlEO7_gUNaJmHz',
      title:'¡Conoce al Equipo Mexicano rumbo al FTJ!',
      text:placeholder,
      isRight:true,
      color:'bg-orange-200'
    },
    {
      img:'https://drive.google.com/uc?export=view&id=1irZDkom_pRgOIJGhtsD7FSnURLxUX3BK',
      title:'¿Te gustaría unirte al Equipo Mexicano?',
      text:placeholder,
      isRight:false,
      color:'bg-yellow-200'
    },
    {
      img:'https://drive.google.com/uc?export=view&id=1xT-ECPNH29GBEye-flLB2rsRJGsyW5_s',
      title:'Nuestras redes de comunicación social',
      text:placeholder,
      isRight:true,
      color:'bg-red-200'
    },
    {
      img:'https://drive.google.com/uc?export=view&id=1A09LFIGUwltrcRbXWDlT3YCd8C72taFr',
      title:'¡Conoce las últimas novedades!',
      text:placeholder,
      isRight:false,
      color:'bg-blue-200'
    },
  ])
  return (
    <Layout>
      <h1 className='my-5 pt-5 text-4xl sm:text-6xl text-center font-bold'> 
        ¡MÉXICO RUMBO AL FESTIVAL MUNDIAL DE LAS JUVENTUDES RUSIA 2024! 
      </h1>
      <CarouselHome />
      <CarouselFMJ/>
      <hr className='border-1 border-black border-solid w-full'/>
      <CardContainer>
        {infoCards.map(card => (
          <InfoCard 
          key={card.title}
          img={card.img}
          title={card.title}
          text={card.text}
          isRight={card.isRight}
          color={card.color}/>
        ))
        }
      </CardContainer>
    </Layout>
  )
}

export {Home}