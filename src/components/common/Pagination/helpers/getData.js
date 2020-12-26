export const getPages = (
  totalItemsCount,
  pageSize,
  portionSize,
  portionNumber
) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize;

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return [pages, portionCount, leftPortionPageNumber, rightPortionNumber];
};
