import React, { Component, MouseEvent } from "react";
import { data } from "./utils/store";
import "./App.css";
import { ICard } from "./models/card";
import { IFilters } from "./types";
import {
  setLetters,
  setItems,
  paginationHelper,
  onChangeFilters,
  resetLetterFilter,
  resetItemFilter,
} from "./helpers";
import Card from "./components/Card";
import LetterFilter from "./components/LetterFilter";
import ItemFilter from "./components/ItemFilter";
import Pagination from "./components/Pagination";
// const data = [
//   {
//     id: 1,
//     letter: "b",
//     year: "1982-1983",
//     item: "Językoznawstwo",
//     author: "bąk",
//     img_src:
//       "https://res.cloudinary.com/zielona-g-ra/image/upload/v1643632889/Bibliografia/B%C4%85k_wselhj.jpg",
//   },
//   {
//     id: 2,
//     year: "1982-1983",
//     letter: "b",
//     item: "Językoznawstwo",
//     author: "bork",
//     img_src:
//       "https://res.cloudinary.com/zielona-g-ra/image/upload/v1643632855/Bibliografia/Bork_j8rezp.jpg",
//   },
//   {
//     id: 3,
//     year: "1982-1983",
//     letter: "z",
//     item: "Językoznawstwo",
//     author: "zagórski",
//     img_src:
//       "https://res.cloudinary.com/zielona-g-ra/image/upload/v1643632519/Bibliografia/Zag%C3%B3rski_bouccf.jpg",
//   },
//   {
//     id: 4,
//     letter: "a",
//     year: "1982-1983",
//     item: "Historia Literatury.Życie literackie",
//     author: "adamchuk",
//     img_src:
//       "https://res.cloudinary.com/zielona-g-ra/image/upload/v1643643957/Bibliografia/adamczuk_du1zyv.jpg",
//   },
//   {
//     id: 5,
//     letter: "a",
//     year: "1982-1983",
//     item: "Historia Literatury.Życie literackie",
//     author: "adamchuk",
//     img_src:
//       "https://res.cloudinary.com/zielona-g-ra/image/upload/v1643644300/Bibliografia/Adamchuk3_lz3lbs.jpg",
//   },
//   {
//     id: 6,
//     letter: "a",
//     year: "1982-1983",
//     item: "Historia Literatury.Życie literackie",
//     author: "adamchuk",
//     img_src:
//       "https://res.cloudinary.com/zielona-g-ra/image/upload/v1643644300/Bibliografia/Adamczuk2_ihcwj0.jpg",
//   },
//   {
//     id: 7,
//     letter: "a",
//     year: "1982-1983",
//     item: "Historia Literatury.Życie literackie",
//     author: "adamchuk",
//     img_src:
//       "https://res.cloudinary.com/zielona-g-ra/image/upload/v1643644300/Bibliografia/Adamchuk1_zywq4n.jpg",
//   },
//   {
//     id: 8,
//     letter: "a",
//     year: "1982-1983",
//     item: "Historia Literatury.Życie literackie",
//     author: "adamchuk",
//     img_src:
//       "https://res.cloudinary.com/zielona-g-ra/image/upload/v1643644300/Bibliografia/Adamczuk4_omzg7j.jpg",
//   },
//   {
//     id: 9,
//     letter: "a",
//     year: "1982-1983",
//     item: "Historia Literatury.Życie literackie",
//     author: "ankiewicz",
//     img_src:
//       "https://res.cloudinary.com/zielona-g-ra/image/upload/v1643644300/Bibliografia/Ankiewicz_oz9t54.jpg",
//   },
//   {
//     id: 10,
//     letter: "b",
//     year: "1982-1983",
//     item: "Historia Literatury.Życie literackie",
//     author: "borowa",
//     img_src:
//       "https://res.cloudinary.com/zielona-g-ra/image/upload/v1643644301/Bibliografia/Borowa_et30vu.jpg",
//   },
//   {
//     id: 11,
//     letter: "c",
//     year: "1982-1983",
//     item: "Historia Literatury.Życie literackie",
//     author: "ciesielski",
//     img_src:
//       "https://res.cloudinary.com/zielona-g-ra/image/upload/v1643644301/Bibliografia/Ciesielski_axubw5.jpg",
//   },
// ];

function App() {
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
    <div className='App'>
      <header className='header'>
        <div className='header-container'>
          <h1>Bibliografia Ziemi Lubuskiej 1945-1985</h1>
        </div>
      </header>
      <main>
        <div className='main-container'>
          <section className='up'>
            <h1>1982-1983</h1>
            <div>
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
              </select>
            </div>
          </section>
          <div className='grid'>
            <ItemFilter
              filters={filters}
              set={itemSet}
              resetFilter={() => resetItemFilter(filters, setFilters)}
              onChangeFilters={onClickButton}
            />

            <div className='content'>
              <h2>Filtruj według nazwiska autora:</h2>
              <LetterFilter
                filters={filters}
                set={letterSet}
                resetFilter={() => resetLetterFilter(filters, setFilters)}
                onChangeFilters={onClickButton}
              />
              <Pagination
                pages={pages}
                filters={filters}
                setFilters={setFilters}
              />
              <div className='card-box'>
                {limitedCards.map((card) => (
                  <Card key={card.id} card={card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
