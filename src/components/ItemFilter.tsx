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
      {filters["item"] === "all" && filters["letter"] === "all" ? (
        <div style={{ padding: "5px 10px" }}>
          wszystkie hasła z 1982-1983 r.
        </div>
      ) : (
        <div style={{ padding: "5px 10px" }}>
          hasła z literą{" "}
          <span style={{ fontWeight: "700" }}>{filters.letter}</span>
        </div>
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
