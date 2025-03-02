import React from 'react';

const Pagination = (data) => {
    const { nextPageFn, prevPageFn, pageNumber } = data;
  return (
    <div className="flex gap-6 justify-center mt-10 items-center">
      <div
        className="bg-gray-200 border-gray-800 px-2 py-1 rounded-lg hover:cursor-pointer"
        onClick={prevPageFn}
      >
        Prev
      </div>
      <div className="text-gray-500">{pageNumber}</div>
      <div
        className="bg-gray-200 border-gray-800 px-2 py-1 rounded-lg hover:cursor-pointer"
        onClick={nextPageFn}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
