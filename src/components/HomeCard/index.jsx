import React from 'react'
import { Image } from 'react-bootstrap'

function HomeCard({isVideo,url,title,subtitle,text,hiper}) {
  return (
    <div className='w-full rounded-sm flex flex-col my-4
                    xl:grid xl:grid-rows-1 xl:grid-cols-8 xl:justify-between '>
      <div className='xl:col-start-1 xl:col-end-5 my-4'>
      { isVideo ? (
        <video src={url} className='aspect-video object-contain' controls></video>
        )
      :
      <iframe src={url}  
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
              className='aspect-video object-contain w-full'/>
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
        {
          hiper && 
            <p>
              Conoce más en <a className='underline text-blue-700' href={hiper}>{hiper}</a>
            </p>
        }
      </div>
    </div>
  )
}

export default HomeCard