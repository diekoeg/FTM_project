import React from 'react'

function AboutCard( {title, text,subtitle,subtext} ) {
  return (
    <div className='flex flex-col pt-10 gap-3'>
      <h1 className='text-5xl font-[Agbalumo]'>
        {title}
      </h1>
      <p className='text-xl'>
        {text}
      </p>
      {subtitle && 
        <h1 className='text-xl font-bold'>
          {subtitle}
        </h1>
      }
      {subtext && 
        <p className='text-xl'>
          {subtext}
        </p>
      }
    </div>
  )
}

export {AboutCard}