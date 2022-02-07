import React, { Component, MouseEvent } from "react";
import { data } from "../utils/store";
import { ICard } from "../models/card";
import { IFilters } from "../types";
import {
  setLetters,
  setItems,
  paginationHelper,
  onChangeFilters,
  resetLetterFilter,
  resetItemFilter,
} from "../helpers";
import Card from "../components/Card";
import LetterFilter from "../components/LetterFilter";
import ItemFilter from "../components/ItemFilter";
import Pagination from "../components/Pagination";

function Bibliography() {
  const [value, setValue] = React.useState("5");
  const [total, setTotal] = React.useState(data.length);
  const [limit, setLimit] = React.useState(5);
  const [cards, setCards] = React.useState<ICard[]>(data);
  const [filters, setFilters] = React.useState<IFilters>({
    letter: "all",
    item: "all",
    page: 1,
  });

  const { letterSet } = setLetters(cards);
  const { itemSet } = setItems(cards, filters.letter);
  const { pages, filteredCards, limitedCards } = paginationHelper(
    cards,
    filters,
    total,
    limit
  );

  React.useEffect(() => {
    setTotal(filteredCards.length);
  }, [filters]);

  React.useEffect(() => {
    setLimit(Number(value));
  }, [value]);

  console.log(limitedCards);

  const onClickButton = (e: MouseEvent) =>
    onChangeFilters(e, filters, setFilters);
  return (
    <>
      <section className='up'>
        <div className='up-box'>
          <h2 className='up-title'>1982-1983</h2>
        </div>

        <div className='select'>
          <span>Liczba kart na stronie: </span>
          <select
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
      </section>
      <div className='grid'>
        <div className='content'>
          {/* <h2>Filtruj według nazwiska autora:</h2> */}
          <LetterFilter
            filters={filters}
            set={letterSet}
            resetFilter={() => resetLetterFilter(filters, setFilters)}
            onChangeFilters={onClickButton}
          />

          <div className='card-box'>
            {limitedCards.map((card) => (
              <Card key={card.id} card={card} />
            ))}

            <Pagination
              pages={pages}
              filters={filters}
              setFilters={setFilters}
            />
          </div>
        </div>
        <div>
          <ItemFilter
            filters={filters}
            set={itemSet}
            resetFilter={() => resetItemFilter(filters, setFilters)}
            onChangeFilters={onClickButton}
          />
        </div>
      </div>
    </>
  );
}

export default Bibliography;
