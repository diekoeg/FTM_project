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

  useEffect(() => {
    try {
      fetch('https://public-api.wordpress.com/rest/v1.1/sites/accl7.wordpress.com/posts/')
            .then(res=>res.json())
            .then(data => {
              setItems(data.posts)
              data.found%3 == 0 ? setCountPosts(Math.round(data.found/3)):setCountPosts(Math.round(data.found/3)+1)
            }
            )
      console.log(posts)
    } catch (error) {
    }
  }, [])

  
  
  return (
    <Layout>
      <h1 className='text-5xl font-[Agbalumo] mt-5'>Las últimas noticias</h1>
      <TimelineNews>
        {items?.slice((currentPage-1)*3,currentPage*3).map((item) => (
          <NewsItem key={item.ID}
                    title={item.title}
                    description={item.content}
                    date={item.date}
                    image={item.featured_image}
                    url={item.guid}
          />
        ))
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