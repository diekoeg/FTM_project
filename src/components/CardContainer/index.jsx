import React from 'react'

function CardContainer({children}) {
  return (
    <div className='flex flex-wrap justify-center gap-x-9 gap-y-16 my-16'>
      {children}
    </div>
  )
}

export {CardContainer}