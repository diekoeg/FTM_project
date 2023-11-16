import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { FacebookFeed } from '../../components/FacebookFeed'
import { TimelineNews } from '../../components/TimelineNews';
import { NewsItem } from '../../components/NewsItem';
import PaginationComponent from '../../components/PaginationComponent';
import { Pagination } from 'flowbite-react';

function Prensa() {
  window.FB.init({
    appId: 'tuAppIdDeFacebook',
    xfbml: true,
    version: 'v12.0',
  });

  const [items, setItems] = React.useState(null)
  const [countPosts, setCountPosts] = React.useState(0)
  const [currentPage, setCurrentPage] = React.useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page)
  }

  // https://public-api.wordpress.com/rest/v1.1/sites/accl7.wordpress.com/posts/
  
  useEffect(() => {
    try {
      fetch('https://fmjmexico2024.org/wp-json/wp/v2/posts')
            .then(res=>res.json())
            .then(data => {
              setItems(data)
              const size = data.length
              size%3 == 0 ? setCountPosts(Math.round(size/4)):setCountPosts(Math.round(size/4)+1)
            }
            )
    } catch (error) {
    }
  }, [])


  
  return (
    <Layout>
      <h1 className='text-5xl font-[Agbalumo] mt-5'>Las últimas noticias</h1>
      <TimelineNews>
        {items?.slice((currentPage-1)*4,currentPage*4).map((item) => (
          <NewsItem key={item.id}
                    title={item.title.rendered}
                    description={item.content.rendered}
                    date={item.date}
                    image={item.featured_media}
                    url={item.guid.rendered}
          />
        )
        )
        }
      </TimelineNews>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination currentPage={currentPage} totalPages={countPosts} onPageChange={onPageChange} showIcons />
      </div>
      <hr className='border-1 border-black border-solid w-full'/>
      <h1 className='text-5xl font-[Agbalumo] '>Nuestras redes sociales</h1>
      <FacebookFeed />
    </Layout>
  )
}

export {Prensa}