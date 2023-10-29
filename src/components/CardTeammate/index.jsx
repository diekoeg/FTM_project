import React from 'react'
import { Image } from 'react-bootstrap'

function CardTeammate({img,name,title,subtitle,socials}) {
  return (

    <div className='flex items-center flex-col min-w-[220px]'>
      <div className='bg-gray-200 flex justify-center p-3 rounded-t-3xl'>
      <Image src={img} width={'200px'} 
              className='border-2 rounded-full'/>
      </div>
      <div className='flex justify-center w-full text-gray-200 text-center h-auto max-h-[390px] rounded-b-3xl bg-gray-500'>
        <div className='py-3 flex flex-col justify-between px-3'>
          <h2 className='text-xl font-bold'>
            {name}
          </h2>
          <p className='text-lg py-2 text-gray-200'>
            {title}
          </p>
          <p className='text-md py-2 text-gray-200'>
            {subtitle}
          </p>
          <p className='text-md py-2 text-gray-200'>
            {socials}
          </p>
        </div>
      </div>
    </div>
    
    
  )
}

export {CardTeammate}