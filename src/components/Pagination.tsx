import React from "react";
import { IFilters } from "../types";

interface IPagination {
  pages: number;
  filters: IFilters;
  setFilters: any;
}

const Pagination: React.FC<IPagination> = ({ pages, filters, setFilters }) => {
  const pageArr = Array.from({ length: pages }, (v, k) => k);
  const onNextPage = (e: any) => {
    const page = e.target.value;
    setFilters({ ...filters, page: page });
  };

  return (
    <div className='pagination'>
      <div>strony:</div>
      <div>
        {pageArr.map((num, i) => {
          const page = num + 1;

          if (Number(filters.page) === page) {
            return (
              <button
                key={i}
                className='btn--active'
                value={num + 1}
                onClick={(e) => onNextPage(e)}
              >
                {num + 1}
              </button>
            );
          } else {
            return (
              <button
                key={i}
                className='page-btn'
                value={num + 1}
                onClick={(e) => onNextPage(e)}
              >
                {num + 1}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Pagination;
