import { useState, useEffect } from 'react';

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedItems, setPaginatedItems] = useState([]);
  const dataArray = Array.isArray(data) ? data : Object.values(data);

  const totalPages = Math.ceil(dataArray.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = dataArray.slice(startIndex, endIndex);

    setPaginatedItems(itemsToDisplay);
  }, [currentPage, dataArray, itemsPerPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return {
    currentPage,
    totalPages,
    paginatedItems,
    nextPage,
    prevPage,
  };
};

export default usePagination;
