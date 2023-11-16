import { Button, Timeline } from 'flowbite-react'
import React, { useEffect } from 'react'
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi'
import removeHTMLTagFromString from '/src/utils/removeHTMLTagFromString.js'
import getFirstP from '/src/utils/getFirstP.js'
import reformatDate from '/src/utils/reformatDate.js'

function NewsItem({title,date,description,image,url}) {

  let firstP = getFirstP(description)
  description = removeHTMLTagFromString(firstP)

  date = reformatDate(date)

  const [img, setImg] = React.useState(null)
  useEffect(() => {
    if (image != '0'){
      try {
        fetch(`https://fmjmexico2024.org/wp-json/wp/v2/media/${image}`)
              .then(res=>res.json())
              .then(data => {
                setImg(data.link)
              }
              )
      } catch (error) {
      }
    }
    
  }, [])


  return (
    <div>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>
            {date}
          </Timeline.Time>
          <div className='flex flex-col mt-2 gap-3 w-full items-center lg:items-start lg:flex-row'>
            {image != '0' && 
              <img src={img} alt={title} className='max-w-[300px] max-h-[300px]'/>
            }
            <div>
              <Timeline.Title>
                {title}
              </Timeline.Title>
              <Timeline.Body>
                <p>
                  {description}
                </p>
              </Timeline.Body>
              <Button className='w-36' variant="secondary" href={url}>
                  Ver más
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
        </Timeline.Content>
      </Timeline.Item>
    </div>
  )
}

export {NewsItem}