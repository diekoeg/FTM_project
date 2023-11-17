import React from 'react'
import Layout from '../../components/Layout'
import { ProjectContainer } from '../../ProjectContainer'
import { Image } from 'react-bootstrap'

function Projects() {
  const qr1 = new URL('/src/assets/qr-1.webp',import.meta.url).href
  const qr2 = new URL('/src/assets/qr-2.webp',import.meta.url).href
  const qr3 = new URL('/src/assets/qr-3.webp',import.meta.url).href
  const qr4 = new URL('/src/assets/qr-4.webp',import.meta.url).href

  return (
    <Layout>
      <h1 className='text-5xl font-[Agbalumo] mt-5'>Proyectos</h1>
      <ProjectContainer titulo={'México Rumbo al Festival'}>
        <p>
          Gestado desde FUTURE TEAM MEXICO, plataforma y movimiento internaciona de jóvenes líderes de todo el mundo,
          funciona como una red global objetivada a discutir de manera conjunta y encontrar soluciones a los problemas globales y locales, reuniendo a más de 150,000 embajadores voluntarios de mas de 180 países, apoyado en México por la Agencia Conjunta de Cooperación Glocal y que surgen en 2017, como resultado del último Festival Mundial de la Juventud.
        </p>
        <p>
        El Festival Mundial de la Juventud reúne a jóvenes especialistas de más de 180 países provenientes de América, Oriente Medio, Africa, Eurasia, Asia y Oceanía, y Europa. 
        </p>
        <h2 className='text-xl font-bold'>
        Numeralia
        </h2>
        <p>
          Actualmente existen alrededor de más de 130 participantes y organizaciones
          representadas desde la sociedad civil, el sector público y privado.
        </p>
        <h2 className='text-xl font-bold'>
        Registro Oficial
        </h2>
        <p>
          La agenda del Festival incluye una serie de programas científicos, educativos, de debate, culturales y deportivos.
          Puedes registrarte siguiendo siguiendo este &#160;
          <a className='underline text-blue-600' href="https://fest2024.com/en/participant">
            enlace.
          </a>
        </p>
        <h1  className='text-5xl font-[Agbalumo]'>Únete al Equipo Mexicano</h1>
        <p>
        Del 29 de febrero al 7 de marzo de 2024 En sochi, rusia se llevará acabo el festival mundial de la juventud, El más importante de su tipo a nivel global
        Visita la página oficial &#160;
          <a className='underline text-blue-600' href="https://fmjmexico2024.org/">
            pulsando aquí.
          </a>
        </p>
        <p>
          Para más información escanea los siguientes códigos QR.
        </p>
        <div className='flex flex-row flex-wrap gap-3 items-center justify-center'>
          <Image src={qr1} className='max-w-[300px]'/>
          <Image src={qr2} className='max-w-[300px]'/>
          <Image src={qr3} className='max-w-[300px]'/>
          <Image src={qr4} className='max-w-[300px]'/>
        </div>
        <h1   className='text-5xl font-[Agbalumo]'>Redes sociales</h1>

      </ProjectContainer>
    </Layout>
  )
}

export {Projects}