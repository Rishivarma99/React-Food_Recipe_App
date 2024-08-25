import { useContext } from "react";
import { GlobalContext } from "../../context";
import "./style.css";
import RecipeItem from "../../components/recipeitem";
const Home = () => {
  const { fetching, recipeList } = useContext(GlobalContext);
  if (fetching) {
    return (
      <div className="spinner-grow text-primary fr-fetching" role="status ">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  // console.log(recipeList);

  return (
    <>
      <div className="w-full">
        {recipeList && recipeList.length > 0 ? (
          // LIST DIV
          <div className="flex flex-wrap justify-evenly p-5">
            {/* EACH ITEM  */}
            {recipeList.map((item, index) => (
              <RecipeItem item={item} key={item?.id}></RecipeItem>
            ))}
          </div>
        ) : (
          <h1 className="text-3xl text-gray-700 text-center font-semibold capitalize ">
            Nothing to show please enter any item{" "}
          </h1>
        )}
      </div>
    </>
  );
};

export default Home;
