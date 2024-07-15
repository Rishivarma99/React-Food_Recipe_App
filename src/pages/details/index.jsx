import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

const Details = () => {
  //  TO GET THE ID IN THE URL WE USE REACT DOM HOOK USEpARAMS

  const param = useParams();
  const { RecipeDetails, setRecipeDetails } = useContext(GlobalContext);
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
      <div className="border m-5">
        <h1>Deatils</h1>

        {RecipeDetails ? (
          <div>
            {/* // name and photo */}
            <div className="flex flex-col">
              <div className="">
                <div>{RecipeDetails?.title}</div>
                <div>{RecipeDetails?.publisher}</div>
              </div>
              <div>
                <img src={`${RecipeDetails?.image_url}`} alt="" />
              </div>
            </div>
            <div>
              <p>Ingrediants</p>
              {RecipeDetails?.ingredients ? (
                <div>{RecipeDetails?.ingredients.map}</div>
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
