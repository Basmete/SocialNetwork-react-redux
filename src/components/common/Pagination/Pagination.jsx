import React, { useState } from "react";
import styles from "./Pagination.module.css";
import { getPages } from "./helpers/getData";
import cn from "classnames";

function Pagination({
  onPageChanged,
  currentPage,
  totalItemsCount,
  pageSize,
  portionSize = 10,
}) {
  const [portionNumber, setPortionNumber] = useState(1);

  const [
    pages,
    portionCount,
    leftPortionPageNumber,
    rightPortionNumber,
  ] = getPages(totalItemsCount, pageSize, portionSize, portionNumber);

  const onPageClick = (page) => {
    onPageChanged(page);
  };

  return (
    <div className="pagination">
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber((p) => p - 1)}>PREV</button>
      )}
      <div>
        {pages
          .filter(
            (page) =>
              page >= leftPortionPageNumber && page <= rightPortionNumber
          )
          .map((page) => (
            <span
              onClick={() => onPageClick(page)}
              className={cn({
                [styles.selectedPage]: currentPage === page,
                [styles.page]: true,
              })}
            >
              {page}
            </span>
          ))}
      </div>
      {portionCount > portionNumber && (
        <button onClick={() => setPortionNumber((portion) => portion + 1)}>
          NEXT
        </button>
      )}
    </div>
  );
}

export default Pagination;
