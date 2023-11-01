import React from 'react'
import { Image } from 'react-bootstrap'

function InfoCard({img,title,text,color,isRight}) {
  return (

    <div className={`flex justify-center items-center flex-col w-[390px] min-w-[200px]
                    xl:flex-row xl:justify-start xl:w-5/6 xl:h-[260px] 
                    xl:my-10 ${isRight && 'xl:flex-row-reverse'}`}>
      <Image src={img}  
              className='border-2 xl:absolute rounded-t-3xl xl:rounded-full w-[80%] sm:w-[390px] '/>
      <div className={`flex border-2 w-[80%] h-auto max-h-[390px] ${color } rounded-b-3xl 
                       xl:h-full xl:rounded-3xl xl:items-center sm:w-full
                       ${isRight ? 'xl:mr-48':'xl:ml-48'}  `}>
        <div className={`py-3 flex flex-col items-center pr-3 pl-3
                        ${isRight ? 'xl:pr-56 xl:pl-5':'xl:pl-56 xl:pr-5'} `}>
          <h2 className='text-4xl font-[Agbalumo] text-center'>
            {title}
          </h2>
          <p className='text-md py-3 font-[Raleway]'>
            {text}
          </p>
          <span className='text-xl'>
            Saber más...
          </span>
        </div>
      </div>
    </div>
    
    
  )
}

export {InfoCard}