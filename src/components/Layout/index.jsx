import React from 'react'

function Layout({children}) {
  return (
    <div className='flex flex-col items-center mt-20 pt-10'>
      {children}
    </div>
  )
}

export default Layout