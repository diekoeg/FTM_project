import React from 'react'

function Layout({children}) {
  return (
    <div className='bg-gray-200 flex flex-col items-center mt-20 pt-10 w-full font-[Raleway]'>
      {children}
    </div>
  )
}

export default Layout