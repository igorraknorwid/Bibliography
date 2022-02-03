import { ICard } from "../models/card";
import { ISet } from "../types";

export const setItems = (cards: ICard[], letter: string) => {
  const cardsFilteredByLetter = cards.filter((l) => {
    if (letter === "all") {
      return true;
    }
    if (letter === l.letter) {
      return true;
    }
    return false;
  });

  const defineItems = () => {
    let itemList: ISet[] = [];

    let items: string[] = [];

    cardsFilteredByLetter.forEach((card) => {
      items = [...items, card.item]; //
    });

    let mySet: string[] = []; // remove dublicate

    items.forEach((element) => {
      if (!mySet.includes(element)) {
        mySet.push(element);
      }
    });

    mySet.forEach((item) => {
      const total = items.filter((l) => l === item).length;
      const itemObj = {} as ISet;
      itemObj.name = item;
      itemObj.total = total;
      itemList = [...itemList, itemObj];
    });

    return itemList;
  };

  return { itemSet: defineItems() };
};
