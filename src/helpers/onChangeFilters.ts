import { IFilters } from "../types";

export const onChangeFilters = (e: any, filters: IFilters, setFilters: any) => {
  if (e.target.name === "letter") {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
      item: "all",
      page: 1,
    });
  } else {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
      page: 1,
    });
  }
};
