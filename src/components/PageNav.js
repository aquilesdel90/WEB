import React from "react";

const PageNav = ({ currentPage, totalPages }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="page-nav">
      {pageNumbers.map((pageNumber) => (
        <div
          key={pageNumber}
          className={`page-dot ${currentPage === pageNumber ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default PageNav;
