import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { FacebookFeed } from '../../components/FacebookFeed'
import { TimelineNews } from '../../components/TimelineNews';
import { TimelineItem } from 'flowbite-react/lib/esm/components/Timeline/TimelineItem';
import { NewsItem } from '../../components/NewsItem';

function Prensa() {
  window.FB.init({
    appId: 'tuAppIdDeFacebook',
    xfbml: true,
    version: 'v12.0',
  });

  const [items, setItems] = React.useState(null)
  const [posts,setPosts] = React.useState(null)

  useEffect(() => {
    try {
      fetch('https://public-api.wordpress.com/rest/v1.1/sites/accl7.wordpress.com/posts/')
            .then(res=>res.json())
            .then(data => setItems(data.posts))
    } catch (error) {
    }
  }, [])
  
  

  return (
    <Layout>
      <h1 className='text-5xl font-[Agbalumo] mt-5'>Las últimas noticias</h1>
      <TimelineNews>
        {items?.map((item) => (
          <NewsItem key={item.ID}
                    title={item.title}
                    description={item.content}
                    date={item.date}
                    image={item.featured_image}
          />
        ))
        }
      </TimelineNews>
      
      <hr className='border-1 border-black border-solid w-full'/>
      <h1 className='text-5xl font-[Agbalumo] '>Nuestras redes sociales</h1>
      <FacebookFeed />
    </Layout>
  )
}

export {Prensa}