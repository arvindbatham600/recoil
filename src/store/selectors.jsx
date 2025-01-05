import { selector } from "recoil";
import { filterName, todos } from "./atoms";

export const filteredList = selector({
  key: "filteredList",
  get: ({ get }) => {
    const todoList = get(todos);
    const filterValue = get(filterName);

    const filteredList = todoList.filter((todo) =>
      todo.text.includes(filterValue)
    );
    return filteredList.length > 0 ? filteredList : [];
  },
});
