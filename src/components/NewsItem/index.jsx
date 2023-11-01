import { Button, Timeline } from 'flowbite-react'
import React from 'react'
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi'
import removeHTMLTagFromString from '/src/utils/removeHTMLTagFromString.js'
import getFirstP from '/src/utils/getFirstP.js'
import reformatDate from '/src/utils/reformatDate.js'

function NewsItem({title,date,description,image}) {

  let firstP = getFirstP(description)
  description = removeHTMLTagFromString(firstP)

  date = reformatDate(date)



  return (
    <div>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>
            {date}
          </Timeline.Time>
          <div className='flex flex-col mt-2 gap-3 w-full items-center lg:items-start lg:flex-row'>
            {image && 
              <img src={image} alt={title} className='max-w-[300px]'/>
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
              <Button color="gray">
                <p>
                  Ver más
                </p>
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