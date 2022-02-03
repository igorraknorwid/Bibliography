import { ICard } from "../models/card";

interface ISet {
  name: string;
  total: number;
}

export const setLetters = (cards: ICard[]) => {
  let letterSet: ISet[] = [];
  if (cards) {
    let count: ISet[] = [];
    const letters = cards.map((l) => l.letter); //

    let mySet: string[] = [];
    letters.forEach((element) => {
      if (!mySet.includes(element)) {
        mySet.push(element);
      }
    });

    // remove dublicate
    mySet.forEach((letter) => {
      const total = cards.filter((l) => l.letter === letter).length;
      const letterObj = {} as ISet;
      letterObj.name = letter;
      letterObj.total = total;
      count = [...count, letterObj];
    });
    letterSet = [...count].sort((a: ISet, b: ISet) => b.total - a.total);
  }
  return { letterSet };
};
