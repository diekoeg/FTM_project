import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import HomeCard  from '../HomeCard'


function CarouselFMJ() {
  const texto1= "Te damos la bienvenida a la cuenta oficial del equipo México rumbo al Festival Mundial de la Juventud 2024. \
  ¡Comparte, haz preguntas y únete al equipo de un increíble evento internacional que sucederá en Sochi, Rusia! \
  Si deseas conectarte y estar en comunicación directa con más personas que aplicarán al Festival, únete a los canales oficiales\
   de la comunidad de 'México rumbo al Festival Mundial de la Juventud 2024'"

  const texto2 = "En la Embajada de Rusia en Mexico se mantuvo una reunión de protocolo entre el Excmo. Embajador Nikolái Sofinski\
   y miembros del cuerpo diplomático encargados de las áreas de cultura y de cooperación internacional humanitaria, con los representantes\
    del equipo Nacional Preparatorio en México y la Coordinación para América Latina y el Caribe del Festival Mundial de la Juventud, \
    que se organizará en Rusia el próximo año. Tanto la Embajada como la Casa rusa en la Ciudad de México , se suman a los esfuerzos de \
    difundir el Festival y a los proyectos que apliquen, en colaboración con en el equipo MéxicoFMJ2024 para realizar actividades\
     preparatorias que faciliten la comunicación e interacción entre los interesados y finalmente, enviar recomendaciones a la Dirección \
     del Festival para la selección y preparación de la delegación mexicana."


  return (
    <Carousel>
      <Carousel.Item>
        <HomeCard 
          isVideo={false}
          url={'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FFMJMEXICO2024%2Fvideos%2F341917034860801%2F&show_text=false&width=560&t=0'}
          title={'FMJ Embajada Rusa Mexico'}
          subtitle={'Promo Oficial'} 
          text={texto2}
          hiper={'https://clck.ru/35Kmwj'}
        />
      </Carousel.Item>
      <Carousel.Item>
        <HomeCard 
          isVideo={false}
          url={'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FFMJMEXICO2024%2Fvideos%2F250425884205430%2F&show_text=false&width=560&t=0'}
          title={'Festival Mundial de la Juventud 2024 '}
          subtitle={'Promo Oficial'} 
          text={texto1}
          hiper={'https://linktr.ee/fmjmexico2024'}
        />
      </Carousel.Item>
      <Carousel.Item>
        <HomeCard 
          isVideo={true}
          url={'src/assets/video1.webm'}
          title={'¿Qué es el Festival Mundial de las Juventudes?'}
          subtitle={'¡El Festival Mundial de la Juventud y los Estudiantes es el festival más importante en su tipo a nivel mundial!'} 
          text={'Reúne a jóvenes especialistas de más de 180 países provenientes de América, Oriente Medio, África, Eurasia, Asia y Oceanía, y Europa. Su misión es impulsar un movimiento juvenil global en torno de la idea de justicia y consolidar el papel de la juventud en el sistema emergente de relaciones internacionales. La agenda del Festival incluye una serie de programas científicos, educativos, de debate, culturales y deportivos y tiene proyectada la participación de más de 20,000 personas provenientes de todo el mundo.'}
          hiper={''}
        />
      </Carousel.Item>
      
    </Carousel>
  )
}


export {CarouselFMJ}