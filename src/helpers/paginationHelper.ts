import { ICard } from "../models/card";
import { IFilters } from "../types";

export const paginationHelper = (
  cards: ICard[],
  filters: IFilters,
  total: number,
  limit: number
) => {
  const pages = Math.ceil(total / limit);
  const page = filters.page;
  const top = page < pages + 1 && page > 0 ? limit * page : limit * 1;
  const bottom = top - limit;

  const filteredCards = cards
    .filter((card) => {
      if (filters.letter === "all") {
        return true;
      }
      if (filters.letter === card.letter) {
        return true;
      }
      return false;
    })
    .filter((card) => {
      if (filters.item === "all") {
        return true;
      }

      if (filters.item === card.item) {
        return true;
      }

      return false;
    })
    .sort((a: ICard, b: ICard) => a.author.localeCompare(b.author));

  const limitedCards = filteredCards.slice(bottom, top);

  return {
    pages,
    page,
    top,
    bottom,
    filteredCards,
    limitedCards,
  };
};
