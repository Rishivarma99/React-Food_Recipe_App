import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [fetching, setFetching] = useState(false);
  const [recipeList, setRecipeList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault(); // from form

    try {
      setFetching(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();

      if (data?.data?.recipes) {
        setFetching(false);
        setRecipeList(data.data.recipes);
        setSearchParam("");
      }
    } catch (er) {
      console.log(er);
      setFetching(false);
      setSearchParam("");
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        fetching,
        recipeList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
