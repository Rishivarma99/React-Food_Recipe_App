import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipeitem";
const Favorites = () => {
  const { favoriteList, setFavoriteList, handleAddFavorite } =
    useContext(GlobalContext);
  return (
    <>
      <div className="w-full">
        {favoriteList && favoriteList.length > 0 ? (
          // LIST DIV
          <div className="flex flex-wrap justify-normal p-5">
            {/* EACH ITEM  */}
            {favoriteList.map((item, index) => (
              <RecipeItem item={item} key={item?.id}></RecipeItem>
            ))}
          </div>
        ) : (
          <h1 className="text-3xl text-gray-700 text-center font-semibold capitalize ">
            Nothing Is Added in favorite list
          </h1>
        )}
      </div>
    </>
  );
};

export default Favorites;
