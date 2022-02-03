import { IFilters, ISet } from "../types";
import React, { FC } from "react";

interface IFilter {
  filters: IFilters;
  set: ISet[];
  resetFilter: any;
  onChangeFilters: any;
}

const ItemFilter: FC<IFilter> = ({
  filters,
  set,
  resetFilter,
  onChangeFilters,
}) => {
  return (
    <div className='filter'>
      {/* <h2>Filtruj według haseł:</h2> */}
      {filters["item"] === "all" ? (
        <button className='btn--active' onClick={resetFilter}>
          wszystkie hasła
        </button>
      ) : (
        <button className='filter__btn' onClick={resetFilter}>
          wszystkie hasła
        </button>
      )}

      {set.map((opt: any, i: number) =>
        filters["item"] === opt.name ? (
          <button
            key={i}
            className='btn--active'
            name={"item"}
            value={opt.name}
            onClick={resetFilter}
          >
            {opt.name} <i>{opt.total}</i>
          </button>
        ) : (
          <button
            key={i}
            name={"item"}
            value={opt.name}
            onClick={(e) => onChangeFilters(e)}
          >
            {opt.name} <i>{opt.total}</i>
          </button>
        )
      )}
    </div>
  );
};

export default ItemFilter;
