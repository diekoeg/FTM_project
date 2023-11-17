import React from 'react'

function ProjectContainer({children,titulo}) {
  return (
    <div className='flex flex-col w-full gap-3'>
        <h1 className='text-5xl font-[Agbalumo]'>{titulo}</h1>
        {children}
        <hr className='border-1 border-black border-solid w-full'/>
    </div>
  )
}

export {ProjectContainer}