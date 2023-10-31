import React from 'react'
import Layout from '../../components/Layout'
import { FacebookFeed } from '../../components/FacebookFeed'

function Prensa() {
  
  window.FB.init({
    appId: 'tuAppIdDeFacebook',
    xfbml: true,
    version: 'v12.0',
  });

  return (
    <Layout>
      <h1 className='text-5xl font-[Agbalumo] mt-5'>Las últimas noticias</h1>
      <FacebookFeed />
      <hr className='border-1 border-black border-solid w-full'/>
      <h1 className='text-5xl font-[Agbalumo] mt-5'>Nuestras redes sociales</h1>
    </Layout>
  )
}

export {Prensa}