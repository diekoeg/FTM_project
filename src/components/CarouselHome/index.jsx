import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

function CarouselHome() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image src='src\assets\Portada.webp'/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='src\assets\EVENTOS.webp'/>
      </Carousel.Item>
    </Carousel>
  )
}

export {CarouselHome}