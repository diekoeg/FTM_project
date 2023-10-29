import React from 'react'
import Layout from '../../components/Layout'
import { Accordion } from 'react-bootstrap'

function Faq() {
  return (
    <Layout>
      <h1 className='pt-10 text-5xl'>
        Preguntas Frecuentes
      </h1>
      <Accordion defaultActiveKey='0' flush className='w-full h-auto px-5'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header className='text-xl font-bold'>
            ¿Cómo puedo formar parte del Equipo Mexicano?
          </Accordion.Header>
          <Accordion.Body className='visible'>
          Deberá estar en los grupos y canales oficiales en las diferentes redes sociales como WhatsApp, Telegram.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header className='text-xl font-bold'>
            ¿Qué beneficios tiene ser parte del Equipo Mexicano?
          </Accordion.Header>
          <Accordion.Body className='visible'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header className='text-xl font-bold'>
          ¿Qué beneficios tiene ser patrocinador del Equipo Mexicano?
          </Accordion.Header>
          <Accordion.Body className='visible'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header className='text-xl font-bold'>
            ¿Ser parte del Equipo Mexicano tiene algún costo?
          </Accordion.Header>
          <Accordion.Body className='visible'>
          No tiene costo alguno.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4'>
          <Accordion.Header className='text-xl font-bold'>
            ¿Ser parte del Equipo Mexicano garantiza que sea seleccionado como parte de la Delegación Mexicana que representará a México en Rusia?
          </Accordion.Header>
          <Accordion.Body className='visible'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Layout>
  )
}

export {Faq}