import React from 'react'
import { Page } from 'react-facebook';

function FacebookFeed() {

  return (
    <div>
      <div className="fb-page w-[180px] sm:w-[500px] mx-3" 
        data-href="https://www.facebook.com/FMJMEXICO2024" 
        data-tabs="timeline" 
        data-small-header="false" 
        data-adapt-container-width="true" 
        data-hide-cover="false" 
        data-show-facepile="true"
        data-width="500">
          <blockquote cite="https://www.facebook.com/FMJMEXICO2024" 
                      className="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/FMJMEXICO2024">
              Future Team Mexico
            </a>
          </blockquote>
        </div>
    </div>
  )
}

export {FacebookFeed}