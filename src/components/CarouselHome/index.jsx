import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

function CarouselHome() {
  const img1 = new URL('/src/assets/Portada.webp',import.meta.url).href
  const img2 = new URL('/src/assets/EVENTOS.webp',import.meta.url).href

  return (
    <Carousel fade>
      <Carousel.Item>
        <Image src={img1}/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={img2} />
      </Carousel.Item>
    </Carousel>
  )
}

export {CarouselHome}