import { ReactElement, ReactNode, useState } from 'react';

type PaginationProps = {
  children: ReactNode[];
  itemsPerPage: number;
};
const Pagination = ({ children, itemsPerPage }: PaginationProps): ReactElement => {
  const [paginationValues, setPaginationValues] = useState({ currentPage: 0, itemsPerPage: itemsPerPage });
  const getChildrenLength = (children: ReactNode[]): number => {
    const total = children.length;
    return total;
  };
  const getPages = (): number => {
    const total = getChildrenLength(children);
    const pages = total / itemsPerPage;

    return pages % 1 === 0 ? pages : Math.floor(pages) + 1;
  };
  const paginate = (children: ReactNode[]): ReactNode[] => {
    return children.slice(
      paginationValues.currentPage * paginationValues.itemsPerPage,
      paginationValues.currentPage * paginationValues.itemsPerPage + paginationValues.itemsPerPage
    );
  };
  const handlePageSelection = (pageNumber: number) => {
    console.log(pageNumber);
    setPaginationValues({ ...paginationValues, currentPage: pageNumber });
  };
  useState({ page: 0 });
  return (
    <div className=''>
      {paginate(children).map((el) => el)}
      <div className='flex justify-center'>
        {Array.from({ length: getPages() }).map((_, idx) => (
          <span
            key={idx}
            onClick={() => handlePageSelection(idx)}
            className={`text-white font-bold pointer px-1 py-1 ${
              idx === paginationValues.currentPage ? 'border border-blue-400 rounded' : ''
            }`}
          >
            {idx + 1}
          </span>
        ))}
      </div>
    </div>
  );
};
export { Pagination };
