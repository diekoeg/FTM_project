import { Pagination } from 'flowbite-react';
import React, { useState } from 'react'


function PaginationComponent({total}) {

    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination currentPage={currentPage} totalPages={total} onPageChange={onPageChange} showIcons />
    </div>
  )
}

export default PaginationComponent