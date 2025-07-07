import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 3) pageNumbers.push("...");
      if (currentPage > 2) pageNumbers.push(currentPage - 1);
      pageNumbers.push(currentPage);
      if (currentPage < totalPages - 1) pageNumbers.push(currentPage + 1);
      if (currentPage < totalPages - 2) pageNumbers.push("...");
      if (currentPage !== totalPages) pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex gap-2 mt-4 flex-wrap">
      {pageNumbers.map((num, index) =>
        num === "..." ? (
          <span key={index} className="px-2 text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(num)}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer ${
              currentPage === num
                ? "bg-[#6DA40A] text-white"
                : " text-black bg-white"
            }`}
          >
            {num}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
