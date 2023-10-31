import React from 'react'
import Layout from '../../components/Layout'
import { TimelineEvents } from '../../components/TimelineEvents'

function Events() {
  return (
    <Layout>
      <h1 className='text-5xl font-[Agbalumo] mt-5'>Eventos</h1>
      <TimelineEvents />
    </Layout>
  )
}

export {Events}