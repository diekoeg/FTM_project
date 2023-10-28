import React from 'react'
import { Image } from 'react-bootstrap'

function HomeCard({isVideo,url,title,subtitle,text}) {
  return (
    <div className='w-full rounded-sm flex flex-col
                    xl:grid xl:grid-rows-1 xl:grid-cols-8 xl:justify-between '>
      <div className='xl:col-start-1 xl:col-end-5'>
      { isVideo ? (
        <video src={url} className='aspect-video object-contain' controls></video>
        )
      :
        <Image src={url} className='aspect-video object-contain'/>
      }
      
      </div>
      <div className='py-3 xl:col-start-5 xl:col-end-9 mx-5'>
        <h2 className='text-3xl text-center text-red-500 font-bold'>
          {title}
        </h2>
        <h3 className='py-2.5 text-xl font-semibold text-gray-600 text-center'>
          {subtitle}
        </h3>
        <p className='text-md'>
          {text}
        </p>
      </div>
    </div>
  )
}

export default HomeCard