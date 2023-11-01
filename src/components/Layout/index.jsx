import React from 'react'

function Layout({children}) {
  return (
    <div className='bg-gray-200 flex flex-col items-center mt-10 py-10  font-[Raleway]'>
      <div className='flex flex-col w-[90%] py-16 gap-7 justify-center items-center content-center'>
        {children}
      </div>
    </div>
  )
}

export default Layout