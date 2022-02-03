import { IFilters, ISet } from "../types";
import React, { FC } from "react";

interface IFilter {
  filters: IFilters;
  set: ISet[];
  resetFilter: any;
  onChangeFilters: any;
  // resetItemFilter: any;
}

const alfabet = [
  "a",
  "ą",
  "b",
  "c",
  "ć",
  "d",
  "e",
  "ę",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "ł",
  "m",
  "n",
  "ń",
  "o",
  "ó",
  "p",
  "q",
  "r",
  "s",
  "ś",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "ź",
  "ż",
];

const LetterFilter: FC<IFilter> = ({
  filters,
  set,
  resetFilter,
  onChangeFilters,
  // resetItemFilter,
}) => {
  return (
    <div className='filters'>
      <div className='container'>
        <div className='filter_group'>
          {filters["letter"] === "all" ? (
            <button
              style={{ background: "blue", color: "#fff" }}
              className='filter__btn-all_active'
              onClick={resetFilter}
            >
              wszystko
            </button>
          ) : (
            <button className='filter__btn-all' onClick={resetFilter}>
              wszystko
            </button>
          )}
          {alfabet.map((l, i) => {
            if (set.find((item) => item.name === l)) {
              if (l === filters["letter"]) {
                return (
                  <button
                    key={i}
                    style={{ background: "blue", color: "#fff" }}
                    className='filter__item_active'
                    name={"letter"}
                    value={l}
                    onClick={resetFilter}
                  >
                    {l}
                  </button>
                );
              }
              return (
                <button
                  key={i}
                  className='filter__item'
                  name={"letter"}
                  value={l}
                  onClick={(e) => {
                    onChangeFilters(e);
                  }}
                >
                  {l}
                </button>
              );
            } else {
              return (
                <button key={i} disabled={true}>
                  {l}
                </button>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default LetterFilter;
