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
    <div className='letters'>
      <div className='letters-all'>
        <div>
          {filters["letter"] === "all" ? (
            <button className='btn--active' onClick={resetFilter}>
              wszyscy autorzy
            </button>
          ) : (
            <button className='filter__btn' onClick={resetFilter}>
              wszystkie autory
            </button>
          )}
        </div>
      </div>
      <div className='alfabet'>
        {alfabet.map((l, i) => {
          if (set.find((item) => item.name === l)) {
            if (l === filters["letter"]) {
              return (
                <button
                  key={i}
                  name={"letter"}
                  value={l}
                  onClick={resetFilter}
                  className='alfabet__btn--active'
                >
                  {l}
                </button>
              );
            }
            return (
              <button
                key={i}
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
  );
};

export default LetterFilter;
