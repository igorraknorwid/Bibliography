import { IFilters } from "../types";

export const resetItemFilter = (filters: IFilters, setFilters: any) => {
  setFilters({
    ...filters,
    item: "all",
    page: 1,
  });
};
