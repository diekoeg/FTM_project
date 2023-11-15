import { Timeline } from 'flowbite-react'
import React from 'react'

function TimelineNews({children}) {
  return (
    <div className='w-full'>
      <Timeline>
        {children}
      </Timeline>
      
    </div>
    
  )
}

export {TimelineNews}