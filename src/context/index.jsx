import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [fetching, setFetching] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [RecipeDetails, setRecipeDetails] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);
  const notify = () => {
    // Calling toast method by passing string
    toast("Hello Geeks");
  };

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

  const handleAddFavorite = (currentItem) => {
    // console.log(item);

    let cpyFavoriteList = [...favoriteList];
    let index = cpyFavoriteList.findIndex((item) => item.id == currentItem.id);
    if (index == -1) {
      // NOT PRESNT
      cpyFavoriteList.push(currentItem);
    } else {
      // already present remove
      cpyFavoriteList.splice(index);
    }
    setFavoriteList(cpyFavoriteList);

    // console.log(favoriteList);
  };

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        fetching,
        recipeList,
        RecipeDetails,
        setRecipeDetails,
        favoriteList,
        setFavoriteList,
        handleAddFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
