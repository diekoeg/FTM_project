import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import HomeCard  from '../HomeCard'


function CarouselFMJ() {
  const texto1= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."


  return (
    <Carousel>
      <Carousel.Item>
        <HomeCard 
          isVideo={true}
          url={'src/assets/video1.webm'}
          title={'¿Qué es el Festival Mundial de las Juventudes?'}
          subtitle={'¡El Festival Mundial de la Juventud y los Estudiantes es el festival más importante en su tipo a nivel mundial!'} 
          text={'Reúne a jóvenes especialistas de más de 180 países provenientes de América, Oriente Medio, África, Eurasia, Asia y Oceanía, y Europa. Su misión es impulsar un movimiento juvenil global en torno de la idea de justicia y consolidar el papel de la juventud en el sistema emergente de relaciones internacionales. La agenda del Festival incluye una serie de programas científicos, educativos, de debate, culturales y deportivos y tiene proyectada la participación de más de 20,000 personas provenientes de todo el mundo.'}
        />
      </Carousel.Item>
      <Carousel.Item>
        <HomeCard 
          isVideo={false}
          url={'https://placehold.co/600x365'}
          title={'titulo 2?'}
          subtitle={'Sub2 ?'} 
          text={texto1}
        />
      </Carousel.Item>
    </Carousel>
  )
}

export {CarouselFMJ}