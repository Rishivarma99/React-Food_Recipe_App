import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

const Details = () => {
  //  TO GET THE ID IN THE URL WE USE REACT DOM HOOK USEpARAMS

  const param = useParams();

  const { RecipeDetails, setRecipeDetails, handleAddFavorite, favoriteList } =
    useContext(GlobalContext);
  useEffect(() => {
    async function fetchRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${param?.id}`
      );
      const allData = await response.json();
      // console.log(allData);

      if (allData) {
        setRecipeDetails(allData?.data.recipe);
      }
    }
    fetchRecipeDetails();
  }, [param]);
  // console.log(RecipeDetails);

  return (
    <>
      <div className=" m-4">
        <h1 className="text-center p-2 text-3xl font-mono font-bold text-red-700">
          Deatils
        </h1>

        {RecipeDetails ? (
          <div>
            <div className="flex flex-col justify-evenly items-center sm:flex-row">
              <div className="p-4 w-[400px] flex justify-center md:w-[500px]">
                <img
                  src={`${RecipeDetails?.image_url}`}
                  alt=""
                  className=" border rounded-lg "
                />
              </div>
              <div className="p-1">
                <div className="text-2xl p-1 md:text-3xl text-center">
                  {RecipeDetails?.title}
                </div>
                <div className="text-xl text-center p-1  md:text-2xl ">
                  {RecipeDetails?.publisher}
                </div>
                <div className="text-center m-1">
                  <button
                    className=" border rounded-md bg-black p-2 text-white text-[15px] md:text-xl capitalize"
                    onClick={(e) => handleAddFavorite(RecipeDetails)}
                  >
                    {favoriteList &&
                    favoriteList.length > 0 &&
                    favoriteList.findIndex(
                      (item) => item.id == RecipeDetails.id
                    ) !== -1
                      ? "Remove From Favorite"
                      : "Add to favorite"}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-2 ">
              <p className="text-2xl text-center mb-2">Ingrediants</p>
              {RecipeDetails?.ingredients ? (
                <div className="w-full">
                  {RecipeDetails?.ingredients &&
                  RecipeDetails?.ingredients.length > 0 ? (
                    <div className="flex flex-wrap mx-auto justify-evenly sm:justify-center gap-x-2">
                      {RecipeDetails.ingredients.map((item) => {
                        return (
                          <div
                            className=" border rounded-md h-[150px] w-[150px] bg-slate-300 p-1 text-center flex flex-col   mt-1 shadow-sm  "
                            key={item.id}
                          >
                            <p className="text-[15px] capitalize h-[70%] ">
                              {item.description}
                            </p>
                            <div className="bg-slate-500 h-[25%]">
                              {" "}
                              <span>{item.quantity}</span>{" "}
                              <span>{item.unit}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p>INGREDIENTS LOADING </p>
                  )}
                </div>
              ) : (
                "Ingrediaets"
              )}
            </div>
          </div>
        ) : (
          <p>Fetching details </p>
        )}
      </div>
    </>
  );
};

export default Details;
