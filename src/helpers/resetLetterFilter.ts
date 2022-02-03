import { IFilters } from "../types";

export const resetLetterFilter = (filters: IFilters, setFilters: any) => {
  setFilters({
    ...filters,
    letter: "all",
    item: "all",
    page: 1,
  });
};
