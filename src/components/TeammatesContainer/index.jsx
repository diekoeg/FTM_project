import { useState, useRef, useEffect } from 'react';
import { Carousel } from 'react-bootstrap'
import { CardTeammate } from '../CardTeammate'

const recipes = [0, 1, 2, 3, 4, 5];

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

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className='flex gap-8 h-[540px] justify-center mx-10 w-full'>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            // disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            // disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-x-10 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {
            team.map(person => (
              <CardTeammate 
                    key={person.name}
                    img={person.img}
                    name={person.name}
                    title={person.title}
                    subtitle={person.subtitle}
                    socials={person.socials} />
            ))
          }
        </div>
      </div>
      {/* <Carousel>
        {team.reduce(reduceRecipes,[]).map((teams,index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center gap-x-10">
              {teams.map(person => {
                return(
                  <CardTeammate 
                    key={person.name}
                    img={person.img}
                    name={person.name}
                    title={person.title}
                    subtitle={person.subtitle}
                    socials={person.socials} />
                )
              })}
            </div>
          </Carousel.Item>
        ))}
      </Carousel> */}
    </div>

    // <div className='flex gap-8 mx-10 scrolling-auto overflow-scroll'>
    // </div>
  )
}

export {TeammatesContainer}