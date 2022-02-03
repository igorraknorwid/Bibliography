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
    <div className='sidebar'>
      <h2>Filtruj według haseł:</h2>
      {filters["item"] === "all" ? (
        <button
          style={{ background: "blue", color: "#fff" }}
          onClick={resetFilter}
        >
          wszystko
        </button>
      ) : (
        <button className='filter__btn-all' onClick={resetFilter}>
          wszystko
        </button>
      )}

      {set.map((opt: any, i: number) =>
        filters["item"] === opt.name ? (
          <button
            key={i}
            style={{ background: "blue", color: "#fff" }}
            className='filter__item_active'
            name={"item"}
            value={opt.name}
            onClick={resetFilter}
          >
            {opt.name} <i>{opt.total}</i>
          </button>
        ) : (
          <button
            key={i}
            className='filter__item'
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
